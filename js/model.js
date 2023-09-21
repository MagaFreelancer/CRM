export default class Model {
  constructor() {
    this.data = {
      users: [
        // {
        //   id: 0,
        //   date: 234243422,
        //   product: { value: "Курс по верстке", type: "html" },
        //   name: "Петр Сергеевич",
        //   email: "info@inbox.ru",
        //   number: "+7 (909) 77-55-777",
        //   status: "Новый",
        // },
      ],
      newUsers: 0,
    };
    this.getLocalStorage();
  }

  createDate() {
    return Number(new Date());
  }
  createId() {
    const index = this.data.users.length;
    let id = 1
   
    if(index > 0) {
        id = this.data.users[index -1].id + 1
    }
    return id
  }
  addNewUser(userData) {
  const date =  this.createDate()
  const id =  this.createId()

    const obj = {
      id: id,
      date:  date,
      product: userData.product,
      name: userData.name,
      email: userData.email,
      number: userData.number,
      status: "Новый",
    };

    this.data.users.push(obj);
    this.setToLocalStorage();
  }
  getData() {
    return this.data
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
    console.log(this.data);
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
