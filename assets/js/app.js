function getString() {
  document.getElementById("alert").classList.add("invisible");
  let normalString = document.getElementById("normalString").value;


  dispalyString(normalString);

}

function dispalyString(normalString) {
  const url = `https://api.joeterlecki.io/switched?request_string=${normalString}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("message").innerHTML = `${data["response"]}`;

      document.getElementById("alert").classList.remove("invisible");
    })
}