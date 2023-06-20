let firstCard = document.getElementById("firstCard"); //man
let secondCard = document.getElementById("secondCard"); //woman
let thirdCard = document.getElementById("thirdCard"); //kid
let body = document.getElementById("body");
let input = document.getElementById("input");
let menu_input = document.getElementById("menu_input");
let searching_img = document.getElementById("searching_img");
let mainContentButton = document.getElementById("main-button");
let arrow = document.getElementById("arrow-img");
let basket = document.getElementById("basket1");
let basket2 = document.getElementById("basket2");
let allElements = document.querySelectorAll("*");
let flag = 0; //Флаг для поля ввода текста в верхнем меню
let oldInputWidth = input.style.width; //Старые значение ширины для поля вввода
let oldMenuInputWidth = input.style.width; //Старое значение ширины для поисковика

let shadowBlock = document.querySelector(".shadow");

//Функция для увеличения размера поисковика при нажатии по нему
input.addEventListener("click", function () {
  menu_input.style.maxWidth = "500px";
  searching_img.style.display = "none";
  input.style.width = "400px";
  input.style.marginLeft = "0px";
  input.placeholder = "";
  basket2.style.display = "none";
  basket1.style.display = "block";
  if (flag === 0) {
    shadowBlock.classList.toggle("shadow-active");
  }
  flag = 1;
});

//Функция для уменьшения размера поисковика при нажатии вне его области
function handleClickOutside(event) {
  if (!menu_input.contains(event.target)) {
    menu_input.style.width = oldMenuInputWidth;
    input.style.width = oldInputWidth;
    searching_img.style.display = "block";
    input.style.marginLeft = "10px";
    input.placeholder = "Search";
    basket2.style.display = "block";
    basket1.style.display = "none";
    if (flag === 1) {
      shadowBlock.classList.toggle("shadow-active");
    }
    flag = 0;
  }
}
document.addEventListener("click", handleClickOutside);

//Функция для кнопки Start Shopping, которая увеличивает размер при наведении
let flag2 = 0;
mainContentButton.addEventListener("mouseenter", function () {
  flag2 = 0;
  mainContentButton.style.width = "200px";
  mainContentButton.style.height = "54px";
  setTimeout(function () {
    if (flag2 === 1) {
    } else {
      arrow.style.display = "block";
    }
  }, 70);
});

mainContentButton.addEventListener("mouseleave", function () {
  setTimeout(function () {
    arrow.style.display = "none";
    flag2 = 1;
    mainContentButton.style.width = "166px";
  }, 50);
});

//Функции для работы первого слайдера
firstCard.addEventListener("click", function () {
  //Обработчик для man
  if (
    firstCard.classList.contains("left") ||
    firstCard.classList.contains("right")
  ) {
    thirdCard.classList.remove(...thirdCard.classList);
    thirdCard.classList.add("left");
    secondCard.classList.remove(...secondCard.classList);
    secondCard.classList.add("right");
    firstCard.classList.remove(...firstCard.classList);
    firstCard.classList.add("mid");
  }
});

secondCard.addEventListener("click", function () {
  //Обработчик для woman
  if (
    secondCard.classList.contains("left") ||
    secondCard.classList.contains("right")
  ) {
    firstCard.classList.remove(...firstCard.classList);
    firstCard.classList.add("left");
    thirdCard.classList.remove(...thirdCard.classList);
    thirdCard.classList.add("right");
    secondCard.classList.remove(...secondCard.classList);
    secondCard.classList.add("mid");
  }
});

thirdCard.addEventListener("click", function () {
  //Обработчик для kid
  if (
    thirdCard.classList.contains("left") ||
    thirdCard.classList.contains("right")
  ) {
    secondCard.classList.remove(...secondCard.classList);
    secondCard.classList.add("left");
    firstCard.classList.remove(...firstCard.classList);
    firstCard.classList.add("right");
    thirdCard.classList.remove(...thirdCard.classList);
    thirdCard.classList.add("mid");
  }
});

//Второй сладйер
//Изображения женщин
let firstWoman = document.getElementById("first-woman");
let secondWoman = document.getElementById("second-woman");
let thirdWoman = document.getElementById("third-woman");
let fourthWoman = document.getElementById("fourth-woman");
let fifthWoman = document.getElementById("fifth-woman");
//Кружочки для навигации по изображениям
let firstEclipse = document.getElementById("firstEclipse");
let secondEclipse = document.getElementById("secondEclipse");
let thirdEclipse = document.getElementById("thirdEclipse");
let fourthEclipse = document.getElementById("fourthEclipse");
let fifthEclipse = document.getElementById("fifthEclipse");

const eclipses = document.querySelectorAll(".second-slider__button");
function deleteColour() {
  eclipses.forEach((element) => {
    console.log(element);
    element.classList.remove("button-point");
  });
}

