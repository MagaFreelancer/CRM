import Model from "../model.js";
import View from "./table.view.js";
const model = new Model();
const view = new View(model.getData().users, model.countNewUsers());

view.elements.productSelect.addEventListener("change", (e) => {
  const type = e.target.value;
  const status = model.getStatus();
  model.changeStatus(type, status.processFilter);
  filterItems();
});
view.elements.leftPanelsBtns.forEach((item) => {
  item.addEventListener("click", processFilter);
});

view.elements.topStatusBarItems.forEach((item) => {
  item.addEventListener("click", processFilter);
});

view.elements.tBody.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const id = e.target.closest(".tbody__item").id;
    model.saveIdEditElement(id);
  }
});
function processFilter() {
  const process = this.dataset.value;
  const status = model.getStatus();

  model.changeStatus(status.typeFilter, process);
  view.addActiveCls(process);
  filterItems();
}
function filterItems() {
  const data = model.getData().users;
  const status = model.getStatus();
  view.clearElements();
  view.renderUsersElements(data, status.typeFilter, status.processFilter);
}
