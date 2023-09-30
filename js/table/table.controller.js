import Model from "../model.js";
import View from "./table.view.js";
const model = new Model();
const view = new View(model.countNewUsers());

function init() {
  const status = model.getStatus();
  setEventListeners();
  view.clearElements();

  const filteredElements = model.filterElements();
  view.renderUsersElements(filteredElements);
  view.addActiveCls(status.processFilter);
  view.activeSelect(status.typeFilter)
}
function setEventListeners() {
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
}
function processFilter() {
  const process = this.dataset.value;
  const status = model.getStatus();
  model.changeStatus(status.typeFilter, process);
  model.saveStatus();

  view.addActiveCls(process);
  filterItems();
  model.saveStatus();
}
function filterItems() {
  const status = model.getStatus();
  const filteredElements = model.filterElements(status);
  model.saveStatus();

  view.clearElements();
  view.renderUsersElements(filteredElements);
}
init();
