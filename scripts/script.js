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
// firstCard.addEventListener("click", function () {
//   //Обработчик для man
//   if (
//     firstCard.classList.contains("left") ||
//     firstCard.classList.contains("right")
//   ) {
//     thirdCard.classList.remove(...thirdCard.classList);
//     thirdCard.classList.add("left");
//     secondCard.classList.remove(...secondCard.classList);
//     secondCard.classList.add("right");
//     firstCard.classList.remove(...firstCard.classList);
//     firstCard.classList.add("mid");
//   }
// });

// secondCard.addEventListener("click", function () {
//   //Обработчик для woman
//   if (
//     secondCard.classList.contains("left") ||
//     secondCard.classList.contains("right")
//   ) {
//     firstCard.classList.remove(...firstCard.classList);
//     firstCard.classList.add("left");
//     thirdCard.classList.remove(...thirdCard.classList);
//     thirdCard.classList.add("right");
//     secondCard.classList.remove(...secondCard.classList);
//     secondCard.classList.add("mid");
//   }
// });

// thirdCard.addEventListener("click", function () {
//   //Обработчик для kid
//   if (
//     thirdCard.classList.contains("left") ||
//     thirdCard.classList.contains("right")
//   ) {
//     secondCard.classList.remove(...secondCard.classList);
//     secondCard.classList.add("left");
//     firstCard.classList.remove(...firstCard.classList);
//     firstCard.classList.add("right");
//     thirdCard.classList.remove(...thirdCard.classList);
//     thirdCard.classList.add("mid");
//   }
// });

// const firstCard = document.getElementById("firstCard");
// const secondCard = document.getElementById("secondCard");
// const thirdCard = document.getElementById("thirdCard");
// let timeDelay = 0.5;

// firstCard.addEventListener("click", function () {
//   if (firstCard.classList.contains("left")) {
//     firstCard.style.zIndex = "999";
//     secondCard.style.zIndex = "1";
//     thirdCard.style.zIndex = "0";

//     secondCard.style.animation = "sizelower 0.5s forwards";
//     setTimeout(function () {
//       firstCard.style.animation = `left-click ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("mid");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("right");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("left");
//     }, 500);
//   }
//   if (firstCard.classList.contains("right")) {
//     firstCard.style.zIndex = "999";
//     secondCard.style.zIndex = "0";
//     thirdCard.style.zIndex = "1";

//     thirdCard.style.animation = "sizelower 0.5s forwards";

//     setTimeout(function () {
//       firstCard.style.animation = `right-click ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("mid");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("right");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("left");
//     }, 500);
//   }
// });

// secondCard.addEventListener("click", function () {
//   if (secondCard.classList.contains("left")) {
//     firstCard.style.zIndex = "0";
//     secondCard.style.zIndex = "999";
//     thirdCard.style.zIndex = "1";

//     thirdCard.style.animation = "sizelower 0.5s forwards";
//     setTimeout(function () {
//       firstCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `left-click ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("left");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("mid");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("right");
//     }, 500);
//   }

//   if (secondCard.classList.contains("right")) {
//     firstCard.style.zIndex = "1";
//     secondCard.style.zIndex = "999";
//     thirdCard.style.zIndex = "0";

//     firstCard.style.animation = "sizelower 0.5s forwards";

//     setTimeout(function () {
//       firstCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `right-click ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("left");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("mid");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("right");
//     }, 500);
//   }
// });

// thirdCard.addEventListener("click", function () {
//   if (thirdCard.classList.contains("right")) {
//     firstCard.style.zIndex = "0";
//     secondCard.style.zIndex = "1";
//     thirdCard.style.zIndex = "999";

//     secondCard.style.animation = "sizelower 0.5s forwards";

//     setTimeout(function () {
//       firstCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `right-click ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("right");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("left");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("mid");
//     }, 500);
//   }
//   if (thirdCard.classList.contains("left")) {
//     firstCard.style.zIndex = "1";
//     secondCard.style.zIndex = "0";
//     thirdCard.style.zIndex = "999";

//     firstCard.style.animation = "sizelower 0.5s forwards";
//     setTimeout(function () {
//       firstCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
//       secondCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
//       thirdCard.style.animation = `left-click ${timeDelay}s linear forwards`;
//       firstCard.classList.remove(...firstCard.classList);
//       firstCard.classList.add("right");
//       secondCard.classList.remove(...secondCard.classList);
//       secondCard.classList.add("left");
//       thirdCard.classList.remove(...thirdCard.classList);
//       thirdCard.classList.add("mid");
//     }, 500);
//   }
// });

