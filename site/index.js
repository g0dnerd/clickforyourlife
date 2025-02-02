import * as wasm from "bigly-numbers";

const workButton = document.getElementById("button-of-work");
const joyButton = document.getElementById("button-of-joy");
const wealthChangeToast = document.getElementById("worth-change-toast");
const workAlert = document.getElementById("alert-of-work");
const joyAlert = document.getElementById("alert-of-joy");
const greeting = document.getElementById("greeting");
const worthCounter = document.getElementById("current-worth");
const growthCounter = document.getElementById("current-growth");
const exhaustionContainer = document.getElementById("exhaustion-container");
const exhaustionBar = document.getElementById("exhaustion-bar");
const purchase1 = document.getElementById("purchase-1");
const purchase2 = document.getElementById("purchase-2");
const purchase3 = document.getElementById("purchase-3");
const purchase4 = document.getElementById("purchase-4");
const purchase5 = document.getElementById("purchase-5");
const purchase6 = document.getElementById("purchase-6");
const purchase7 = document.getElementById("purchase-7");
const purchase8 = document.getElementById("purchase-8");
const purchase9 = document.getElementById("purchase-9");

workButton.addEventListener("click", workHarder);
joyButton.addEventListener("click", feelJoy);
purchase1.addEventListener("click", () => purchase(1));
purchase2.addEventListener("click", () => purchase(2));
purchase3.addEventListener("click", () => purchase(3));
purchase4.addEventListener("click", () => purchase(4));
purchase5.addEventListener("click", () => purchase(5));
purchase6.addEventListener("click", () => purchase(6));
purchase7.addEventListener("click", () => purchase(7));
purchase8.addEventListener("click", () => purchase(8));
purchase9.addEventListener("click", () => purchase(9));

const JOY_DURATION = 10000;
const JOY_COOLDOWN = 3600000;
const ITEM_NAMES = [
  "ErgoFlex Seating Solution (20)",
  "Productivity Surface Pro (50)",
  "Sanitation Privilege Pass (90)",
  "Luminance Access Plan (200)",
];

let player = wasm.Player.new();
let exhaustionLevel = 0;
let lastJoyFelt = Date.now();
let joyCooldownStart = Date.now();

greeting.textContent = `Greetings, employee ${player.render_name()}.`;

setInterval(tick, 1000);
requestAnimationFrame(renderLoop);

function renderLoop() {
  const wealth = player.render();
  const growth = player.render_rate();
  worthCounter.textContent = `You are currently worth ${wealth} currency.`;
  growthCounter.textContent = `Your net worth is increasing by ${growth} currency per second.`;

  requestAnimationFrame(renderLoop);
}

function workHarder() {
  workButton.disabled = true;
  setTimeout(() => (workButton.disabled = false), 4000);
  player.increase_rate(0.01);
  exhaustionLevel = player.work();
  console.log(exhaustionLevel);
  workAlert.textContent = "The corporation thanks you for your contribution.";
  if (exhaustionLevel > 0) {
    exhaustionContainer.style.opacity = "1.0";
    exhaustionBar.style.width = `${exhaustionLevel * 20}%`;
  }
  setTimeout(() => (workAlert.textContent = ""), 4000);
}

function feelJoy() {
  joyButton.disabled = true;
  joyButton.className = "buttons joy btn joyous";
  setTimeout(() => (joyButton.className = "buttons joy btn"), JOY_DURATION);

  lastJoyFelt = Date.now();
  countdownJoy();
  const joyIntervalID = setInterval(countdownJoy, 10);
  setTimeout(() => finishJoy(joyIntervalID), JOY_DURATION);

  showWealthCost(-5);
  player.bump(5.0);
}

function tick() {
  player.tick();
}

function showWealthCost(value) {
  wealthChangeToast.textContent = `${value}`;
  wealthChangeToast.className = "wealth-o-meter status worth-toast active";
  setTimeout(
    () =>
      (wealthChangeToast.className =
        "wealth-o-meter status worth-toast inactive"),
    1000,
  );
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
  joyButton.className = "buttons joy btn cooldown";
  setTimeout(() => (joyButton.className = "buttons joy btn"), JOY_COOLDOWN);

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
  joyButton.style.fontSize = "1.5rem";
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

function purchase(itemIndex) {
  const success = player.attempt_purchase(itemIndex);
  const callerName = `purchase-${itemIndex}`;
  const caller = document.getElementById(callerName);
  if (!success) {
    caller.className = "store purchase item failure";
    caller.textContent = "You possess insufficient currency";
    caller.disabled = true;
    setTimeout(() => (caller.className = "store purchase item"), 3000);
    setTimeout(() => (caller.textContent = ITEM_NAMES[itemIndex - 1]), 3000);
    setTimeout(() => (caller.disabled = false), 3000);
  } else {
    caller.className = "store purchase item success";
    setTimeout(() => (caller.className = "store purchase item"), 3000);
    caller.textContent = "Thank you for your subscription";
    setTimeout(() => (caller.textContent = ITEM_NAMES[itemIndex - 1]), 3000);
  }
}
