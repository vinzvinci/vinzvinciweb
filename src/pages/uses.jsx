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
        <title>jiraphinya Wechabut | Uses</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="ซอฟต์แวร์ที่ฉันใช้ อุปกรณ์ที่ฉันชอบ และสิ่งอื่นๆ ที่ฉันแนะนำ."
        intro="ฉันถูกถามมากมาย เกี่ยวกับสิ่งที่ฉันใช้ในการสร้างซอฟต์แวร์ ให้ทำงานอย่างมีประสิทธิผล หรือว่าฉันคิดไปเอง ว่าตัวเองมีประสิทธิผลทั้งๆ ที่ฉันแค่ผัดวันประกันพรุ่งจริงๆ นี่คือสิ่งที่ฉันมี มันน้อยเกิน ดังนั้นอย่าเอาฉันไปเปรียบกับฮีโร่ บนยูทูป."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation-น้อยๆของฉัน">
            <Tool title="Desktop Computer">
            ฉันใช้โปรแกรมปรับแต่ง PC เพื่อรันแอพพลิเคชั่นขนาดใหญ่ และแน่นอนว่าฉันทำความสะอาดคอมพิวเตอร์ อย่างสม่ำเสมอ ไวรัสยังเป็นสิ่งน่ากลัว ดังนั้นฉันไม่เก็บ บางอย่างไว้นานเกินไป เเละยินดีที่จะกด Delete .
            </Tool>
            <ToolsSection title="ข้อมูลจำเพาะที่สำคัญ">
            <Tool>
              - <b>Dual Monitor: </b>จอภาพคู่: Acer และ Samsung 19 นิ้ว 144hz<br/>
              - <b>Keyboard: </b>Razer<br/>
              - <b>Processor: </b>Intel® Core™2 Quad Q8400 แคช 4M, 2.66 GHz, 1333 MHz FSB<br/>
              - <b>GPU: </b>nvidia geforce รุ่น ลบเลือน<br/>
              - <b>RAM: </b>16 GB<br/>
              - <b>Storage:</b>พื้นที่เก็บข้อมูล: 250GB HDD + 500GB HDD<br/>
              - <b>บางสิ่ง: </b> นอกจากคีย์บอร์ด ฉันคิดว่าอุปกรณ์รุ่นนี้ ผลิตช่วงที่ฉันเกิด<br/>
              - <b>อย่างว่า: </b> นั้นละน่าละอาย หลายคนอาจโยนมันทิ้ง เพราะเก่าเเละเต่ามาก<br/>
              - <b>เหตุผล: </b> เเต่ฉันพอใจเท่าที่มี จะดูเเลกันจนกว่าจะบูตไม่ติด<br/> 
                    
            </Tool>
            </ToolsSection>
            <Tool title="Laptop-ฉันเคยมี เเต่บางครั้ง..">
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
            <Tool title="Redmi เเละ IPhone ในบางครั้ง">
              High specs for taking pictures and video recording. I use this for my personal use.
            </Tool>
          </ToolsSection>
          <ToolsSection title="เครื่องมือในการพัฒนา">
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
              ฉันใช้ Figma สำหรับโครงการออกแบบของฉัน ฉันชอบความเรียบง่ายของ UI และฟีเจอร์ต่างๆ.
            </Tool>
            <Tool title="Canva">
            ฉันใช้ Canva เพื่อการออกแบบบางสิ่ง เราได้ฟังก์ชั่นบางอย่างเพิ่มเติม เพราะพ่อฉันเคยสอนหนังสือ ฉันยังใช้สิ่งนี้เพื่อการใช้งานส่วนตัวของฉันด้วย.
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
