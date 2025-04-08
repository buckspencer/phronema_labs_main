import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import tucsonSkyline from '@/images/tucson-skyline.jpg'

export const metadata = {
  title: 'About Us',
  description:
    'We&apos;re a team of passionate developers dedicated to helping businesses grow through custom software solutions.',
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We&apos;re a team of passionate developers dedicated to helping businesses grow through custom software solutions. Our deep love for the American Southwest and its communities drives our team to create software that not only solves problems but also enhances lives. Through this commitment, we take pride in working on projects that benefit communities and make a positive impact on people&apos;s daily experiences.
          </p>
          <p>
            Our approach combines technical expertise with a deep understanding of business needs. We believe in building long-term relationships with our clients, working closely with them to understand their unique challenges and goals.
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