const firstCard = document.getElementById("firstCard");
const secondCard = document.getElementById("secondCard");
const thirdCard = document.getElementById("thirdCard");
const slider = document.getElementById("slider");
let timeDelay = 0.5;

const cloneFirstCard = firstCard.cloneNode("true");
const cloneSecondCard = secondCard.cloneNode("true");
const cloneThirdCard = thirdCard.cloneNode("true");

slider.insertAdjacentElement("beforeend", cloneFirstCard);
cloneFirstCard.style.display = "none";
slider.insertAdjacentElement("beforeend", cloneSecondCard);
cloneSecondCard.style.display = "none";
slider.insertAdjacentElement("beforeend", cloneThirdCard);
cloneThirdCard.style.display = "none";

firstCard.addEventListener("click", function () {
  if (firstCard.classList.contains("left")) {
    firstCard.style.zIndex = "999";
    secondCard.style.zIndex = "1";
    thirdCard.style.zIndex = "0";
    secondCard.style.animation = "sizelower 0.5s forwards";

    cloneThirdCard.classList.remove(...cloneThirdCard.classList);
    cloneThirdCard.classList.add("right");
    setTimeout(function () {
      firstCard.style.animation = `left-click ${timeDelay}s linear forwards`;
      secondCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
      cloneThirdCard.style.display = "block";
      cloneThirdCard.style.animation = "cloneRotateLeft linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("mid");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("right");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("left");
      setTimeout(function () {
        cloneThirdCard.style.display = "none";
      }, 500);
    }, 500);
  }
  if (firstCard.classList.contains("right")) {
    firstCard.style.zIndex = "999";
    secondCard.style.zIndex = "0";
    thirdCard.style.zIndex = "1";
    thirdCard.style.animation = "sizelower 0.5s forwards";
    cloneSecondCard.classList.remove(...cloneSecondCard.classList);
    cloneSecondCard.classList.add("left");
    setTimeout(function () {
      firstCard.style.animation = `right-click ${timeDelay}s linear forwards`;
      secondCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
      cloneSecondCard.style.display = "block";
      cloneSecondCard.style.animation = "cloneRotateRight linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("mid");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("right");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("left");
      setTimeout(function () {
        cloneSecondCard.style.display = "none";
      }, 500);
    }, 500);
  }
});

secondCard.addEventListener("click", function () {
  if (secondCard.classList.contains("left")) {
    firstCard.style.zIndex = "0";
    secondCard.style.zIndex = "999";
    thirdCard.style.zIndex = "1";
    cloneFirstCard.classList.remove(...cloneFirstCard.classList);
    cloneFirstCard.classList.add("right");
    thirdCard.style.animation = "sizelower 0.5s forwards";
    setTimeout(function () {
      firstCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
      secondCard.style.animation = `left-click ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
      cloneFirstCard.style.display = "block";
      cloneFirstCard.style.animation = "cloneRotateLeft linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("left");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("mid");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("right");
      setTimeout(function () {
        cloneFirstCard.style.display = "none";
      }, 500);
    }, 500);
  }

  if (secondCard.classList.contains("right")) {
    firstCard.style.zIndex = "1";
    secondCard.style.zIndex = "999";
    thirdCard.style.zIndex = "0";
    firstCard.style.animation = "sizelower 0.5s forwards";
    cloneThirdCard.classList.remove(...cloneThirdCard.classList);
    cloneThirdCard.classList.add("left");
    setTimeout(function () {
      firstCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
      secondCard.style.animation = `right-click ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
      cloneThirdCard.style.display = "block";
      cloneThirdCard.style.animation = "cloneRotateRight linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("left");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("mid");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("right");
      setTimeout(function () {
        cloneThirdCard.style.display = "none";
      }, 500);
    }, 500);
  }
});

