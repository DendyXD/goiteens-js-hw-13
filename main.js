// Завдання 1

const btn1 = document.querySelector("#btn1");

const btn2 = document.querySelector("#btn2");

const inputSuma = document.querySelector("#input1");

const bankAccount = {
    ownerName: "joe",
    accountNumber: 85913189053,
    balance: 0,
    deposit(suma) {
        this.balance += suma;
        console.log(`На рахунок начислено ${suma} гривень. Баланс рахунку ${this.balance}`);
    },
    withdraw(suma) {
        this.balance -= suma;
        console.log(`З рахунку виведено ${suma} гривень. Баланс рахунку ${this.balance}`);
    }
}

btn1.addEventListener("click", () => { bankAccount.deposit(Number(inputSuma.value)) })

btn2.addEventListener("click", () => { bankAccount.withdraw(Number(inputSuma.value)) })

// Завдання 2

const weather = {
    temperature: 20,
    humidity: 1,
    windSpeed: 40,
    checkTemperature() {
        if (this.temperature < 0) {
            console.log("Температура нижче 0 градусів Цельсія");
        } else {
            console.log("Температура вище або дорівнює 0 градусів Цельсія");
        }
    }
}

const temperatureInput = document.querySelector("#input2");

temperatureInput.addEventListener("blur", () => {
    if (temperatureInput.value) {
        weather.temperature = Number(temperatureInput.value);   
    }
})

// Завдання 3

const inputPassword = document.querySelector("#input3")

const inputEmail = document.querySelector("#input4")

const user = {
    name: "big joe",
    password: "b1gj03",
    email: "johndoe@gmail.com",
    login() {
        if (inputEmail.value === this.email && inputPassword.value === this.password) {
            console.log("Пароль та емейл були введені правильно");
        } else {
            console.log("Пароль та емейл були введені неправильно");
        }
    }
}

// Завдання 4

const title = document.querySelector("#filmTitle")

const year = document.querySelector("#filmYear")

const director = document.querySelector("#filmDirector")

const rating = document.querySelector("#filmRating")

const movie = {
    title: "Terminator",
    director: "John Doe",
    year: 1984,
    rating: 8.00000000001,
    checkRating() {
        if (this.rating > 8) {
            title.style.backgroundColor = "green"
        }
    }
}

title.textContent = movie.title;

year.textContent = movie.year;

director.textContent += movie.director;

rating.textContent += movie.rating

movie.checkRating()