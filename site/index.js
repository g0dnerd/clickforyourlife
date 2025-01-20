import * as wasm from "bigly-numbers";

const wealthAmount = document.getElementById("current-worth");
const wealthChangeToast = document.getElementById("worth-change-toast");
const growthRate = document.getElementById("current-growth");
const buttonOfJoy = document.getElementById("button-of-joy");
const buttonOfWork = document.getElementById("button-of-work");
const joyAlert = document.getElementsByClassName("buttons joy alert")[0];
const workAlert = document.getElementsByClassName("buttons work alert")[0];

buttonOfJoy.addEventListener("click", feelJoy);
buttonOfWork.addEventListener("click", workHarder);

let player = wasm.Player.new();
let joyCooldown = 3600000;
let joyLimited = false;
setInterval(tick, 1000);
requestAnimationFrame(renderLoop);

function tick() {
  player.tick();
}

function feelJoy() {
  buttonOfJoy.disabled = true;
  joyLimited = true;
  joyAlert.textContent =
    "Your hourly joy limit has been reached. Your supervisor will contact you shortly to schedule a performance review.";
  wealthChangeToast.textContent = "-5";
  wealthChangeToast.className = "wealth-o-meter status worth-toast active";
  setTimeout(
    () =>
      (wealthChangeToast.className =
        "wealth-o-meter status worth-toast inactive"),
    1000,
  );
  player.bump(5.0);
  setInterval(() => countdownJoy(10), 10);
}

function workHarder() {
  workAlert.textContent = "The corporation thanks you for your contribution.";
  player.increase_rate(0.01);
  setTimeout(() => (workAlert.textContent = ""), 4000);
}

function clearJoy() {
  joyLimited = false;
  joyCooldown = 3600000;
  joyAlert.textContent = "";
  buttonOfJoy.textContent = "Feel joy";
  buttonOfJoy.disabled = false;
}

function countdownJoy(amount) {
  joyCooldown -= amount;
  let minutes = Math.floor(joyCooldown / 60000);
  let seconds = Math.floor((joyCooldown % 60000) / 1000);
  let milliseconds = joyCooldown % 1000;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().slice(0, 2).padStart(2, "0")}`;
  buttonOfJoy.textContent = formattedTime;
  if (joyCooldown <= 0) {
    clearJoy();
  }
}

function renderLoop() {
  const wealth = player.render();
  const growth = player.render_rate();
  wealthAmount.textContent = `You are currently worth ${wealth} currency.`;
  growthRate.textContent = `Your net worth is increasing by ${growth} currency per second.`;
  requestAnimationFrame(renderLoop);
}
