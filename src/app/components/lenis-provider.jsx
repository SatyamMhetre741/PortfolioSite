"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider({ children }) {
  useEffect(() => {
    // Ensure native CSS smooth scroll doesn't conflict
    const prevScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.0,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercept in-page anchor navigation so Lenis handles it with offset
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
  const id = link.getAttribute('href');
  if (!id || id === '#') return;
  const target = document.querySelector(id);
      if (!target) return;
  e.preventDefault();
  // account for fixed header height if any (CardNav height ~88px per page.js scroll-padding-top)
  const headerOffset = 88;
  lenis.scrollTo(target, { offset: -headerOffset, duration: 0.9 });
    };
    document.addEventListener('click', onClick);

    return () => {
  cancelAnimationFrame(rafId)
  lenis.destroy()
      document.removeEventListener('click', onClick);
  document.documentElement.style.scrollBehavior = prevScrollBehavior
    }
  }, [])

  return <>{children}</>
}
