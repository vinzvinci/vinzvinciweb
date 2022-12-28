import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Vincent Villafuerte | Uses</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Desktop Computer">
              I was using a Customize PC to run big applications and of course I consistently clean my computer twice a month.
            </Tool>
            <ToolsSection title="Important Specs">
            <Tool>
              - <b>Dual Monitor: </b>Acer and Samsung Odyssey CRG5 24inch 144hz<br/>
              - <b>Keyboard: </b>Razer<br/>
              - <b>Processor: </b>AMD Ryzen 3 3300X 4-Core Processor, 3800 Mhz<br/>
              - <b>GPU: </b>AMD Radeon RX 5700 XT<br/>
              - <b>RAM: </b>16 GB<br/>
              - <b>Storage: </b>500GB SSD and 1TB HDD<br/>
            </Tool>
            </ToolsSection>
            <Tool title="Laptop">
              I use <a href="https://pcsupport.lenovo.com/us/en/products/laptops-and-netbooks/300-series/330-14ikb-type-81g2/downloads">Lenovo</a> (330-14IKB (Type 81G2) Laptop (ideapad)) when I’m at Cafe or taking vacation.
            </Tool>
            <ToolsSection title="Important Specs">
            <Tool>
              - <b>Display:</b> 14’’ (35.56 cm) display, 1920 x 1080 px<br/>
              - <b>Processor: </b> Intel Core i3 (7th Gen) Processor<br/>
              - <b>RAM: </b>Upgraded to 20 GB<br/>
              - <b>Storage: </b>500GB SSD<br/>
            </Tool>
            </ToolsSection>
            <Tool title="Redmi Note 11 Pro">
              High specs for taking pictures and video recording. I use this for my personal use.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Most of the time, I use visual studio code for development.
            </Tool>
            <Tool title="GitHub Codespaces">
              This is the best development I used, totally god level for me.
            </Tool>
            <Tool title="Gitpod">
              I’ve been using Gitpod in the past and I’m still using it when open source projects have it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I use Figma for my design projects. I love the simplicity of the UI and the features.
            </Tool>
            <Tool title="Canva">
              I use Canva for random design. I also use this for my personal use.
            </Tool>
            <Tool title="DaVinci Resolved">
              I use DaVinci Resolved for my video editing projects.
            </Tool>
            </ToolsSection>
            <ToolsSection title="Platform">
            <Tool title="GitHub">
              My life is here, I use GitHub to build projects with my community and of course for work. Sometimes, I use GitHub for my personal use.
            </Tool>
            <Tool title="Vercel">
              I use Vercel to deploy every websites I handled.
            </Tool>
            <Tool title="Discord">
              My life is also here. I use Discord for my daily life to talk with friends and community.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              I use Notion to record and organize my daily life.
            </Tool>
            <Tool title="GitHub Kanban Board">
              I use GitHub Kanban Board to organize my projects.
            </Tool>
            <Tool title="Calendly">
              Great tool for scheduling meetings with clients and friends.
            </Tool>
            <Tool title="Google Meet, Zoom, Microsoft Teams">
              I use them whenever needed.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Others">
            <Tool title="Microsoft PowerPoint or Google Slides">
              
            </Tool>
            <Tool title="Microsoft Excel or Google Sheets">
             
            </Tool>
            <Tool title="Microsoft Word or Google Docs">
              
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
