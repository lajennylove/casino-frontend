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
  // Check if the element with class "lives-slider" exists
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
  // Check if the element with class "lives-slider" exists
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
});
