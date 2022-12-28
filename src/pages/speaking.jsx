import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Vincent Villafuerte | Events</title>
        <meta
          name="description"
          content="I’ve spoken at events in my local community and been invited to some event talks."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events in my local community and been invited to some event talks."
        intro="Speaking at events is a great way to share your knowledge and meet new people. I’ve spoken at events in my local community and been invited to some event talks"
      >
        <div className="space-y-20">
          <SpeakingSection title="2022 Highlights">
            <Appearance
              href="https://www.linkedin.com/feed/update/urn:li:activity:6995267654177497088/"
              title="Getting Started on Open Source with Git and GitHub"
              description="Samsung R&D Philippines invites me to Samsung Open Source Conference Philippines with the theme Bukás Para sa Bukas to be held online on 26th November 2022. It is a conference aiming to increase awareness on and appreciate for open source software in the Philippines."
              event="Samsung Open Source Conference Philippines"
              cta="Link"
            />
            <Appearance
              href="https://fb.watch/hGdDFjT0uO/"
              title="Head & Organizer of GitHub Field Day Philippines"
              description="I bring the unconference event for leaders of technical student communities in the Philippines. GitHub Field Day Philippines brings together a group of student leaders for a day of conversation in the form of lightning talks, discussions, games, or whatever suits the topic best."
              event="GitHub Field Day Philippines"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Hacktoberfest 2022 at my Campus"
              description=""
              event="DFCAMCLP Hacktoberfest 2022"
              cta="Will update soon"
            />
          </SpeakingSection>
          <SpeakingSection title="2021 Highlights">
          <Appearance
              href="#"
              title="GitHub For Students"
              description=""
              event="MSC Talks (TIP Manila)"
              cta="Will update soon"
            />
            <Appearance
              href="#"
              title="Hacktoberfest Philippines 2021"
              description=""
              event="SurPath Hub Hacktoberfest 2021"
              cta="Will update soon"
            />
            <Appearance
              href="#"
              title="#100 Days Of Code"
              description=""
              event="SurPath Hub #100DaysOfCode 2021"
              cta="Will update soon"
            />
            <Appearance
              href="#"
              title="Using Git & GitHub to launch your professional career"
              description=""
              event="Random Viewer at Microsoft Teams"
              cta="Will update soon"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