function firstWomanChoose() {
  firstWoman.style.transform = null;
  secondWoman.style.transform = null;
  thirdWoman.style.transform = null;
  fourthWoman.style.transform = null;
  fifthWoman.style.transform = null;
  firstWoman.classList.remove(...firstWoman.classList);
  firstWoman.classList.add("mid-woman");
  secondWoman.classList.remove(...secondWoman.classList);
  secondWoman.classList.add("right-woman");
  secondWoman.style.transform = "scaleX(-1) rotateY(10deg)";
  thirdWoman.classList.remove(...thirdWoman.classList);
  thirdWoman.classList.add("right-right-woman");
  fourthWoman.classList.remove(...fourthWoman.classList);
  fourthWoman.classList.add("left-left-woman");
  fourthWoman.style.transform = "scaleX(-1) rotateY(-15deg)";
  fifthWoman.classList.remove(...fifthWoman.classList);
  fifthWoman.classList.add("left-woman");
  fifthWoman.style.transform = "scaleX(-1) rotateY(-10deg)";
  deleteColour();
  firstEclipse.classList.add("button-point");
}

function secondWomanChoose() {
  firstWoman.style.transform = null;
  secondWoman.style.transform = null;
  thirdWoman.style.transform = null;
  fourthWoman.style.transform = null;
  fifthWoman.style.transform = null;
  secondWoman.classList.remove(...secondWoman.classList);
  secondWoman.classList.add("mid-woman");
  firstWoman.classList.remove(...firstWoman.classList);
  firstWoman.classList.add("left-woman");
  thirdWoman.classList.remove(...thirdWoman.classList);
  thirdWoman.classList.add("right-woman");
  fourthWoman.classList.remove(...fourthWoman.classList);
  fourthWoman.classList.add("right-right-woman");
  fifthWoman.classList.remove(...fifthWoman.classList);
  fifthWoman.classList.add("left-left-woman");
  fifthWoman.style.transform = "scaleX(-1) rotateY(-15deg)";
  deleteColour();
  secondEclipse.classList.add("button-point");
}

function thirdWomanChoose() {
  firstWoman.style.transform = null;
  secondWoman.style.transform = null;
  thirdWoman.style.transform = null;
  fourthWoman.style.transform = null;
  fifthWoman.style.transform = null;
  secondWoman.classList.remove(...secondWoman.classList);
  secondWoman.classList.add("left-woman");
  firstWoman.classList.remove(...firstWoman.classList);
  firstWoman.classList.add("left-left-woman");
  thirdWoman.classList.remove(...thirdWoman.classList);
  thirdWoman.classList.add("mid-woman");
  fourthWoman.classList.remove(...fourthWoman.classList);
  fourthWoman.classList.add("right-woman");
  fifthWoman.classList.remove(...fifthWoman.classList);
  fifthWoman.classList.add("right-right-woman");
  // fifthWoman.style.transform = "scaleX(-1) rotateY(-15deg)";
  deleteColour();
  thirdEclipse.classList.add("button-point");
}

function fourthWomanChoose() {
  firstWoman.style.transform = null;
  secondWoman.style.transform = null;
  thirdWoman.style.transform = null;
  fourthWoman.style.transform = null;
  fifthWoman.style.transform = null;
  secondWoman.classList.remove(...secondWoman.classList);
  secondWoman.classList.add("left-left-woman");
  firstWoman.classList.remove(...firstWoman.classList);
  firstWoman.classList.add("right-right-woman");
  thirdWoman.classList.remove(...thirdWoman.classList);
  thirdWoman.classList.add("left-woman");
  fourthWoman.classList.remove(...fourthWoman.classList);
  fourthWoman.classList.add("mid-woman");
  fifthWoman.classList.remove(...fifthWoman.classList);
  fifthWoman.classList.add("right-woman");
  firstWoman.style.transform = "scaleX(-1) rotateY(15deg)";
  deleteColour();
  fourthEclipse.classList.add("button-point");
}

function fifthWomanChoose() {
  firstWoman.style.transform = null;
  secondWoman.style.transform = null;
  thirdWoman.style.transform = null;
  fourthWoman.style.transform = null;
  fifthWoman.style.transform = null;
  secondWoman.classList.remove(...secondWoman.classList);
  secondWoman.classList.add("right-right-woman");
  firstWoman.classList.remove(...firstWoman.classList);
  firstWoman.classList.add("right-woman");
  thirdWoman.classList.remove(...thirdWoman.classList);
  thirdWoman.classList.add("left-left-woman");
  fourthWoman.classList.remove(...fourthWoman.classList);
  fourthWoman.classList.add("left-woman");
  fifthWoman.classList.remove(...fifthWoman.classList);
  fifthWoman.classList.add("mid-woman");
  firstWoman.style.transform = "scaleX(-1) rotateY(15deg)";
  secondWoman.style.transform = "scaleX(-1) rotateY(15deg)";
  fourthWoman.style.transform = "scaleX(-1) rotateY(-15deg)";
  deleteColour();
  fifthEclipse.classList.add("button-point");
}

firstWoman.addEventListener("click", firstWomanChoose);
secondWoman.addEventListener("click", secondWomanChoose);
thirdWoman.addEventListener("click", thirdWomanChoose);
fourthWoman.addEventListener("click", fourthWomanChoose);
fifthWoman.addEventListener("click", fifthWomanChoose);

firstEclipse.addEventListener("click", firstWomanChoose);
secondEclipse.addEventListener("click", secondWomanChoose);
thirdEclipse.addEventListener("click", thirdWomanChoose);
fourthEclipse.addEventListener("click", fourthWomanChoose);
fifthEclipse.addEventListener("click", fifthWomanChoose);
