import * as wasm from "bigly-numbers";

const workButton = document.getElementById("button-of-work");
const joyButton = document.getElementById("button-of-joy");
const wealthChangeToast = document.getElementById("worth-change-toast");
const workAlert = document.getElementById("alert-of-work");
const joyAlert = document.getElementById("alert-of-joy");
const worthCounter = document.getElementById("current-worth");
const growthCounter = document.getElementById("current-growth");

workButton.addEventListener("click", workHarder);
joyButton.addEventListener("click", feelJoy);

const JOY_DURATION = 10000;
const JOY_COOLDOWN = 3600000;

let player = wasm.Player.new();
let exhaustionLevel = 0;
let lastJoyFelt = Date.now();
let joyCooldownStart = Date.now();

setInterval(tick, 1000);
requestAnimationFrame(renderLoop);

function renderLoop() {
  const wealth = player.render();
  const growth = player.render_rate();
  worthCounter.textContent = `You are currently worth ${wealth} currency.`;
  growthCounter.textContent = `Your net worth is increasing by ${growth} currency per second.`;

  requestAnimationFrame(renderLoop);
}

function triggerExhaustion() {
  exhaustionLevel += 1;
}

function workHarder() {
  player.increase_rate(0.01);
  if (player.work() > exhaustionLevel) {
    triggerExhaustion();
  }
  workAlert.textContent = "The corporation thanks you for your contribution.";
  setTimeout(() => (workAlert.textContent = ""), 4000);
}

function feelJoy() {
  lastJoyFelt = Date.now();
  joyButton.disabled = true;
  countdownJoy();
  wealthChangeToast.textContent = "-5";
  wealthChangeToast.className = "wealth-o-meter status worth-toast active";
  setTimeout(
    () =>
      (wealthChangeToast.className =
        "wealth-o-meter status worth-toast inactive"),
    1000,
  );
  player.bump(5.0);
  const joyIntervalID = setInterval(countdownJoy, 10);
  setTimeout(() => finishJoy(joyIntervalID), JOY_DURATION);
}

function tick() {
  player.tick();
}

function countdownJoy() {
  const now = Date.now();
  const elapsed = now - lastJoyFelt;
  const remainingTime = JOY_DURATION - elapsed;
  const formattedTime = formatTimer(remainingTime, false);

  joyAlert.textContent = `Please feel joyous for ${formattedTime} more seconds.`;
}

function finishJoy(intervalID) {
  clearInterval(intervalID);
  joyAlert.textContent = "";
  joyButton.style.fontFamily = "monospace";
  joyButton.style.fontSize = "1.5em";

  cooldownJoy();
  const cooldownIntervalID = setInterval(cooldownJoy, 10);
  setTimeout(() => finishJoyCooldown(cooldownIntervalID), JOY_COOLDOWN);
}

function cooldownJoy() {
  const now = Date.now();
  const elapsed = now - joyCooldownStart;
  const remainingTime = JOY_COOLDOWN - elapsed;
  const formattedTime = formatTimer(remainingTime, true);

  joyButton.textContent = formattedTime;
  joyAlert.textContent =
    "Your hourly joy limit has been reached. Your supervisor will contact you shortly to schedule a performance review.";
}

function finishJoyCooldown(intervalID) {
  clearInterval(intervalID);
  joyAlert.textContent = "";
  joyButton.textContent = "Feel joy";
  joyButton.style.fontFamily = "Open Sans";
  joyButton.style.fontSize = "1.2em";
  joyButton.disabled = false;
}

function formatTimer(timer, showMinutes) {
  const pad = (num) => num.toString().padStart(2, "0");

  const secs = Math.floor((timer % 60000) / 1000);
  const millis = Math.floor((timer % 1000) / 10);
  if (showMinutes) {
    const mins = Math.floor(timer / 60000);
    return `${pad(mins)}:${pad(secs)}:${pad(millis)}`;
  }

  return `${pad(secs)}:${pad(millis)}`;
}
