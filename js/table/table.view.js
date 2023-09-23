export default class View {
  constructor(userDates, newUsers) {
    this.newUsers = newUsers;

    this.renderUsersElements(userDates);
    this.renderNewUsers();
  }

  elements = {
    tBody: document.querySelector("#tbody"),
    productSelect: document.querySelector("#productSelect"),
    topStatusBar: document.querySelector("#topStatusBar"),
    topStatusBarItems: document.querySelectorAll(".topstatusbar__btn"),
    leftPanelsBtns: document.querySelectorAll(".left-panel__btn"),
    badgeNew: document.querySelector("#badge-new"),
  };

  addUserElement(userData) {
    const status = this.getStatus(userData.status);
    const html = `
      <tr class="tbody__item" data-type="${userData.product.type}" id="${userData.id}">
						<th scope="row">${userData.id}</th>
						<td>${userData.date}</td>
						<td>${userData.product.value}</td>
						<td>${userData.name}</td>
						<td>${userData.email}</td>
						<td>${userData.number}</td>
						<td>
							<div class="badge badge-pill ${status.clsName}">${status.value}</div>
						</td>
						<td>
							<a href="edit.html" data-edit>Редактировать</a>
						</td>
					</tr>
      `;

    this.elements.tBody.insertAdjacentHTML("beforeend", html);
  }
  getStatus(status) {
    const statusObj = {
      new: { clsName: "badge-danger", value: "Новый" },
      inwork: { clsName: "badge-warning", value: "В работе" },
      complete: { clsName: "badge-success", value: "Завершенный" },
    };

    return {
      clsName: statusObj[status].clsName,
      value: statusObj[status].value,
    };
  }
  renderUsersElements(userDates, type = "all", process = "all") {
    console.log(type, process);
    userDates.forEach((item) => {
      if (process === "all" && type === "all") {
        this.addUserElement(item);
      } else if (process === "all" && type != "all") {
        if (type === item.product.type) {
          this.addUserElement(item);
        }
      } else if (type === "all" && process != "all") {
        if (process === item.status) {
          this.addUserElement(item);
        }
      } else if (process === item.status && type === item.product.type) {
        this.addUserElement(item);
      } else {
      }
      // if (type === "all" && process === 'all') {
      //   this.addUserElement(item);
      // } else if (item.product.type === type && item.status === process) {
      // }else {
      //   console.log('lol');
      // }
    });
  }
  addActiveCls(process) {
    this.elements.leftPanelsBtns.forEach((item) => {
      item.classList.remove("active");

      if (item.dataset.value === process) {
        item.classList.add("active");
      }
    });
  }
  renderNewUsers() {
    if (this.newUsers != -1) {
      this.elements.badgeNew.innerText = this.newUsers;
    } else {
      this.elements.badgeNew.innerText = "";
    }
  }
  clearElements() {
    this.elements.tBody.innerHTML = "";
  }
}
