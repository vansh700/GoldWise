document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;

  const slidesContainer = document.querySelector(".slides");
  const slideElements = document.querySelectorAll(".slide");
  const totalSlides = slideElements.length;

  if (!slidesContainer) {
    console.error("No element with class 'slides' found in the DOM.");
    return;
  }

  if (totalSlides === 0) {
    console.error("No elements with class 'slide' found in the DOM.");
    return;
  }

  // Show specific slide
  function showSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next and Previous Slide
  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto slide every 2 seconds
  setInterval(nextSlide, 2000);

  // Navbar scroll effect
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
      console.error("Navbar element with class 'navbar' not found.");
      return;
    }
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#fff";
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
    }
  });

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  if (accordionHeaders.length === 0) {
    console.warn("No accordion headers with class 'accordion-header' found.");
  } else {
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const activeHeader = document.querySelector(".accordion-header.active");
        if (activeHeader && activeHeader !== header) {
          activeHeader.classList.remove("active");
          const activePanel = activeHeader.nextElementSibling;
          if (activePanel) {
            activePanel.classList.remove("active");
          }
        }

        header.classList.toggle("active");
        const panel = header.nextElementSibling;
        if (panel) {
          panel.classList.toggle("active");
        }
      });
    });
  }

  // Page changer
  function changePage(page) {
    let targetPage = "Product.html?page=allProduct";
    if (page === "diamond") {
      targetPage = "Product.html?page=platinumProduct";
    } else if (page === "wedding") {
      targetPage = "Product.html?page=goldProduct";
    }
    window.location.href = targetPage;
  }

  // Make it accessible globally
  window.changePage = changePage;

  // Initial slide setup
  showSlide(currentIndex);
});
