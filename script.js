import "./styles.scss";
import "./fund.scss";

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
  const btnText = btn.innerHTML;
  console.log(`The ${btnText} button is at index ${index}`);
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
createButtons(buttonTexts);
