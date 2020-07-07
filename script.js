import "./styles.scss";
import "./fund.scss";
import { Tabs } from "./tabs";

function appendToBody(buttons) {
  buttons.forEach(btn => {
    document.getElementById("buttonContainer").appendChild(btn);
    btn.addEventListener("click", function() {
      logButtonIndexAndText(btn);
    });
  });
}
function logButtonIndexAndText(btn) {
  const parentNode = btn.parentElement;
  const nodes = Array.from(parentNode.children);
  const index = nodes.indexOf(btn);
  const logElement = document.getElementById("logElement");
  const btnText = btn.innerHTML;
  const txtToLog = `The ${btnText} button is at index ${index}`;
  console.log(txtToLog);
  logElement.innerHTML = txtToLog;
}
function createButtons(buttonText) {
  let buttons = [];
  for (let txt of buttonText) {
    const btn = document.createElement("button");
    btn.innerHTML = txt;
    buttons.push(btn);
  }
  appendToBody(buttons);
}

const buttonTexts = ["Hello", "World", "Welcome", "Greetings", "Thank you"];
window.onload = event => {
  const tab1 = document.getElementById("tab1");
  Tabs(tab1);

  createButtons(buttonTexts);
};
