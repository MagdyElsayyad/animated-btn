window.addEventListener("DOMContentLoaded", function () {
  const btn = this.document.getElementById("order_btn");
  const text = this.document.getElementById("order_btn").querySelector(".text");
  const car = this.document.getElementById("order_btn").querySelector(".car");
  const box = this.document.getElementById("order_btn").querySelector(".box");
  const road = this.document.getElementById("order_btn").querySelector(".road");

  const backSound = new Audio("./assets/sounds/back.mp3");
  const exitSound = new Audio("./assets/sounds/exit.mp3");
  btn.addEventListener("click", () => {
    text.classList.add("hide");

    road.classList.add("show");
    car.classList.add("show");
    box.classList.add("show");
    backSound.play();
    car.classList.add("back");
    box.classList.add("put");
    setTimeout(() => {
      backSound.pause();
      exitSound.play();

      car.classList.add("walk");
    }, 2000);
    setTimeout(() => {
      car.classList.add("exit");
      box.classList.add("exit");
      setTimeout(() => {
        road.classList.remove("show");
        text.classList.remove("hide");
        text.textContent = "Order on the way to you 😊";
        text.classList.add("show");
        btn.setAttribute("disabled", true);
      }, 500);
    }, 3000);
  });
});
