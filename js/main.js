const headerTop = document.querySelector("#top");
// Доавляем shadow при Скролле
document.addEventListener("scroll", function () {
   if (window.scrollY > 15) {
      headerTop.classList.add("active");
   } else {
      headerTop.classList.remove("active");
   }
});

$(document).ready(function () {
   // photos
   const photos = $("#photos");
   photos.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
   });

   const btnPrev = $(".arrow-left");
   const btnNext = $(".arrow-right");

   btnPrev.click(function () {
      photos.trigger("prev.owl.carousel");
   });
   btnNext.click(function () {
      photos.trigger("next.owl.carousel");
   });

   // Photos mobile
   const photosMobile = $("#photos-mobile");
   photosMobile.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
   });

   const btnPrevMobile = $(".arrow-left");
   const btnNextMobile = $(".arrow-right");

   btnPrevMobile.click(function () {
      photosMobile.trigger("prev.owl.carousel");
   });
   btnNextMobile.click(function () {
      photosMobile.trigger("next.owl.carousel");
   });

   // reviews
   const reviews = $("#reviews");
   reviews.owlCarousel({
      items: 1,
      loop: true,
      dots: false,

      responsive: {
         0: {
            items: 1,
            dots: true,
            margin: 10,
         },

         1199: {
            margin: 20,
            items: 2,
         },
      },
   });

   const reviewsPrev = $(".reviews__arrow-left");
   const reviewsNext = $(".reviews__arrow-right");

   reviewsPrev.click(function () {
      reviews.trigger("prev.owl.carousel");
   });
   reviewsNext.click(function () {
      reviews.trigger("next.owl.carousel");
   });

   // costs

   const costs = $("#costs");
   costs.owlCarousel({
      items: 1,
      loop: true,
      dots: false,

      responsive: {
         0: {
            items: 1,
            dots: true,
            margin: 10,
            startPosition: 2,
         },

         1199: {
            items: 3,
            margin: 70,
            startPosition: 0,
         },
      },
   });
});

const burger = document.querySelector(".burger__wrapper");
const innerBurger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlay");
const linkItems = document.querySelectorAll(".nav-mobile-item");

burger.addEventListener("click", function () {
   burger.classList.toggle("active");
   innerBurger.classList.toggle("active");
   navMobile.classList.toggle("active");
   overlay.classList.toggle("active");
   document.body.classList.toggle("active");
});

overlay.addEventListener("click", function () {
   burger.classList.remove("active");
   innerBurger.classList.remove("active");
   navMobile.classList.remove("active");
   this.classList.remove("active");
   document.body.classList.remove("active");
});

linkItems.forEach(function (item) {
   item.addEventListener("click", function () {
      burger.classList.remove("active");
      innerBurger.classList.remove("active");
      navMobile.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("active");
   });
});
