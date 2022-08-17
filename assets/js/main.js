document.querySelectorAll(".menu").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
  });
});

var swiper = new Swiper(".doctors__list", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".doctors .next",
    prevEl: ".doctors .prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".feedback__list", {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".feedback__list .next",
    prevEl: ".feedback__list .prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// fixed Header
$(function () {
  var kmg_fix = 45; // В каком положении полосы прокрутки прятать верхнюю панель
  var speed = 350; // Скорость прокрутки
  var tempScrollTop,
    currentScrollTop = 0;
  $(window).scroll(function () {
    currentScrollTop = jQuery(window).scrollTop();
    if (tempScrollTop < currentScrollTop) {
      if ($(this).scrollTop() > kmg_fix) {
        $("header").addClass("kmg-fix");
        $(".header__schedule-inner").removeClass("active");
      } else {
        $("header").removeClass("kmg-fix");
      }
    } else if (tempScrollTop > currentScrollTop) {
      $("header").removeClass("kmg-fix");
    } else if (tempScrollTop > currentScrollTop) {
      $("header").removeClass("kmg-fix");
    }
    tempScrollTop = currentScrollTop;
  });
});

$(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  $(".header__schedule-text .b-line").on("click", function () {
    $(".header__schedule-inner").toggleClass("active");
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".header__menu a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".header__menu a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
