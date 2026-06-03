"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function LenisPatcher() {
  const lenis = useLenis();
  const pathname = usePathname();

  // Route Change Handler (Fixes the page not starting at top & wrong height)
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize(); 
    }
  }, [pathname, lenis]);

  // Dev Server Hot-Reload Handler
  useEffect(() => {
    if (lenis) {
      lenis.resize();
    }
  });

  return null;
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothWheel: true }}>
      <LenisPatcher />
      {children}
    </ReactLenis>
  );
}
