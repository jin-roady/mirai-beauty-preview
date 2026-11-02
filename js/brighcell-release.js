(function () {
  var releaseAt = Date.parse("2026-09-01T00:00:00+09:00");
  var params = new URLSearchParams(window.location.search);
  var isPreview = params.get("preview") === "brighcell-2026";

  if (!isPreview && Date.now() < releaseAt) {
    return;
  }

  document.querySelectorAll("[data-brighcell-price-2026]").forEach(function (price) {
    price.textContent = price.getAttribute("data-brighcell-price-2026");
  });

  document.querySelectorAll("[data-brighcell-image-2026]").forEach(function (image) {
    image.src = image.getAttribute("data-brighcell-image-2026");
    image.removeAttribute("srcset");
    image.classList.add("brighcell-release-image");
  });

  document.querySelectorAll("[data-brighcell-release-2026]").forEach(function (item) {
    item.hidden = false;
  });
})();
