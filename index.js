document.addEventListener("DOMContentLoaded", function () {
  // SELECT

  const selectBtn = document.querySelector(".select-btn");
  const selectCircle = document.querySelector(".select-circle");

  let monthly = true;

  selectBtn.addEventListener("click", () => {
    monthly = !monthly;
    if (monthly) {
      selectCircle.style.transform = "translateX(0)";
    } else {
      selectCircle.style.transform = "translateX(100%)";
    }
  });

  // Discount innerHTML

  function updateDiscountText() {
    const discountElement = document.querySelector(".discount");
    if (window.innerWidth > 600) {
      discountElement.textContent = "-25% discount";
    } else {
      discountElement.textContent = "-25%";
    }
  }

  updateDiscountText();
  window.addEventListener("resize", () => {
    updateDiscountText();
    updateSliderPosition();
  });

  // Slider

  const sliderDiv = document.querySelector(".slider-div");
  const sliderCircle = document.querySelector(".slider-circle");
  const fullSlider = document.querySelector(".full-slider");
  const emptySlider = document.querySelector(".empty-slider");

  let isDragging = false;

  sliderCircle.addEventListener("mousedown", (event) => {
    isDragging = true;

    const offsetX = event.clientX - sliderCircle.getBoundingClientRect().left;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseMove(event) {
      if (isDragging) {
        sliderCircle.style.backgroundColor = "hsl(174, 86%, 33%)";

        const newPosition =
          event.clientX - sliderDiv.getBoundingClientRect().left - offsetX;
        const sliderWidth = sliderDiv.offsetWidth;

        const minPosition = 0;
        const maxPosition = sliderWidth - sliderCircle.offsetWidth;
        const boundedPosition = Math.min(
          Math.max(newPosition, minPosition),
          maxPosition,
        );

        const percentagePosition = (boundedPosition / sliderWidth) * 100;

        sliderCircle.style.left = percentagePosition + "%";
        fullSlider.style.width = percentagePosition + "%";
        emptySlider.style.width = 100 - percentagePosition + "%";
      }
    }

    function handleMouseUp() {
      sliderCircle.style.backgroundColor = "hsl(174, 86%, 45%)";

      isDragging = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  });

  function updateSliderPosition() {
    const sliderWidth = sliderDiv.offsetWidth;
    const circleLeftPercentage = parseFloat(
      sliderCircle.style.left.replace("%", ""),
    );

    if (!isNaN(circleLeftPercentage)) {
      const fullSliderWidthPercentage = circleLeftPercentage;

      fullSlider.style.width = fullSliderWidthPercentage + "%";
      emptySlider.style.width = 100 - fullSliderWidthPercentage + "%";
    }
  }

  window.addEventListener("resize", updateSliderPosition);

  updateSliderPosition();
});
