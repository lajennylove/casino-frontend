/**
 * Verify if the DOM is ready
 * @param {function} fn
 * @return {void}
 */
function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

/**
 * Application entrypoint
 */
domReady(() => {
  console.log("The Dom is ready! 🚀");

  /**
   * Lives Slider Home Page
   */
  // Check if the element with class "testimonial-slider" exists
  var testimonialSliderExist = document.querySelector(".testimonial-slider");

  // If the element exists, initialize the slider
  if (testimonialSliderExist) {
    let slider2 = tns({
      container: ".testimonial-slider",
      controlsText: [
        '<img src="/assets/src/images/prev_icon.png" />',
        '<img src="/assets/src/images/next_icon.png" />',
      ],
      items: 1,
      slideBy: 1,
      loop: true,
      mouseDrag: true,
      autoplay: true,
      navPosition: "bottom",
      responsive: {
        768: {
          fixedWidth: 422,
          gutter: 10,
        },
      },
    });
  }

  /**
   * Interested Games Slider Home Page
   */
  // Check if the element with class "intersted games slider" exists
  var interested_game_SliderExist = document.querySelector(
    ".interested_game-slider"
  );

  // If the element exists, initialize the slider
  if (interested_game_SliderExist) {
    let slider3 = tns({
      container: ".interested_game-slider",
      controlsText: [
        '<img src="/assets/src/images/prev_icon.png" />',
        '<img src="/assets/src/images/next_icon.png" />',
      ],
      items: 3,
      slideBy: 1,
      gutter: 10,
      loop: true,
      mouseDrag: true,
      autoplay: true,
    });
  }

  /**
   * Related Slider Home Page
   */
  // Check if the element with class "related slider" exists
  var realted_SliderExist = document.querySelector(".related-slider");

  // If the element exists, initialize the slider
  if (interested_game_SliderExist) {
    let slider3 = tns({
      container: ".related-slider",
      controlsText: [
        '<img src="/assets/src/images/prev_icon.png" />',
        '<img src="/assets/src/images/next_icon.png" />',
      ],
      items: 1,
      slideBy: 1,
      loop: true,
      mouseDrag: true,
      autoplay: true,
      navPosition: "bottom",
    });
  }

  /**
   * Read more seo content button
   */

  const readMoreBtn = document.getElementById("seo_read_more");

  if (readMoreBtn) {
    const contentBlock = document.getElementById("seo_content_footer");
    const seoShadow = document.getElementById("seo_content_shadow");
    let isExpanded = false;

    readMoreBtn.addEventListener("click", function () {
      if (isExpanded) {
        // If currently expanded, collapse the content
        contentBlock.classList.add("h-[600px]");
        contentBlock.classList.add("overflow-hidden");
        seoShadow.classList.replace("hidden", "block");
        readMoreBtn.innerText = "Read More";
        isExpanded = false;
      } else {
        // If currently collapsed, expand the content
        contentBlock.classList.remove("h-[600px]");
        contentBlock.classList.remove("overflow-hidden");
        seoShadow.classList.replace("block", "hidden");
        readMoreBtn.innerText = "Read Less";
        isExpanded = true;
      }
    });
  }
});
