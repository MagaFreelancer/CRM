export default class View {
  constructor() {}

  elements = {
    nameValue: document.querySelector("#name"),
    numberValue: document.querySelector("#phone"),
    emailValue: document.querySelector("#email"),
    productValue: document.querySelector("#product"),
    form: document.querySelector("#form"),
    addDate: document.querySelector("#add-date"),
  };
  getActiveSelectValue() {
    let select = this.elements.productValue;
    return select.options[select.selectedIndex].innerText;
  }
  getInputs() {
    return {
      name: this.elements.nameValue.value,
      number: this.elements.numberValue.value,
      email: this.elements.emailValue.value,
      product: {
        value: this.getActiveSelectValue(),
        type: this.elements.productValue.value,
      },
    };
  }
}
