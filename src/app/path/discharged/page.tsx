import { GuidedPath } from "@/components/GuidedPath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I've Left Hospital",
  description: "Coming home after a mental health hospital stay can feel overwhelming. A calm guide through the first days and weeks of recovery.",
  alternates: {
    canonical: "/path/discharged",
  },
  openGraph: {
    title: "I've Left Hospital",
    description: "Coming home after a mental health hospital stay can feel overwhelming. A calm guide through the first days and weeks of recovery.",
    url: "https://stillwithyou.app/path/discharged",
    images: ["/opengraph-image.png"],
  },
};

const screens = [
  {
    mainMessage: "You've just been through something significant.",
    supportingText: "Whether you were in hospital for a few days or longer, coming home can feel strange. The structure is gone. The support team is gone. And you might be holding a bag of medication with more questions than answers."
  },
  {
    mainMessage: "The first thing to know: what you're feeling right now is normal.",
    supportingText: "Feeling lost, scared, numb, relieved, or all of those at once: that's the reality of this transition. There's no right way to feel."
  },
  {
    mainMessage: "If you've been given medication, take it as prescribed for now, even if you have doubts.",
    supportingText: "Then book an appointment with your GP within the first week to talk about it. Write down your questions before you go. You deserve clear answers about what you're taking and what to expect."
  },
  {
    mainMessage: "The next few weeks matter.",
    supportingText: "Try to build small routines: a regular wake-up time, a short walk, one meal you prepare yourself. These aren't trivial; they're the foundation that everything else gets built on."
  },
  {
    mainMessage: "You don't have to do this alone, even if it feels like you do.",
    supportingText: "If you have people in your life you trust, let them in. If you don't, that's okay too. There are people and services whose entire purpose is to be there for you right now."
  },
  {
    mainMessage: "One thing at a time. One day at a time.",
    supportingText: "You're still here, and that matters more than you might realise right now."
  },
  {
    mainMessage: "You don't have to figure out everything today.",
    supportingText: "But when you are ready, here is one concrete thing you can focus on.",
    nextStep: "Book a follow-up appointment with your GP to review your discharge and any medication.",
    resourceLink: { label: "Find local support via Hub of Hope", href: "https://hubofhope.co.uk/" },
    internalResourceLink: { label: "Explore Peer Support", href: "/resources#peer-support-communities" }
  }
];

export default function DischargedPath() {
  return <GuidedPath screens={screens} />;
}
