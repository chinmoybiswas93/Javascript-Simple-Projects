const divisionSelect = document.getElementById("division");

for (const division in divisions) {
  divisionSelect.innerHTML += `<option value="${division}">${division}</option>`;
}

setCity('dhaka')

// ----setting division wise city----------
divisionSelect.addEventListener("click", function (event) {
  const division = event.target.value;
  switch (division) {
    case "dhaka":
      {
        setCity("dhaka");
      }
      break;
    case "sylhet":
      {
        setCity("sylhet");
      }
      break;
    case "rajsahi":
      {
        setCity("rajsahi");
      }
      break;

    default: {
      console.log("hello mahdi");
    }
  }
});

// -----setting cities---------------
function setCity(division) {
  const cities = divisions[division].cities;
  const citySelect = document.getElementById("cities");
  citySelect.innerHTML = "";
  for (const city of cities) {
    citySelect.innerHTML += `<option value="${city}">${city}</option>`;
  }
}
