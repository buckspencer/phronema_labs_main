import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/keyboard.png'
import { loadCaseStudies } from '@/lib/mdx'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import easyAdSpendImage from '@/images/current-work/easy-ad-spend.png'
import bigFuzzyImage from '@/images/current-work/big-fuzzy.png'
import familyOfficeImage from '@/images/current-work/family-office.png'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const offerings = [
  'Retail & E-commerce',
  'Professional Services',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Creative Studios',
]

function Clients() {
  return (
    <div className="mx-auto mt-24 w-[50%] rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="mx-auto flex flex-col gap-x-8 text-center sm:flex-row sm:items-center sm:justify-center">
          <h2 className="text-md font-display font-semibold tracking-wider text-white">
            Industries We Serve
          </h2>
          <div className="h-px w-full bg-neutral-800 sm:w-auto sm:flex-auto" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {offerings.map((offering) => (
              <li
                key={offering}
                className="mx-auto flex h-24 w-full items-center justify-center border border-white p-4 transition-transform hover:scale-110"
              >
                <h3 className="text-center text-sm font-semibold tracking-wider text-white sm:text-base">
                  {offering}
                </h3>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Leveraging modern tools for faster deliveries without skimping on what matters"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          In a world of automation and cookie cutter designs, we beleive in
          craftsmanship when it comes to matching clients with the style that
          fit them best.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Solutions for Growing Businesses"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We help small businesses grow by building custom web applications that solve real problems. From e-commerce to customer management, we create tools that make your business more efficient and profitable.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="E-commerce Solutions">
              Custom online stores and marketplaces that help you sell products and services directly to your customers.
            </ListItem>
            <ListItem title="Business Management Tools">
              Custom dashboards and systems to manage inventory, appointments, and customer relationships.
            </ListItem>
            <ListItem title="Customer Portals">
              Secure platforms for your customers to book services, track orders, and manage their accounts.
            </ListItem>
            <ListItem title="Automation Systems">
              Tools that automate repetitive tasks, saving you time and reducing errors in your daily operations.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default function Home({ caseStudies = [] }) {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Boutique Application Development for Growing Businesses
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Phronema Labs is a boutique application development agency dedicated to helping small and medium-sized businesses grow through custom software solutions. We combine technical expertise with a deep understanding of business needs to create applications that drive real results.
          </p>
        </div>
      </Container>

      <Clients />
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-neutral-950 [text-wrap:balance]">
              View our work here
            </h2>
            <div className="mt-8 flex justify-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-x-2 rounded-full bg-neutral-950 px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800"
              >
                Recent Projects
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Services />
      
      <ContactSection />
    </>
  )
}
