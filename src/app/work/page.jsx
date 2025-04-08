import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import easyAdSpendImage from '@/images/current-work/easy-ad-spend.png'
import bigFuzzyImage from '@/images/current-work/big-fuzzy.png'
import familyOfficeImage from '@/images/current-work/family-office.png'

export const metadata = {
  title: 'Our Work',
  description:
    'Take a look at our recent projects showcasing our ability to deliver high-quality solutions in record time.',
}

function RecentWork() {
  const projects = [
    {
      id: 1,
      title: "EasyAdSpend.com",
      description: "A comprehensive advertising spend management platform that helps businesses track, analyze, and optimize their marketing budgets in real-time.",
      image: easyAdSpendImage,
      href: "https://www.easyadspend.com/",
    },
    {
      id: 2,
      title: "Big Fuzzy",
      description: "A royal pet NFT generator where users can mint their own pet NFT on the ETH network.",
      image: bigFuzzyImage,
      href: "https://royal-pets-next.vercel.app/",
    },
    {
      id: 3,
      title: "Family Office",
      description: "A secure and intuitive platform for families to manage subscription services, syncronize calendars, keep documents in a secure and central location, and more.",
      image: familyOfficeImage,
      href: "https://family-vault-buckspencer.replit.app/",
    },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Recent Work"
        title="Our Latest Projects"
        className="mb-12"
      >
        <p>
          Take a look at some of our most recent work, showcasing our ability to
          deliver high-quality solutions in record time.
        </p>
      </SectionIntro>
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="object-cover"
                  fill
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                <Link href={project.href} className="hover:text-neutral-600" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Work() {
  return (
    <>
      <RecentWork />
      <ContactSection />
    </>
  )
}
