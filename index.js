document.addEventListener("DOMContentLoaded", function () {
  // SELECT

  const selectBtn = document.querySelector(".select-btn");
  const selectCircle = document.querySelector(".select-circle");
  const monthYear = document.querySelector(".month-year");

  let monthly = true;

  selectBtn.addEventListener("click", () => {
    monthly = !monthly;
    if (monthly) {
      selectCircle.style.transform = "translateX(0)";
      monthYear.innerHTML = "/month";
      updatePrice();
    } else {
      selectCircle.style.transform = "translateX(100%)";
      monthYear.innerHTML = "/year";
      updatePrice();
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
  });

  // Slider
  const slider = document.querySelector(".slider");

  function updateSliderBackground() {
    const value = slider.value;
    const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--Full-Slider-Bar) 0%, var(--Full-Slider-Bar) ${percent}%, var(--Empty-Slider-Bar) ${percent}%, var(--Empty-Slider-Bar) 100%)`;
  }

  // Slider and Price

  function updatePrice() {
    const pageviews = document.querySelector(".pageviews");
    const price = document.querySelector(".price");
    const value = parseInt(slider.value);
    if (monthly) {
      switch (value) {
        case 1: {
          pageviews.innerHTML = "10K PAGEVIEWS";
          price.innerHTML = "$8.00";
          break;
        }
        case 26: {
          pageviews.innerHTML = "50K PAGEVIEWS";
          price.innerHTML = "$12.00";
          break;
        }
        case 51: {
          pageviews.innerHTML = "100K PAGEVIEWS";
          price.innerHTML = "$16.00";
          break;
        }
        case 76: {
          pageviews.innerHTML = "500K PAGEVIEWS";
          price.innerHTML = "$24.00";
          break;
        }
        case 101: {
          pageviews.innerHTML = "1M PAGEVIEWS";
          price.innerHTML = "$36.00";
          break;
        }
        default: {
          pageviews.innerHTML = "100K PAGEVIEWS";
          price.innerHTML = "$16.00";
        }
      }
    } else {
      switch (value) {
        case 1: {
          pageviews.innerHTML = "10K PAGEVIEWS";
          price.innerHTML = "$6.00";
          break;
        }
        case 26: {
          pageviews.innerHTML = "50K PAGEVIEWS";
          price.innerHTML = "$9.00";
          break;
        }
        case 51: {
          pageviews.innerHTML = "100K PAGEVIEWS";
          price.innerHTML = "$12.00";
          break;
        }
        case 76: {
          pageviews.innerHTML = "500K PAGEVIEWS";
          price.innerHTML = "$18.00";
          break;
        }
        case 101: {
          pageviews.innerHTML = "1M PAGEVIEWS";
          price.innerHTML = "$25.00";
          break;
        }
        default: {
          pageviews.innerHTML = "100K PAGEVIEWS";
          price.innerHTML = "$12.00";
        }
      }
    }
  }

  updateSliderBackground();
  updatePrice();

  slider.addEventListener("input", () => {
    updateSliderBackground();
    updatePrice();
  });

  // Desktop reorder

  function reorder() {
    const pageviewsDiv = document.querySelector(".pageviews-div");
    const priceDiv = document.querySelector(".price-div");
    const selection = document.querySelector(".selection");
    if (window.innerWidth > 600) {
      pageviewsDiv.append(priceDiv);
      pageviewsDiv.style.justifyContent = "space-between";
      priceDiv.style.margin = "16px";
    } else {
      selection.before(priceDiv);
      pageviewsDiv.style.justifyContent = "center";
      priceDiv.style.margin = "0";
    }
  }

  reorder();
  window.addEventListener("resize", () => {
    reorder();
  });
});
