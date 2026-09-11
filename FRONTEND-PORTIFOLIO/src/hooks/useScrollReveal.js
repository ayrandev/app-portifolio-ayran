import { useEffect } from "react";

/**
 * Observes every ".reveal" element inside the document and adds ".active"
 * when it scrolls into view, powering the fade-in-on-scroll effect used
 * across the portfolio sections (see .reveal in src/index.css).
 *
 * threshold 0 + a generous rootMargin widen the trigger zone so a fast
 * scroll (trackpad flick, Page Down, or a programmatic jump) can't skip an
 * element straight from "below the fold" to "above the fold" without ever
 * registering as intersecting.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0, rootMargin: "150px 0px 150px 0px" }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyVisible) {
        el.classList.add("active");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
