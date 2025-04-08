import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn about how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            This Privacy Policy describes how Phronema Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares your personal information when you visit our website or use our services.
          </p>
          <p>
            We take your privacy seriously and are committed to protecting your personal information. This policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <div className="prose prose-neutral max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you fill out a contact form or sign up for our newsletter. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our services, communicate with you, and send you marketing communications if you have opted in to receive them.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.
          </p>
        </div>
      </Container>
    </>
  )
} 