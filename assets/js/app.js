function getString() {
  document.getElementById("alert").classList.add("invisible");
  let normalString = document.getElementById("normalString").value;
  let switchedString = reverseString(normalString);

  dispalyString(switchedString);

}

function reverseString(normalString) {
  let switchedString = [];

  for (let character = normalString.length - 1; character >= 0; character--) {
    switchedString += normalString[character];
  }

  return switchedString;

}

function dispalyString(switchedString) {

  // templateDiv = `<h3 class="text-gradient text-info mb-0 mt-2"><span class="brand-font">${switchedString}</span></h3>`;

  document.getElementById("message").innerHTML = `The Switched String is: ${switchedString}`;

  document.getElementById("alert").classList.remove("invisible");
}