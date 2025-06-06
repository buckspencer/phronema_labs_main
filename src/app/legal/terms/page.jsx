import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Terms of Service',
  description:
    'Learn about the terms and conditions that govern your use of our website and services.',
}

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Service">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of Phronema Labs&apos; website and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>
          <p>
            Please read these Terms carefully before using our website. If you do not agree to these Terms, you may not access or use our website.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <div className="prose prose-neutral max-w-none">
          <h2>Use of Our Website</h2>
          <p>
            You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use our website in any way that violates any applicable laws or regulations.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of Phronema Labs or its content suppliers and is protected by intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Phronema Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any changes by updating the &quot;Last updated&quot; date at the top of this page.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us through our contact form or at the address provided on our website.
          </p>
        </div>
      </Container>
    </>
  )
} 