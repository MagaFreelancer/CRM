const testData = (function () {
  function NewData(fullName, number, email) {
    this.fullName = fullName;
    this.number = number;
    this.email = email;
  }

  const dates = [
    new NewData("Магомед Эльмурзаев", "+90 551 400 21 43", "ban0le4@gmail.com"),
    new NewData("Андрей Мешков", "+7 251 210 21 43", "sudaTu@gmail.com"),
    new NewData("Джон Ли", "+32 921 100 21 43", "prostaPocta@gmail.com"),
    new NewData(
      "Владимир Пригожин",
      "+92 461 102 21 43",
      "MomentoMori@gmail.com"
    ),
    new NewData("Василий Медведь", "+92 921 456 24 43", "endMorano@gmail.com"),
  ];

  function randomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  function setRandomDate() {
    
    const nameField = document.querySelector("#name"),
      numberField = document.querySelector("#phone"),
      emailField = document.querySelector("#email");
    const randomIn = randomIndex(dates.length);
    const date = dates[randomIn];



    nameField.value = date.fullName;
    numberField.value = date.number;
    emailField.value = date.email;
  }

  return {
    setRandomDate,
  };
})();
testData.setRandomDate();
