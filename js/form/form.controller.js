import Model from "../model.js";
import View from "./form.view.js";
const view = new View();
const model = new Model();

view.elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = view.getInputs();
  model.addNewUser(inputs);

  testData.setRandomDate();
  model.test();
});
