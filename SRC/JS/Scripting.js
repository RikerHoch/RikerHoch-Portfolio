// Dark mode toggle
      const toggle = document.getElementById("toggle");
      const toggleMobile = document.getElementById("toggle-mobile");
      const html = document.documentElement;

      // Check for saved user preference, if any, on load of the website
      if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        html.classList.add("dark");
        if (toggle) toggle.checked = true;
        if (toggleMobile) toggleMobile.checked = true;
      } else {
        html.classList.remove("dark");
        if (toggle) toggle.checked = false;
        if (toggleMobile) toggleMobile.checked = false;
      }

      // Toggle dark mode
      function toggleDarkMode() {
        if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }

      if (toggle) {
        toggle.addEventListener("change", toggleDarkMode);
      }

      if (toggleMobile) {
        toggleMobile.addEventListener("change", toggleDarkMode);
      }

      // Mobile menu toggle
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.remove("opacity-100", "visible");
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
              mobileMenu.classList.add("hidden");
            }
          }
        });
      });

      // Add active class to current section in navigation
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });

      // Animate skill bars on scroll
      const skillBars = document.querySelectorAll(".skill-bar");

      function animateSkillBars() {
        skillBars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillBars();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        observer.observe(skillsSection);
      }

      // Form submission
      const contactForm = document.querySelector("form");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          alert("Thank you for your message! I will get back to you soon.");
          contactForm.reset();
        });
      }