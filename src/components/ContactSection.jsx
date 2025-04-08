import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
              Ready to bring your ideas to life?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Based in Tucson, Arizona, we&apos;re a creative development agency that helps businesses turn their digital visions into reality. Whether you need a new web tool, help getting a project off the ground, or a landing page for your business, we&apos;re here to help. Let&apos;s discuss how we can work together to achieve your goals.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Let&apos;s Talk
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
