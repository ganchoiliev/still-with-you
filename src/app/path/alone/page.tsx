import { GuidedPath } from "@/components/GuidedPath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I just need to feel less alone",
};

const screens = [
  {
    mainMessage: "You're here.",
    supportingText: "That took something, even if it doesn't feel like it."
  },
  {
    mainMessage: "Whatever you're feeling right now \u2014 heavy, empty, scared, numb \u2014 it's real, and it matters.",
    supportingText: "You don't need to justify it or explain it to anyone."
  },
  {
    mainMessage: "Loneliness can feel permanent, but it isn't.",
    supportingText: "It's a state, not a truth. The fact that it hurts is proof that you're capable of connection \u2014 you're just not feeling it right now."
  },
  {
    mainMessage: "If you want to talk to someone tonight, you can.",
    supportingText: "Samaritans: 116 123. Free, 24 hours, no judgement. You don't need to be suicidal to call. You just need to be struggling."
  },
  {
    mainMessage: "If you're not ready to talk, that's okay.",
    supportingText: "Just know this: other people have been exactly where you are right now and come through it. You are not the exception. Tomorrow can be different."
  }
];

export default function AlonePath() {
  return <GuidedPath screens={screens} />;
}
