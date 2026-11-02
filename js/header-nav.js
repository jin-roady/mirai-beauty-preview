(function () {
  "use strict";

  var navElements = document.querySelectorAll("[data-common-header-nav]");

  navElements.forEach(function (navElement) {
    var showFlow = navElement.getAttribute("data-show-flow") === "true";
    var flowItem = showFlow
      ? '<li><a href="flow.html">FLOW</a></li>'
      : "";

    navElement.innerHTML =
      '<ul class="header-menu">' +
        '<li><a href="index.html">TOP</a></li>' +
        '<li class="has-child" ontouchstart=""><a>MENU</a>' +
          '<ul>' +
            '<li class="has-child" ontouchstart=""><a>医療脱毛</a>' +
              '<ul>' +
                '<li><a href="removal.html">医療脱毛について</a></li>' +
                '<li><a href="removal.html#removal-price">料金表</a></li>' +
              '</ul>' +
              '<span></span>' +
            '</li>' +
            '<li class="has-child" ontouchstart=""><a>美肌治療</a>' +
              '<ul>' +
                '<li><a href="beauty.html">美肌治療について</a></li>' +
                '<li><a href="beauty.html#beauty-price">料金表</a></li>' +
              '</ul>' +
              '<span></span>' +
            '</li>' +
            '<li><a href="drip.html">点滴・注射</a></li>' +
            '<li><a href="doctors.html">ドクターズコスメ</a></li>' +
            '<li><a href="oral.html">内服・肥満治療</a></li>' +
            '<li><a href="aga-ed.html">AGA/ED</a></li>' +
            '<li><a href="laser-preview.html">当院の美容機器について</a></li>' +
          '</ul>' +
        '</li>' +
        flowItem +
        '<li><a href="faq.html">FAQ</a></li>' +
      '</ul>';
  });
})();
