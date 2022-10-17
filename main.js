const ratings = document.querySelectorAll(".ratings>div");
let span = document.querySelector(".thank-you span");
let submit = document.querySelector("button");
let ratingState = document.querySelector(".rating-state");
let thankYou = document.querySelector(".thank-you");

ratings.forEach(function (value) {
  value.addEventListener("click", function () {
    span.textContent = this.textContent;
  });
});

submit.onclick = function () {
  if (span.textContent === "") {
    submit.preventDefault();
  }
  ratingState.style.display = "none";
  thankYou.style.display = "flex";
};
