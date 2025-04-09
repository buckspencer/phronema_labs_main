import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import tucsonSkyline from '@/images/tucson-skyline.jpg'

export const metadata = {
  title: 'About Us',
  description:
    'Phronema Labs is a one-person software development operation based in Tucson, AZ, dedicated to enriching the community through technology inspired by the American Southwest.',
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About Phronema Labs" title="Rooted in Tucson, Inspired by the Southwest">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Operating from the scenic hills of Tucson, Arizona, Phronema Labs is a one-man creative development endeavor. Driven by a deep love for the American Southwest and a strong desire to contribute positively to the community, I focus on crafting software solutions that solve meaningful problems and genuinely enrich people's lives.
          </p>
          <p>
            My approach combines technical skill with a dedication to understanding the unique challenges and aspirations of each project. I believe in building close partnerships, working directly with clients to turn their visions into reality.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <div className="relative aspect-[2/1] overflow-hidden rounded-4xl bg-neutral-100">
          <Image
            src={tucsonSkyline}
            alt="Tucson Skyline"
            className="object-cover"
            fill
            priority
          />
        </div>
      </Container>
    </>
  )
}
