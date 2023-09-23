export default class Model {
  constructor() {
    this.data = {
      users: [],
    };
    this.status = {
      typeFilter: "all",
      processFilter: "all",
    };
    this.getLocalStorage();
  }

  createDate() {
    let ndate = new Date(),
      day = ndate.getDate(),
      month = ndate.getMonth() + 1,
      year = ndate.getFullYear(),
      hours = ndate.getHours(),
      minutes = ndate.getMinutes(),
      seconds = ndate.getSeconds();

    const date = `${this.filterDate(day)}:${this.filterDate(month)}:${year}`;
    const time = `${this.filterDate(hours)}:${this.filterDate(
      minutes
    )}:${this.filterDate(seconds)}`;
    return {
      date: date,
      time: time,
    };
  }
  filterDate(date) {
    let localDate = date < 10 ? "0" + date : date;
    return localDate;
  }
  createId() {
    const index = this.data.users.length;
    let id = 1;

    if (index > 0) {
      id = this.data.users[index - 1].id + 1;
    }
    return id;
  }
  addNewUser(userData) {
    const date = this.createDate().date;
    const time = this.createDate().time;
    const id = this.createId();

    const obj = {
      id: id,
      name: userData.name,
      email: userData.email,
      number: userData.number,
      product: userData.product,
      status: "new",
      date: date,
      time: time,
    };

    this.data.users.push(obj);
    this.setToLocalStorage();
  }
  changeUser(userData) {
    const elementInfo = this.getElement(userData.id);
    const index = elementInfo.index;

    this.data.users.splice(index, 1, userData);
    this.setToLocalStorage();
  }
  getData() {
    return this.data;
  }
  getElement(id) {
    return {
      data: this.data.users.find((el) => el.id === id),
      index: this.data.users.findIndex((el) => el.id === id),
    };
  }
  saveIdEditElement(id) {
    localStorage.setItem("elementId", JSON.stringify(id));
  }
  getEditElement() {
    const id = JSON.parse(localStorage.getItem("elementId"));
    if (id) {
      return this.getElement(Number(id)).data;
    } else alert("Элемент не выбран");
  }
  getStatus() {
    return this.status;
  }
  changeStatus(type, process) {
    this.status.typeFilter = type;
    this.status.processFilter = process;
  }
  countNewUsers() {
    let count = 0;
    this.data.users.forEach((item) => {
      if (item.status === "new") {
        count++;
      }
    });
    return count === 0 ? -1: count;
  }

  setToLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.data));
  }
  getLocalStorage() {
    let dataFromLocal = JSON.parse(localStorage.getItem("data"));

    if (dataFromLocal) {
      this.data = dataFromLocal;
    }
  }

  test() {
    console.log("data:", this.data);
    console.log("status:", this.status);
  }
}

// let data ={
//  users: [
//  {id: 0, date: 234243422, product: {value: "Курс по верстке", type: "html"}, name: "Петр Сергеевич", email:"info@inbox.ru", tlNumber: "+7 (909) 77-55-777", status: "Новый"}
// ]
//  newUsers: 1
// }
//
//
//
