import { GuidedPath } from "@/components/GuidedPath";

const screens = [
  {
    mainMessage: "Getting a diagnosis can feel like a lot of things at once.",
    supportingText: "Relief that there's a name for it. Fear about what it means. Confusion about what happens next. All of those feelings are valid."
  },
  {
    mainMessage: "A diagnosis is a starting point, not a verdict.",
    supportingText: "It means someone has recognised what you're going through and there are known ways to help. It doesn't define you, and it doesn't predict your future."
  },
  {
    mainMessage: "If you've been prescribed medication, you might have questions. That's normal.",
    supportingText: "You have every right to understand what you're taking and why. If your doctor hasn't explained it clearly, you can ask them to. You can also ask your pharmacist \u2014 they're often easier to reach and have more time to talk."
  },
  {
    mainMessage: "Medication is one tool, not the only one.",
    supportingText: "Talking to someone \u2014 a therapist, a counsellor, a trusted person in your life \u2014 can make a real difference alongside or even instead of medication. In the UK, you can self-refer to NHS Talking Therapies without needing your GP's permission."
  },
  {
    mainMessage: "Recovery isn't a straight line.",
    supportingText: "There will be hard days. There will also be moments where you realise you're coping better than you thought. Be patient with yourself. You've taken a big step just by being here."
  },
  {
    mainMessage: "You don't need to figure everything out right now.",
    supportingText: "Take the information you have, look at your options, and pick one small next step. That's all you have to do today.",
    nextStep: "Read about what self-referring to NHS Talking Therapies involves.",
    resourceLink: { label: "NHS Talking Therapies", href: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" }
  }
];

export default function DiagnosedPath() {
  return <GuidedPath screens={screens} />;
}
