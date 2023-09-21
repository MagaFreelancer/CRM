export default class View {
  constructor(userDates) {
    this.renderUserElemetns(userDates);
  }

  elements = {
    tBody: document.querySelector("#tbody"),
  };

  addUserElement(userData) {
    const html = `
      <tr data-type="${userData.product.type}">
						<th scope="row">${userData.id}</th>
						<td>${userData.date}</td>
						<td>${userData.product.value}</td>
						<td>${userData.name}</td>
						<td>${userData.email}</td>
						<td>${userData.number}</td>
						<td>
							<div class="badge badge-pill badge-danger">Новый</div>
						</td>
						<td>
							<a href="edit.html">Редактировать</a>
						</td>
					</tr>
      `;

    this.elements.tBody.insertAdjacentHTML("beforeend", html);
  }
  renderUserElemetns(userDates) {
    userDates.forEach((item) => {
      this.addUserElement(item);
    });
  }
}
