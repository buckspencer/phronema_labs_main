import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Cookie Policy',
  description:
    'Learn about how we use cookies and similar technologies on our website.',
}

export default function Cookies() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Cookie Policy">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            This Cookie Policy explains how Phronema Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <div className="prose prose-neutral max-w-none">
          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2>Why do we use cookies?</h2>
          <p>
            We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
          </p>

          <h2>How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>
        </div>
      </Container>
    </>
  )
} 