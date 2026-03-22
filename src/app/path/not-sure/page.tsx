import { GuidedPath } from "@/components/GuidedPath";

const screens = [
  {
    mainMessage: "The fact that you're asking that question is already a sign of self-awareness, not weakness.",
    supportingText: "Most people wait months or years before even getting to this point. You're ahead of where you think you are."
  },
  {
    mainMessage: "You don't need to be in crisis to deserve support.",
    supportingText: "You don't need to have a diagnosis. You don't need to be sure. If something doesn't feel right \u2014 if you're sleeping badly, withdrawing from people, feeling unlike yourself, struggling to get through the day \u2014 that's enough of a reason to explore your options."
  },
  {
    mainMessage: "There's a difference between a rough patch and something that needs attention.",
    supportingText: "A rough patch usually has a clear cause and eases with time. If what you're feeling has lasted more than a couple of weeks, is getting worse, or is affecting your ability to work, sleep, or connect with others \u2014 it's worth talking to someone."
  },
  {
    mainMessage: "The gentlest first step is NHS Talking Therapies.",
    supportingText: "You can refer yourself online in about five minutes. No GP appointment needed. No diagnosis needed. You answer a few questions about how you're feeling, and a therapist contacts you to talk about what support might help. It's free, it's confidential, and there's no commitment."
  },
  {
    mainMessage: "You could also talk to your GP.",
    supportingText: "Book a double appointment if you can \u2014 standard 10-minute slots aren't enough for this conversation. Be honest. You don't need to perform your pain or convince them something is wrong. Just say: 'I've been struggling and I'd like to talk about my options.'"
  },
  {
    mainMessage: "It takes courage to ask for help.",
    supportingText: "Whatever step you choose, you don't have to have it all figured out before you reach out.",
    nextStep: "Find an NHS Talking Therapies service near you and see what self-referral looks like.",
    resourceLink: { label: "NHS Talking Therapies", href: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" }
  }
];

export default function NotSurePath() {
  return <GuidedPath screens={screens} />;
}
