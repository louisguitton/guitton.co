import imageLaptop from "public/images/freelance/launch.jpg";
import imageMeeting from "public/images/freelance/team.jpg";
import imageWhiteboard from "public/images/freelance/training.jpg";
import { Section } from "./Section";
import { TagList, TagListItem } from "./TagList";

export function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600 prose">
        <p>
          I work closely with our clients to <b>identify</b> and validate the
          problem that needs solving. I aim at greatly minimize the
          customer&apos;s risk of investing in a product that does not meet real
          user needs.
        </p>
        <p>
          I use user interviews to start from the problem encountered by users
          and not an assumed solution. I <b>define</b> the scope of the
          potential digital services. I then make an inventory of existing
          technologies and understand the software ecosystem into which the
          application is to be integrated. When needed, I can also do a
          competitor analysis.
        </p>
        <p>
          Once the full audit is complete, I identify and <b>prioritise</b> the
          key features that makes sense to be integrated. I report back with a
          comprehensive plan and budget.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Explore Market</TagListItem>
        <TagListItem>Explore Users</TagListItem>
        <TagListItem>Customer Centricity</TagListItem>
        <TagListItem>Design Thinking</TagListItem>
        <TagListItem>Define Product Strategy</TagListItem>
        <TagListItem>Prioritize Backlog</TagListItem>
      </TagList>
    </Section>
  );
}

export function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the Discovery phase, I develop a comprehensive roadmap for
          each product and start working towards <b>delivery</b>. I launch a
          functional service within the first few weeks of work, even if
          it&apos;s imperfect and doesn&apos;t yet cover all possible scenarios.
        </p>
        <p>
          After testing the product with early adopters, I develop{" "}
          <b>iterations</b> typically lasting 2 to 4 weeks to improve the
          product. I share progress transparently through frequent
          demonstrations, easily accessible code and documentation. I measure
          impact with data and reporting dashboards accessible to the client.
        </p>
        <p>
          During this phase, I can also support clients in a less hands-on
          fashion, instead <b>coaching</b> the product and engineering teams in
          place. I can run hands-on training sessions, specialised workshops on
          topics of interest to the client, and in general put our expertise at
          the disposal of the client.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>MVP development</TagListItem>
        <TagListItem>Data Solutions</TagListItem>
        <TagListItem>Machine Learning</TagListItem>
        <TagListItem>Backend Architecture</TagListItem>
        <TagListItem>Tech for Marketing and Sales</TagListItem>
        <TagListItem>Deployment</TagListItem>
      </TagList>
    </Section>
  );
}

export function Deliver() {
  return (
    <Section title="Accelerate" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the Build phase, I work towards growing the <b>impact</b> of
          the digital service. I deploy the service at a wider scale.
        </p>
        <p>
          I adapt the product to its <b>growing</b> use. I monitor appropriate
          performance indicators. I expand the functional and/or geographical
          scope of the service.
        </p>
        <p>
          I expand the <b>team</b>, define job desriptions and structure the
          recruitment process. I map key activities and services to different
          teams and define their scope and interactions.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Testing</TagListItem>
        <TagListItem>Infrastructure</TagListItem>
        <TagListItem>Maintenance</TagListItem>
        <TagListItem>Support</TagListItem>
        <TagListItem>Team Definitions</TagListItem>
        <TagListItem>Staffing</TagListItem>
      </TagList>
    </Section>
  );
}
