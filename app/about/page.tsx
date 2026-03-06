import type { Metadata } from 'next';
import { GEO, SITE_NAME, PHONE, PHONE_HREF, GMB } from '@/site.config';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: `About Us — Your Local Pest Control Experts`,
  description: `${SITE_NAME} has protected homes across Suffolk County, Nassau County & Queens for over 20 years. Locally owned, licensed & insured. ${GMB.rating} stars from verified customers.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <TrustBar />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 prose-content">
          <h1 className="heading-1 mb-6">On a Quest to Protect Your Home</h1>

          <p className="text-lg text-gray-600 mb-8">
            {SITE_NAME} is a locally owned and operated pest control company headquartered
            in Rocky Point, Long Island. For over 20 years, we&apos;ve been on a mission to keep
            homes and families pest-free across Suffolk County, Nassau County, and Queens.
            We&apos;re not a faceless franchise — we&apos;re your neighbors, and we treat every
            home like it&apos;s our own. That commitment has earned us a {GMB.rating}-star
            reputation with the families we serve.
          </p>

          <h2>What Drives Us</h2>
          <p>
            We started {SITE_NAME} because we believe your home should be a place of comfort,
            not stress. Your kitchen counter shouldn&apos;t have ants marching across it. Your kids
            should be able to play in the yard without mosquito bites. Your attic shouldn&apos;t
            be a highway for mice when the weather turns cold.
          </p>
          <p>
            Every treatment we select is chosen with your family&apos;s safety in mind. We know you
            have children running through the house, pets who sniff every corner, and a home
            you&apos;ve invested years into. That&apos;s why we rely on EPA-approved products and
            Integrated Pest Management — methods that are tough on pests and gentle on
            everything you care about.
          </p>

          <h2>Why Long Island &amp; Queens Families Choose Us</h2>
          <ul>
            <li>
              <strong>20+ years of local expertise:</strong> We know the pest patterns of Long Island
              and Queens inside and out — the spring carpenter ant invasions, the summer tick season
              out east, the fall rodent migrations in the suburbs. This isn&apos;t textbook training;
              it&apos;s what we see every single day in your neighbors&apos; homes.
            </li>
            <li>
              <strong>Family-safe treatments:</strong> Every product and technique we use is selected
              with your family&apos;s wellbeing as the top priority. We&apos;ll always explain
              exactly what we&apos;re applying and why — no mystery chemicals, no surprises.
            </li>
            <li>
              <strong>Fast when it matters:</strong> When you discover mice in the pantry or wasps
              by the front door, tomorrow feels like forever. We offer same-day service availability
              because pest emergencies don&apos;t wait — and neither should you.
            </li>
            <li>
              <strong>Honest pricing, always:</strong> You&apos;ll get a clear, upfront estimate
              before any work begins. Free inspections for all homes. No hidden fees, no upsells,
              no pressure — just straightforward pricing from people you can trust.
            </li>
            <li>
              <strong>We stand behind our work:</strong> If you ever have a concern after treatment,
              pick up the phone and call us directly. A manager will follow up personally to make
              things right. Your satisfaction isn&apos;t a policy — it&apos;s a promise.
            </li>
          </ul>

          <h2>Serving 199 Towns Across 3 Regions</h2>
          <p>
            From the fishing villages of Montauk to the tree-lined streets of Garden City,
            from the bustling avenues of Astoria to the quiet cul-de-sacs of Commack — we
            serve 199 towns across Suffolk County, Nassau County, and Queens. Whether you&apos;re
            in Rocky Point where our trucks are based, or across the Throgs Neck Bridge in
            Flushing, we&apos;re never far away.
          </p>

          <h2>Let Us Help</h2>
          <p>
            Whether you&apos;ve spotted something scurrying in the basement or you just want the
            peace of mind that comes with a professional inspection, give us a call at{' '}
            <a href={PHONE_HREF} className="font-bold">{PHONE}</a>. We&apos;ll listen, answer
            your questions honestly, and schedule a free estimate if you&apos;d like one.
            No pressure, no obligation — just straight talk from your neighbors at {SITE_NAME}.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Home?"
        subtitle="Talk to a local expert who knows Long Island & Queens pest control inside and out. Free estimates, honest advice."
      />
    </>
  );
}
