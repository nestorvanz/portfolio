import { Article } from "./Article";
import { Section } from "./Section";
import { View } from "./ui/View";
import { Paragraph } from "./ui/Paragraph";

export function Backend() {
  return (
    <View name="Backend">
      <Article heading="Backend Experience" image="/img/backend.png">
        <Paragraph>
          Architected and engineered backend services and microservices for
          fintech and full-stack clients, spanning Node.js, TypeScript, PHP,
          SQL Server, PostgreSQL, MongoDB, and Kafka.
        </Paragraph>
        <Section heading="Architecture & Microservices">
          <Paragraph>
            Architected backend services using Node.js, TypeScript, SQL
            Server, and MongoDB for Laffy's clients and admin applications,
            resulting in microservices supporting 4 distinct applications.
            Architected 2 microservice systems using Node.js and Kafka to
            decouple the notification systems (email and push), leading to a
            net 0% waiting time for notification generation.
          </Paragraph>
        </Section>
        <Section heading="APIs & Data">
          <Paragraph>
            Engineered backend API services using PHP and SQL Server for
            Kobra's mobile application, resulting in the successful
            implementation of 15 new features. Enhanced Kobra's APIs'
            security by migrating more than 100 data queries from raw SQL to
            stored procedures, reducing the SQL injection risk for 50+ APIs.
          </Paragraph>
        </Section>
        <Section heading="Mentorship & Leadership">
          <Paragraph>
            Mentored 20+ engineers on Node.js, TypeScript, and Domain-Driven
            Design through the Wizeline Academy, improving proficiency in code
            maintainability and type safety for enterprise backends. Led a
            team of 4 engineers at RedRabbit to deliver a record management
            system on a condensed timeline by standardizing application
            architecture and development workflows.
          </Paragraph>
        </Section>
      </Article>
    </View>
  );
}
