import { GuidedPath } from "@/components/GuidedPath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supporting someone",
};

const screens = [
  {
    mainMessage: "Watching someone you love struggle with their mental health is one of the hardest things you can go through.",
    supportingText: "You want to fix it. You want to say the right thing. And often, you feel completely helpless."
  },
  {
    mainMessage: "The most powerful thing you can do is also the simplest: be present.",
    supportingText: "You don't need to have answers. You don't need to solve anything. Just being there \u2014 consistently, without judgement \u2014 is more valuable than most people realise."
  },
  {
    mainMessage: "Some things that help:",
    supportingText: "Ask open questions ('how are you feeling today?') rather than yes/no ones. Listen without immediately offering solutions. Don't minimise what they're going through ('just think positive' or 'other people have it worse' can do real damage). Let them know you're not going anywhere."
  },
  {
    mainMessage: "Some things to avoid:",
    supportingText: "Don't force them to talk. Don't take it personally if they push you away. Don't try to manage their medication or treatment \u2014 that's between them and their doctor. And don't put your life on hold entirely \u2014 you can't support someone else if you're running on empty."
  },
  {
    mainMessage: "Your mental health matters too.",
    supportingText: "Supporting someone through a difficult time is emotionally draining. It's okay to set boundaries. It's okay to need your own support. It's not selfish \u2014 it's necessary."
  },
  {
    mainMessage: "Take care of yourself so you can take care of them.",
    supportingText: "There are organisations specifically dedicated to supporting the carers and loved ones of those struggling.",
    nextStep: "Explore practical and emotional support available for carers.",
    resourceLink: { label: "Carers UK Help & Advice", href: "https://www.carersuk.org/" }
  }
];

export default function SupportingPath() {
  return <GuidedPath screens={screens} />;
}
