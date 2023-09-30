import Model from "../model.js";
import View from "./edit.view.js";
const model = new Model();
const view = new View(model.getEditElement());


view.elements.form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const newInfo = view.getElements();
  model.changeUser(newInfo);
  window.location.href = 'table.html';
})