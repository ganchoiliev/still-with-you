import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Mental Health Resources",
  description: "Curated UK mental health services: crisis support, NHS Talking Therapies, charities, peer support, and carer resources. All free.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "UK Mental Health Resources",
    description: "Curated UK mental health services: crisis support, NHS Talking Therapies, charities, peer support, and carer resources. All free.",
    url: "https://stillwithyou.app/resources",
    images: ["/opengraph-image.png"],
  },
};

const CATEGORIES = [
  {
    title: "Crisis Support",
    description: "If you need immediate help or feel you can't keep yourself safe.",
    links: [
      { name: "Samaritans", desc: "24/7 listening support, no judgement.", phone: "116 123", url: "https://www.samaritans.org/" },
      { name: "Shout", desc: "24/7 text service for anyone in crisis.", phone: "Text SHOUT to 85258", url: "https://giveusashout.org/" },
      { name: "NHS 111", desc: "For urgent but non-life-threatening physical or mental health needs.", phone: "111 (Option 2)", url: "https://111.nhs.uk/" },
      { name: "CALM", desc: "Campaign Against Living Miserably, 5pm\u2013midnight everyday.", phone: "0800 58 58 58", url: "https://www.thecalmzone.net/" },
    ]
  },
  {
    title: "NHS Services",
    description: "Official public health pathways in the UK.",
    links: [
      { name: "NHS Talking Therapies", desc: "Self-referral for counselling or CBT (formerly IAPT).", url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" },
      { name: "Your Local CMHT", desc: "Community Mental Health Teams usually require a GP referral.", url: "https://www.nhs.uk/mental-health/social-care-and-student-mental-health/community-mental-health-services/" }
    ]
  },
  {
    title: "Charities & Support Organisations",
    description: "Information, advocacy, and guidance.",
    links: [
      { name: "Mind", desc: "Information on all mental health problems.", phone: "0300 123 3393", url: "https://www.mind.org.uk/" },
      { name: "Rethink Mental Illness", desc: "Advice and info for severe mental illness.", url: "https://www.rethink.org/" },
      { name: "YoungMinds", desc: "For young people's mental health.", url: "https://www.youngminds.org.uk/" },
      { name: "SANE", desc: "Out-of-hours mental health helpline.", phone: "0300 304 7000", url: "https://www.sane.org.uk/" }
    ]
  },
  {
    title: "Peer Support & Communities",
    description: "Connect with people who understand.",
    links: [
      { name: "Hub of Hope", desc: "Database of local mental health services in your area.", url: "https://hubofhope.co.uk/" },
      { name: "Side by Side", desc: "Mind's online community (formerly Elefriends).", url: "https://sidebyside.mind.org.uk/" }
    ]
  },
  {
    title: "For Specific Conditions",
    description: "Condition-specific advocacy and support.",
    links: [
      { name: "OCD Action", desc: "Support for Obsessive Compulsive Disorder.", url: "https://ocdaction.org.uk/" },
      { name: "Bipolar UK", desc: "Support for those affected by bipolar.", url: "https://www.bipolaruk.org/" },
      { name: "Anxiety UK", desc: "Relief and support for anxiety disorders.", url: "https://www.anxietyuk.org.uk/" },
      { name: "Beat", desc: "The UK's eating disorder charity.", url: "https://www.beateatingdisorders.org.uk/" }
    ]
  },
  {
    title: "For Supporters & Carers",
    description: "Because your mental health matters too.",
    links: [
      { name: "Carers UK", desc: "Expert advice and support for carers.", url: "https://www.carersuk.org/" },
      { name: "Family Action", desc: "Practical, emotional, and financial support for families.", url: "https://www.family-action.org.uk/" }
    ]
  },
  {
    title: "Workplace & Practical Life",
    description: "Navigating life outside of treatment.",
    links: [
      { name: "Citizens Advice", desc: "Free advice on benefits, work, and housing.", url: "https://www.citizensadvice.org.uk/" },
      { name: "Access to Work", desc: "Government grant for practical support at work.", url: "https://www.gov.uk/access-to-work" },
      { name: "ACAS", desc: "Advice on workplace rights, rules, and best practices.", url: "https://www.acas.org.uk/" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex-1 flex flex-col py-10 w-full animate-fade-in">
      <Link href="/" className="inline-flex items-center text-teal hover:text-brightwhite transition-colors text-sm uppercase tracking-wide mb-12 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to home
      </Link>

      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl text-brightwhite font-medium mb-4">UK Support Resources</h1>
        <p className="text-lg text-offwhite/80 leading-relaxed">
          There are many services trying to help. This isn't an exhaustive list, but these are the most established starting points in the UK.
        </p>
      </div>

      <div className="space-y-16">
        {CATEGORIES.map((category, idx) => {
          const sectionId = category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
          <section key={idx} id={sectionId}>
            <h2 className="text-xl md:text-2xl text-brightwhite font-medium mb-2">{category.title}</h2>
            <p className="text-offwhite/60 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.links.map((link, jdx) => (
                <a 
                  key={jdx} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 rounded-2xl bg-charcoal/40 border border-transparent hover:border-teal/20 hover:bg-charcoal/60 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-brightwhite font-medium group-hover:text-teal transition-colors">
                      {link.name}
                    </h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 text-teal transition-opacity"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                  <p className="text-offwhite/80 text-sm leading-relaxed mb-3 flex-1">
                    {link.desc}
                  </p>
                  {link.phone && (
                    <div className="text-sm font-medium text-offwhite/90">
                      {link.phone}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>
          );
        })}
      </div>
    </div>
  );
}
