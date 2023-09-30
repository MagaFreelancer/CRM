export default class View {
  constructor( newUsers) {
    this.newUsers = newUsers;

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
  renderUsersElements(userDates) {
    userDates.forEach((item) => {
      this.addUserElement(item);
    });
  }
  addActiveCls(process) {
    this.elements.leftPanelsBtns.forEach((item) => {
      item.classList.remove("active");

      if (item.dataset.value === process) {
        item.classList.add("active");
      }
    });
    this.elements.topStatusBarItems.forEach((item) => {
      item.classList.remove("active");

      if (item.dataset.value === process) {
        item.classList.add("active");
      }
    });
  }
  activeSelect(type) {
    this.elements.productSelect.value = type
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
