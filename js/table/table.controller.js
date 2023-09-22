import Model from "../model.js";
import View from "./table.view.js";
const model = new Model();
const view = new View(model.getData().users);

view.elements.productSelect.addEventListener("change", (e) => {
  const type = e.target.value;
  const data = model.getData().users;

  view.clearElements();
  view.renderUsersElements(data, type);
});
