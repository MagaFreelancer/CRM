export default class View {
  constructor(userDates) {
    this.renderUsersElements(userDates);
  }

  elements = {
    tBody: document.querySelector("#tbody"),
    productSelect: document.querySelector("#productSelect"),
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
  renderUsersElements(userDates, type = "all") {
    userDates.forEach((item) => {
      if (type === "all") {
        this.addUserElement(item);
      } else if (item.product.type === type) {
        this.addUserElement(item);
      }
    });
  }
  clearElements() {
    this.elements.tBody.innerHTML = "";
  }
}
