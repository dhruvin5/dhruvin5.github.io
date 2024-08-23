var darkModeEnabled = false;
function toggleDarkMode() {
  const element = document.getElementsByTagName("html").item(0);
  if (darkModeEnabled) {
    element.removeAttribute("data-bs-theme");
  } else {
    element.setAttribute("data-bs-theme", "dark");
  }
  darkModeEnabled = !darkModeEnabled;
}

document.addEventListener("DOMContentLoaded", function () {
  const supText = "Meet Dhruvin Gandhi";
  const headlineText = "Innovating through code, one solution at a time.";
  const subText = "Inspired by curiosity, driven by possibility";

  // Start typing the sup text first
  typeEffect(document.getElementById("sup-text"), supText, 50, function () {
    // Once sup text is done, start typing the headline
    typeEffect(
      document.getElementById("headline-text"),
      headlineText,
      50,
      function () {
        // Finally, type the sub-text
        typeEffect(document.getElementById("sub-text"), subText, 50);
      }
    );
  });
});

function typeEffect(element, text, delay, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineIcons = document.querySelectorAll(".timeline-icon");
  const timelineLine = document.querySelector(".timeline::before");

  function elementInView(element, offset = 0) {
    const elementTop = element.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  }

  function displayScrollElement(element) {
    element.classList.add("show");
  }

  function hideScrollElement(element) {
    element.classList.remove("show");
  }

  function handleScrollAnimation() {
    timelineItems.forEach((item) => {
      if (elementInView(item, 50)) {
        displayScrollElement(item);
      } else {
        hideScrollElement(item);
      }
    });

    timelineIcons.forEach((icon) => {
      if (elementInView(icon, 50)) {
        displayScrollElement(icon);
      } else {
        hideScrollElement(icon);
      }
    });

    if (elementInView(timelineLine, 50)) {
      displayScrollElement(timelineLine);
    } else {
      hideScrollElement(timelineLine);
    }
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Initial check in case elements are already in view
  handleScrollAnimation();
});

document
  .getElementById("downloadResume")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var link = document.createElement("a");
    link.href = this.href;
    link.download = "Dhruvin_Gandhi_Resume.pdf"; // Specify the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
