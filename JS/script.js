//! SET THE CURRENT YEAR IN THE YEAR SPAN ELEMENT
const yearElement = document.querySelector(".year");
yearElement.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//! Mobile navigation toggle
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//! Smooth scrolling and navigation closure
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    //! Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //! Scroll to section links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault(); // Prevent default navigation
      const sectionEl = document.querySelector(href);

      //! Close mobile navigation
      headerEl.classList.remove("nav-open");
      document.body.classList.remove("no-scroll");

      //! Scroll to section after a short delay to ensure menu closes
      setTimeout(() => {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  });
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//! Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