thirdCard.addEventListener("click", function () {
  if (thirdCard.classList.contains("right")) {
    firstCard.style.zIndex = "0";
    secondCard.style.zIndex = "1";
    thirdCard.style.zIndex = "999";
    secondCard.style.animation = "sizelower 0.5s forwards";

    cloneFirstCard.classList.remove(...cloneFirstCard.classList);
    cloneFirstCard.classList.add("left");
    setTimeout(function () {
      firstCard.style.animation = `left-card-right ${timeDelay}s linear forwards`;
      secondCard.style.animation = `mid-card-left ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `right-click ${timeDelay}s linear forwards`;
      cloneFirstCard.style.display = "block";
      cloneFirstCard.style.animation = "cloneRotateRight linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("right");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("left");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("mid");
      setTimeout(function () {
        cloneFirstCard.style.display = "none";
      }, 500);
    }, 500);
  }
  if (thirdCard.classList.contains("left")) {
    firstCard.style.zIndex = "1";
    secondCard.style.zIndex = "0";
    thirdCard.style.zIndex = "999";
    cloneSecondCard.classList.remove(...cloneSecondCard.classList);
    cloneSecondCard.classList.add("right");
    firstCard.style.animation = "sizelower 0.5s forwards";
    setTimeout(function () {
      firstCard.style.animation = `mid-card-right ${timeDelay}s linear forwards`;
      secondCard.style.animation = `right-card-left ${timeDelay}s linear forwards`;
      thirdCard.style.animation = `left-click ${timeDelay}s linear forwards`;
      cloneSecondCard.style.display = "block";
      cloneSecondCard.style.animation = "cloneRotateLeft linear 0.5s";
      firstCard.classList.remove(...firstCard.classList);
      firstCard.classList.add("right");
      secondCard.classList.remove(...secondCard.classList);
      secondCard.classList.add("left");
      thirdCard.classList.remove(...thirdCard.classList);
      thirdCard.classList.add("mid");
      setTimeout(function () {
        cloneSecondCard.style.display = "none";
      }, 500);
    }, 500);
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

// function firstWomanChoose() {
//   firstWoman.style.transform = null;
//   secondWoman.style.transform = null;
//   thirdWoman.style.transform = null;
//   fourthWoman.style.transform = null;
//   fifthWoman.style.transform = null;
//   firstWoman.classList.remove(...firstWoman.classList);
//   firstWoman.classList.add("mid-woman");
//   secondWoman.classList.remove(...secondWoman.classList);
//   secondWoman.classList.add("right-woman");
//   secondWoman.style.transform = "scaleX(-1) rotateY(10deg)";
//   thirdWoman.classList.remove(...thirdWoman.classList);
//   thirdWoman.classList.add("right-right-woman");
//   fourthWoman.classList.remove(...fourthWoman.classList);
//   fourthWoman.classList.add("left-left-woman");
//   fourthWoman.style.transform = "scaleX(-1) rotateY(-15deg)";
//   fifthWoman.classList.remove(...fifthWoman.classList);
//   fifthWoman.classList.add("left-woman");
//   fifthWoman.style.transform = "scaleX(-1) rotateY(-10deg)";
//   deleteColour();
//   firstEclipse.classList.add("button-point");
// }

let sliderDelay = 0.5;

function womanAnimationAddClass(event) {
  const element = event.target;
  const animationName = event.animationName;
  element.classList.remove(...element.classList);
  console.log(animationName);
  if (animationName == "ll-to-l") {
    element.classList.add("left-woman");
  } else if (animationName == "l-to-m") {
    element.classList.add("mid-woman");
  } else if (animationName == "m-to-r") {
    element.classList.add("right-woman");
  } else if (animationName == "r-to-rr") {
    element.classList.add("right-right-woman");
  } else if (animationName == "rr-to-ll" || animationName == "rr-to-ll2") {
    element.classList.add("left-left-woman");
  } else if (
    animationName == "ll-to-l-reverse" ||
    animationName == "m-to-l-reverse"
  ) {
    element.classList.add("left-woman-reverse");
  } else if (
    animationName == "l-to-m-reverse" ||
    animationName == "r-to-m-reverse"
  ) {
    element.classList.add("mid-woman-reverse");
  } else if (
    animationName == "m-to-r-reverse" ||
    animationName == "rr-to-r-reverse"
  ) {
    element.classList.add("right-woman-reverse");
  } else if (
    animationName == "r-to-rr-reverse" ||
    animationName == "ll-to-rr-reverse"
  ) {
    element.classList.add("right-right-woman-reverse");
  } else if (
    animationName == "rr-to-ll-reverse" ||
    animationName == "l-to-ll-reverse"
  ) {
    element.classList.add("left-left-woman-reverse");
  } else if (animationName == "rr-to-r") {
    element.classList.add("right-woman");
  } else if (animationName == "r-to-m") {
    element.classList.add("mid-woman");
  } else if (animationName == "m-to-l") {
    element.classList.add("left-woman");
  } else if (animationName == "l-to-ll") {
    element.classList.add("left-left-woman");
  } else if (animationName == "ll-to-rr" || animationName == "ll-to-rr2") {
    element.classList.add("right-right-woman");
  }
}

function firstWomanChoose() {
  if (firstWoman.classList.contains("left-left-woman")) {
    firstWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
    firstWoman.style.zIndex = "1";
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
    secondWoman.style.zIndex = "4";
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.animation = `m-to-r 0.5s forwards`;
    thirdWoman.style.zIndex = "1";
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.animation = `r-to-rr 0.5s forwards`;
    fourthWoman.style.zIndex = "0";
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.animation = `rr-to-ll-reverse ${sliderDelay}s 0.5s forwards`;
    fifthWoman.style.zIndex = "-1";
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    setTimeout(function () {
      firstWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
      firstWoman.style.zIndex = "4";
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.animation = `m-to-r-reverse 0.5s forwards`;
      secondWoman.style.zIndex = "1";
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.animation = `r-to-rr 0.5s forwards`;
      thirdWoman.style.zIndex = "0";
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.animation = `rr-to-ll-reverse ${sliderDelay}s 0.5s forwards`;
      fourthWoman.style.zIndex = "-1";
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.animation = `ll-to-l-reverse ${sliderDelay}s 0.5s forwards`;
      fifthWoman.style.zIndex = "1";
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    }, 1050);
  } else if (firstWoman.classList.contains("left-woman")) {
    firstWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
    firstWoman.style.zIndex = "4";
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.animation = `m-to-r-reverse 0.5s forwards`;
    secondWoman.style.zIndex = "1";
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.animation = `r-to-rr 0.5s forwards`;
    thirdWoman.style.zIndex = "0";
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.animation = `rr-to-ll-reverse ${sliderDelay}s 0.5s forwards`;
    fourthWoman.style.zIndex = "-1";
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.animation = `ll-to-l-reverse ${sliderDelay}s 0.5s forwards`;
    fifthWoman.style.zIndex = "1";
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
  } else if (firstWoman.classList.contains("right-woman-reverse")) {
    firstWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
    firstWoman.style.zIndex = "4";
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.animation = `rr-to-r-reverse 0.5s 0.5s forwards`;
    secondWoman.style.zIndex = "1";
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.animation = `ll-to-rr 0.5s 0.5s forwards`;
    thirdWoman.style.zIndex = "-1";
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.animation = `l-to-ll-reverse ${sliderDelay}s forwards`;
    fourthWoman.style.zIndex = "0";
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.animation = `m-to-l-reverse ${sliderDelay}s forwards`;
    fifthWoman.style.zIndex = "1";
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
  } else if (firstWoman.classList.contains("right-right-woman-reverse")) {
    firstWoman.style.animation = `rr-to-r-reverse ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "-1";
    thirdWoman.style.animation = `l-to-ll 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "0";
    fourthWoman.style.animation = `m-to-l-reverse 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "4";
    setTimeout(function () {
      firstWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
      firstWoman.style.zIndex = "4";
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.animation = `rr-to-r-reverse 0.5s 0.5s forwards`;
      secondWoman.style.zIndex = "1";
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.animation = `ll-to-rr 0.5s 0.5s forwards`;
      thirdWoman.style.zIndex = "-1";
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.animation = `l-to-ll-reverse ${sliderDelay}s forwards`;
      fourthWoman.style.zIndex = "0";
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.animation = `m-to-l-reverse ${sliderDelay}s forwards`;
      fifthWoman.style.zIndex = "1";
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    }, 1050);
  }
}

function secondWomanChoose() {
  if (secondWoman.classList.contains("left-left-woman")) {
    firstWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "-1";
    secondWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `l-to-m 0.5s  0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "4";
    fourthWoman.style.animation = `m-to-r 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `r-to-rr ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "0";
    setTimeout(function () {
      firstWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "1";
      secondWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "4";
      thirdWoman.style.animation = `m-to-r 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "1";
      fourthWoman.style.animation = `r-to-rr 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "0";
      fifthWoman.style.animation = `rr-to-ll-reverse ${sliderDelay}s 0.5s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "-1";
    }, 1050);
  } else if (secondWoman.classList.contains("left-woman")) {
    firstWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "4";
    thirdWoman.style.animation = `m-to-r 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `r-to-rr 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "0";
    fifthWoman.style.animation = `rr-to-ll-reverse ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "-1";
  } else if (secondWoman.classList.contains("right-woman-reverse")) {
    firstWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "4";
    thirdWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `ll-to-rr2 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "-1";
    fifthWoman.style.animation = `l-to-ll-reverse ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "0";
  } else if (secondWoman.classList.contains("right-right-woman-reverse")) {
    firstWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "4";
    secondWoman.style.animation = `rr-to-r-reverse ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `ll-to-rr 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "-1";
    fourthWoman.style.animation = `l-to-ll-reverse 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "0";
    fifthWoman.style.animation = `m-to-l-reverse ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
    setTimeout(function () {
      firstWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "1";
      secondWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "4";
      thirdWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "1";
      fourthWoman.style.animation = `ll-to-rr2 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "-1";
      fifthWoman.style.animation = `l-to-ll-reverse ${sliderDelay}s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "0";
    }, 1050);
  }
}

function thirdWomanChoose() {
  if (thirdWoman.classList.contains("left-left-woman")) {
    firstWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "0";
    secondWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "-1";
    thirdWoman.style.animation = `ll-to-l 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `l-to-m-reverse 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "4";
    fifthWoman.style.animation = `m-to-r ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
    setTimeout(function () {
      firstWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "-1";
      secondWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "1";
      thirdWoman.style.animation = `l-to-m 0.5s 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "4";
      fourthWoman.style.animation = `m-to-r 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "1";
      fifthWoman.style.animation = `r-to-rr ${sliderDelay}s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "0";
    }, 1050);
  } else if (thirdWoman.classList.contains("left-woman")) {
    firstWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "-1";
    secondWoman.style.animation = `ll-to-l ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `l-to-m 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "4";
    fourthWoman.style.animation = `m-to-r 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `r-to-rr ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "0";
  } else if (thirdWoman.classList.contains("right-woman")) {
    firstWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "0";
    secondWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "4";
    fourthWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `ll-to-rr2 ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "-1";
  } else if (thirdWoman.classList.contains("right-right-woman")) {
    firstWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `r-to-m-reverse ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "4";
    thirdWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `ll-to-rr2 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "-1";
    fifthWoman.style.animation = `l-to-ll-reverse ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "0";
    setTimeout(function () {
      firstWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "0";
      secondWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "1";
      thirdWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "4";
      fourthWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "1";
      fifthWoman.style.animation = `ll-to-rr2 ${sliderDelay}s 0.5s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "-1";
    }, 1050);
  }
}

function fourthWomanChoose() {
  if (fourthWoman.classList.contains("left-left-woman-reverse")) {
    firstWoman.style.animation = `m-to-r-reverse ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "0";
    thirdWoman.style.animation = `rr-to-ll 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "-1";
    fourthWoman.style.animation = `ll-to-l-reverse 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "4";
    setTimeout(function () {
      firstWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "0";
      secondWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "-1";
      thirdWoman.style.animation = `ll-to-l 0.5s 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "1";
      fourthWoman.style.animation = `l-to-m-reverse 0.5s 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "4";
      fifthWoman.style.animation = `m-to-r ${sliderDelay}s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "1";
    }, 1050);
  } else if (fourthWoman.classList.contains("right-woman")) {
    firstWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "-1";
    secondWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "0";
    thirdWoman.style.animation = `m-to-l 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "4";
    fifthWoman.style.animation = `rr-to-r ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
  } else if (fourthWoman.classList.contains("right-right-woman")) {
    firstWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "0";
    secondWoman.style.animation = `m-to-l ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "4";
    fourthWoman.style.animation = `rr-to-r 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `ll-to-rr2 ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "-1";
    setTimeout(function () {
      firstWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "-1";
      secondWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "0";
      thirdWoman.style.animation = `m-to-l 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "1";
      fourthWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "4";
      fifthWoman.style.animation = `rr-to-r ${sliderDelay}s 0.5s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "1";
    }, 1050);
  } else if (fourthWoman.classList.contains("left-woman-reverse")) {
    firstWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "0";
    secondWoman.style.animation = `rr-to-ll2 ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "-1";
    thirdWoman.style.animation = `ll-to-l 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `l-to-m-reverse 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "4";
    fifthWoman.style.animation = `m-to-r ${sliderDelay}s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
  }
}

function fifthWomanChoose() {
  if (fifthWoman.classList.contains("left-left-woman-reverse")) {
    firstWoman.style.animation = `l-to-m ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "4";
    secondWoman.style.animation = `m-to-r-reverse ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "1";
    thirdWoman.style.animation = `r-to-rr 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "0";
    fourthWoman.style.animation = `rr-to-ll-reverse 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "-1";
    fifthWoman.style.animation = `ll-to-l-reverse ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
    setTimeout(function () {
      firstWoman.style.animation = `m-to-r-reverse ${sliderDelay}s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "1";
      secondWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "0";
      thirdWoman.style.animation = `rr-to-ll 0.5s 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "-1";
      fourthWoman.style.animation = `ll-to-l-reverse 0.5s 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "0";
      fifthWoman.style.animation = `l-to-m-reverse ${sliderDelay}s 0.5s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "4";
    }, 1050);
  } else if (fifthWoman.classList.contains("left-woman-reverse")) {
    firstWoman.style.animation = `m-to-r-reverse ${sliderDelay}s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `r-to-rr-reverse ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "0";
    thirdWoman.style.animation = `rr-to-ll 0.5s 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "-1";
    fourthWoman.style.animation = `ll-to-l-reverse 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "0";
    fifthWoman.style.animation = `l-to-m-reverse ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "4";
  } else if (fifthWoman.classList.contains("right-woman")) {
    firstWoman.style.animation = `rr-to-r-reverse ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "1";
    secondWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "-1";
    thirdWoman.style.animation = `l-to-ll 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "0";
    fourthWoman.style.animation = `m-to-l-reverse 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "1";
    fifthWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "4";
  } else if (fifthWoman.classList.contains("right-right-woman")) {
    firstWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
    firstWoman.addEventListener("animationend", womanAnimationAddClass);
    firstWoman.style.zIndex = "-1";
    secondWoman.style.animation = `l-to-ll ${sliderDelay}s forwards`;
    secondWoman.addEventListener("animationend", womanAnimationAddClass);
    secondWoman.style.zIndex = "0";
    thirdWoman.style.animation = `m-to-l 0.5s forwards`;
    thirdWoman.addEventListener("animationend", womanAnimationAddClass);
    thirdWoman.style.zIndex = "1";
    fourthWoman.style.animation = `r-to-m 0.5s 0.5s forwards`;
    fourthWoman.addEventListener("animationend", womanAnimationAddClass);
    fourthWoman.style.zIndex = "4";
    fifthWoman.style.animation = `rr-to-r ${sliderDelay}s 0.5s forwards`;
    fifthWoman.addEventListener("animationend", womanAnimationAddClass);
    fifthWoman.style.zIndex = "1";
    setTimeout(function () {
      firstWoman.style.animation = `rr-to-r-reverse ${sliderDelay}s 0.5s forwards`;
      firstWoman.addEventListener("animationend", womanAnimationAddClass);
      firstWoman.style.zIndex = "1";
      secondWoman.style.animation = `ll-to-rr-reverse ${sliderDelay}s 0.5s forwards`;
      secondWoman.addEventListener("animationend", womanAnimationAddClass);
      secondWoman.style.zIndex = "-1";
      thirdWoman.style.animation = `l-to-ll 0.5s forwards`;
      thirdWoman.addEventListener("animationend", womanAnimationAddClass);
      thirdWoman.style.zIndex = "0";
      fourthWoman.style.animation = `m-to-l-reverse 0.5s forwards`;
      fourthWoman.addEventListener("animationend", womanAnimationAddClass);
      fourthWoman.style.zIndex = "1";
      fifthWoman.style.animation = `r-to-m ${sliderDelay}s 0.5s forwards`;
      fifthWoman.addEventListener("animationend", womanAnimationAddClass);
      fifthWoman.style.zIndex = "4";
    }, 1050);
  }
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
