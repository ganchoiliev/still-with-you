"use client";

import { useEffect, useState } from "react";

export function HeroSubtext() {
  const [isLateNight, setIsLateNight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    // 10pm (22) to 5:59am (0-5)
    if (hour >= 22 || hour < 6) {
      setIsLateNight(true);
    }
  }, []);

  // Default text for SSR and daytime
  const defaultText = (
    <>
      Still With You is a free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement. Just a next step, whenever you&apos;re ready.
    </>
  );
  
  // Late night text
  const lateNightText = (
    <>
      It&apos;s late. If you&apos;re awake and struggling, you&apos;re not alone. Still With You is a free, gentle guide for mental health in the UK. No sign-up. No judgement. Just a next step.
    </>
  );

  return (
    <p className="text-xl md:text-2xl text-offwhite/80 leading-relaxed max-w-xl transition-opacity duration-1000 ease-in-out">
      <span
        style={{
          opacity: mounted ? 1 : 0.99, // Hack to trigger re-render visibility if needed, or just let React update it
        }}
      >
        {mounted && isLateNight ? lateNightText : defaultText}
      </span>
    </p>
  );
}
