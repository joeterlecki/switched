function getString() {
  document.getElementById("alert").classList.add("invisible");
  let normalString = document.getElementById("normalString").value;


  dispalyString(normalString);

}

function dispalyString(normalString) {
  // const url = `https://api.joeterlecki.io/0-to-100?start_number=${startNumber}&end_number=${endNumber}`
  const url = `https://api.joeterlecki.io/switched?request_string=${normalString}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // let numbers = data["number_list"];
      // let templateRows = "";
      // for (let number = 0; number < numbers.length; number++) {
      //     let displayNumber = numbers[number];
      //     if (displayNumber % 2 === 0) {
      //         templateRows += `<tr><td class="align-middle text-center"><span class="text-primary text-gradient text-xs font-weight-bold">${displayNumber}</span></td></tr>`;
      //     } else {
      //         templateRows += `<tr><td class="align-middle text-center"><span class="text-secondary text-xs">${displayNumber}</span></td></tr>`;
      //     }
      // }
      // document.getElementById("results").innerHTML = templateRows;
      document.getElementById("message").innerHTML = `${data["response"]}`;

      document.getElementById("alert").classList.remove("invisible");
    })

  // document.getElementById("message").innerHTML = `${switchedString}`;

  // document.getElementById("alert").classList.remove("invisible");
}