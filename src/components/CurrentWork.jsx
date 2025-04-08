import { FadeIn, FadeInStagger } from '@/components/FadeIn'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { SectionIntro } from '@/components/SectionIntro'

export function CurrentWork({ projects }) {
  return (
    <>
      <SectionIntro
        eyebrow="Current Work"
        title="Projects we're currently working on"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Take a peek at our active projects. These are the innovations
          we&apos;re bringing to life right now, showcasing our latest
          approaches and technologies in real-time.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.name} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                  {project.href ? (
                    <Link href={project.href}>
                      <span className="absolute inset-0 rounded-3xl" />
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        className="h-full w-full object-cover"
                        width={400}
                        height={225}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      className="h-full w-full object-cover"
                      width={400}
                      height={225}
                    />
                  )}
                </div>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">{project.status}</span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{project.type}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {project.name}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {project.description}
                </p>
                {project.completion && (
                  <div className="mt-8">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-neutral-950">
                        Progress
                      </span>
                      <span className="font-medium text-neutral-950">
                        {project.completion}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-neutral-100">
                      <div
                        className="h-2 rounded-full bg-neutral-950"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
