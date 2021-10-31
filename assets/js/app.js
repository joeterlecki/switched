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

  document.getElementById("message").innerHTML = `${switchedString}`;

  document.getElementById("alert").classList.remove("invisible");
}