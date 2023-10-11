import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>jiraphinya Wechabut | About</title>
        <meta
          name="description"
          content="I’m jiraphinya Wechabut also known as tam. I live in Udon Thani City, Thailand, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m jiraphinya Wechabut also known as Mint.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there 👋
              </p>
              <p>
              ฉันชื่อจิรภิญญา เวชบุตร แต่เรียกสั้นๆ มิ้นก็ได้ ฉันเป็นนักศึกษาฟรีเเลนซ์ที่มีความกระตือรือร้นและทุ่มเท มุ่งมั่นจะศึกษา Software developer ในฐานะผู้ชื่นชอบ -VALORANT&Free Fire- ตัวยงและผู้สนับสนุน OSS ฉันค้นหาวิธีมีส่วนร่วมกับชุมชนนักพัฒนาและเรียนรู้จากประสบการณ์  ฮีโร่ของฉัน อยู่ตลอดเวลา
              </p>
              <p>
              เทคโนโลยีกลายเป็นส่วนสำคัญในชีวิตประจำวันของฉัน และฉันหลงใหลในชุมชนโอเพ่นซอร์สและวิธีที่ชุมชนส่งเสริมการสื่อสารและการทำงานร่วมกัน ฉันรู้สึกซาบซึ้งที่ได้พบรักในการเขียนโค้ดตั้งแต่อายุยังน้อย และได้มีโอกาสให้คำปรึกษากับนักเรียนคนอื่นๆ และเชื่อมโยงกับผู้คนในอุตสาหกรรมเทคโนโลยีทั่วโลก
              </p>
              <p>
              โดยรวมแล้ว ฉันรู้สึกขอบคุณสำหรับเส้นทางที่ฉันเลือกในอุตสาหกรรมเทคโนโลยี และรู้สึกตื่นเต้นที่จะได้เห็นเส้นทางของฉันในอนาคต
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/phongwut_w/" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/phongwut_w/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Bimint/" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/iprompt/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:0"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ถ้าจะโทร 084-0320193
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
