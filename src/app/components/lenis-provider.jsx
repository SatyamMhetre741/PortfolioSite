"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // smooth and duration are defaults in v1, but we set explicitly
      duration: 1.2,
      smooth: true,
      // easing: defaults fine; can tweak if needed
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

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
      const rect = target.getBoundingClientRect();
      const absoluteY = window.scrollY + rect.top - headerOffset;
      lenis.scrollTo(absoluteY, { offset: 0 });
    };
    document.addEventListener('click', onClick);

    return () => {
      lenis.destroy()
      document.removeEventListener('click', onClick);
    }
  }, [])

  return <>{children}</>
}
