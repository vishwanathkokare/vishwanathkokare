document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  class TypingEffect {
    constructor(element, content, interval = 80) {
      this.element = element;
      this.content = content;
      this.interval = interval;
      this.current = 0;
      this.init();
    }

    init() {
      this.intervalId = setInterval(() => {
        if (this.current < this.content.length) {
          this.element.textContent += this.content[this.current++];
        } else {
          clearInterval(this.intervalId);
        }
      }, this.interval);
    }
  }

  // Input text for typing animation
  new TypingEffect(document.querySelector("#holder"), "App Developer + Full-Stack Web Developer");

  // Initialize WOW.js (ensure WOW.js is included in your project)
  if (typeof WOW === "function") {
    new WOW().init();
  }

  // Push the body and the nav over by 285px
  const navScreen = document.querySelector(".nav-screen");
  const body = document.body;

  document.querySelector(".fa-bars").addEventListener("click", () => {
    navScreen.style.transition = "right 200ms";
    body.style.transition = "right 200ms";
    navScreen.style.right = "0px";
    body.style.right = "285px";
  });

  // Then push them back
  document.querySelector(".fa-times").addEventListener("click", () => {
    navScreen.style.transition = "right 200ms";
    body.style.transition = "right 200ms";
    navScreen.style.right = "-285px";
    body.style.right = "0px";
  });

  document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", () => {
      navScreen.style.transition = "right 500ms";
      body.style.transition = "right 500ms";
      navScreen.style.right = "-285px";
      body.style.right = "0px";
    });
  });

  // Initialize fullPage.js (ensure fullPage.js is included in your project)
  if (typeof fullpage_api !== "undefined") {
    new fullpage("#fullpage", {
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
      anchors: ["home", "about", "portfolio", "contact", "connect"],
      menu: "#myMenu",
      fitToSection: false,
      afterLoad: (origin, destination, direction) => {
        const headerLinks = document.querySelector(".header-links");
        const headerLinksAnchors = headerLinks.querySelectorAll("a");

        if (destination.index === 0) {
          document.querySelectorAll(".fa-chevron-down").forEach(icon => {
            icon.style.opacity = "1";
          });
          headerLinksAnchors.forEach(anchor => {
            anchor.style.color = "white";
          });
          headerLinks.style.backgroundColor = "transparent";
        } else {
          headerLinksAnchors.forEach(anchor => {
            anchor.style.color = "black";
          });
          headerLinks.style.backgroundColor = "white";
        }

        if (destination.index === 1) {
          document.querySelectorAll(".skillbar").forEach(skillbar => {
            const bar = skillbar.querySelector(".skillbar-bar");
            bar.style.transition = "width 2.5s";
            bar.style.width = skillbar.getAttribute("data-percent");
          });
        }
      }
    });
  }

  // Move section down one
  document.querySelector("#moveDown").addEventListener("click", () => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveSectionDown();
    }
  });

  // Fullpage.js link navigation
  document.querySelector("#skills").addEventListener("click", () => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveTo(2);
    }
  });

  document.querySelector("#projects").addEventListener("click", () => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveTo(3);
    }
  });

  document.querySelector("#contact").addEventListener("click", () => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.moveTo(4);
    }
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId) || document.querySelector(`[name="${targetId}"]`);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // AJAX form handling
  const form = document.querySelector("#ajax-contact");
  const formMessages = document.querySelector("#form-messages");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData
      })
        .then(response => response.text())
        .then(text => {
          formMessages.classList.remove("error");
          formMessages.classList.add("success");
          formMessages.textContent = text;

          form.reset();
        })
        .catch(() => {
          formMessages.classList.remove("success");
          formMessages.classList.add("error");
          formMessages.textContent = "Oops! An error occurred and your message could not be sent.";
        });
    });
  }
});
