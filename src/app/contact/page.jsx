import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { useId } from 'react'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-700 bg-transparent px-6 pt-12 pb-4 text-base/6 text-white ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-white focus:ring-white/10 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-400 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB_3_FORMS}
      />

      <h2 className="font-display text-base font-semibold text-white">
        Work inquiries
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl">
        <TextInput label="Name" name="name" autoComplete="name" required />
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
        <TextInput
          label="Company"
          name="company"
          autoComplete="organization"
        />
        <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
        <TextInput label="Message" name="message" required />

        {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
          <fieldset>
            <legend className="text-base/6 text-neutral-500">Project Budget</legend>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <RadioInput label="$5K – $50K" name="budget" value="25" />
              <RadioInput label="$50K – $100K" name="budget" value="50" />
              <RadioInput label="$100K – $150K" name="budget" value="100" />
              <RadioInput label="More than $150K" name="budget" value="150" />
            </div>
          </fieldset>
        </div> */}
      </div>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
      />

      <Button type="submit" className="mt-10" invert>
        How can we help?
      </Button>
    </form>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Phronema Labs
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Based in Tucson, Arizona, we&apos;re a creative development agency helping businesses bring their digital ideas to life.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Phronema Labs to discuss your custom software development needs. Based in Tucson, AZ, we help businesses across the US with application development, e-commerce solutions, and automation tools.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let&apos;s work together">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We&apos;re always excited to hear from potential clients and partners. Whether you have a specific project in mind or just want to learn more about how we can help your business, we&apos;d love to chat.
          </p>
          <p>
            Our team is based in Tucson, Arizona, but we work with clients across the United States. We believe in building strong relationships with our clients, and that starts with a conversation.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <div className="relative rounded-4xl bg-neutral-950 p-6 sm:p-12 lg:order-last">
              <ContactForm />
            </div>
            <ContactDetails />
          </div>
        </div>
      </Container>
    </>
  )
}
