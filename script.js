const BASE_URL = "https://3-d-printer-prototype-backend.vercel.app";

function get(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      }
    };
    request.open("GET", url);
    request.send();
  });
}

async function addOrder(name, model, location) {
  const response = await get(
    BASE_URL +
      "/add_order?name=" +
      name +
      "&model=" +
      model +
      "&location=" +
      location
  );
  return JSON.parse(response);
}

let MODEL_SELECTED = null;
let LOCATION = "location"; // Arbitrary

const model1 = document.getElementById("model1");
const model2 = document.getElementById("model2");
const model3 = document.getElementById("model3");
const model4 = document.getElementById("model4");

function clearModelSelection() {
  model1.style.outline = "none";
  model2.style.outline = "none";
  model3.style.outline = "none";
  model4.style.outline = "none";
}

model1.addEventListener("click", () => {
  clearModelSelection();
  model1.style.outline = "solid 2px #0099ff";
  MODEL_SELECTED = 1;
});

model2.addEventListener("click", () => {
  clearModelSelection();
  model2.style.outline = "solid 2px #0099ff";
  MODEL_SELECTED = 2;
});

model3.addEventListener("click", () => {
  clearModelSelection();
  model3.style.outline = "solid 2px #0099ff";
  MODEL_SELECTED = 3;
});

model4.addEventListener("click", () => {
  clearModelSelection();
  model4.style.outline = "solid 2px #0099ff";
  MODEL_SELECTED = 4;
});

const submitBtn = document.getElementById("submit-btn");
const nameField = document.getElementById("name");

submitBtn.addEventListener("click", async () => {
  const name = nameField.value;
  if (name == "") {
    alert("Please fill the name space");
    return;
  }
  if (!MODEL_SELECTED) {
    alert("Please select a model");
    return;
  }
  if (!LOCATION) {
    alert("Please select a location");
    return;
  }
  const result = await addOrder(name, MODEL_SELECTED, LOCATION);
  console.log(result);
  alert("Order has been placed");
});
