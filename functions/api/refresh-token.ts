import { type EventContext } from "@cloudflare/workers-types";

function JSONResponse(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function ErrorResponse(message: string, status: number) {
  return JSONResponse({ error: { message } }, status);
}

export async function onRequest({
  request,
}: EventContext<unknown, string, unknown>) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return ErrorResponse("Missing Authorization header", 400);
  }

  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  if (type !== "client" && type !== "admin") {
    return ErrorResponse("Query param 'type' not valid", 400);
  }

  const backendUrl =
    "https://main-backend-latest.onrender.com/auth/refresh-token";
  const response = await fetch(backendUrl, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    return ErrorResponse(
      "Missing Authorization header: " + errorText,
      response.status,
    );
  }

  const contentType = response.headers.get("content-type") || "";
  let refreshToken = "";

  if (contentType.includes("application/json")) {
    const payload = (await response.json()) as {
      data: { refreshToken: string };
    };
    refreshToken = payload.data.refreshToken;
  } else {
    refreshToken = (await response.text()).trim();
  }

  if (!refreshToken) {
    return ErrorResponse("Refresh token not found on backend response.", 502);
  }

  const cookieName = `${type}_refresh_token`;
  const cookieValue = encodeURIComponent(refreshToken);
  const cookie = `${cookieName}=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`;

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": cookie,
    },
  });
}
