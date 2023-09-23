export default class View {
  constructor(element) {
    this.element = element;
    this.renderInfo();
  }

  elements = {
    id: document.querySelector("#number"),
    date: document.querySelector("#date"),
    product: document.querySelector("#product"),
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    phone: document.querySelector("#phone"),
    status: document.querySelector("#status"),
    form: document.querySelector("#form"),
  };
  renderInfo() {
    this.elements.id.innerText = this.element.id;
    this.elements.date.innerText = this.element.date + " " + this.element.time;
    this.elements.product.value = this.element.product.type;
    this.elements.name.value = this.element.name;
    this.elements.email.value = this.element.email;
    this.elements.phone.value = this.element.number;
    this.elements.status.value = this.element.status;
  }
  getElements() {
    let product = this.elements.product;
    let productValue = product.options[product.selectedIndex].innerText;
    let status =  this.elements.status.value === 'Выберите...' ? 'new' : this.elements.status.value;
    return {
      id: this.element.id,
      date: this.element.date,
      time: this.element.time,
      product: {
        type: product.value,
        value: productValue,
      },
      name: this.elements.name.value,
      email: this.elements.email.value,
      number: this.elements.phone.value,
      status: status,
    };
  }
}
