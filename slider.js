// Массив изображений
const slides = [
  { src: "assets/images/Image1.JPG", caption: "Изображение 1" },
  { src: "assets/images/Image2.JPG", caption: "Изображение 2" },
  { src: "assets/images/Image3.PNG", caption: "Изображение 3" },
  { src: "assets/images/Image4.JPG", caption: "Изображение 4" },
  { src: "assets/images/Image5.JPG", caption: "Изображение 5" },
  { src: "assets/images/Image6.JPG", caption: "Изображение 6" },
  { src: "assets/images/Image7.JPG", caption: "Изображение 7" },
  { src: "assets/images/Image8.JPG", caption: "Изображение 8" },
];

let index = 0; // индекс текущей картинки (по умолчанию 0)

// Функция отображения слайдов по индексам
function showSlide(i) {
  $("#currentImage").attr("src", slides[i].src).attr("alt", slides[i].caption);
  $("#caption").text(slides[i].caption);
  $("#btnPrev").prop("disabled", i === 0);
  $("#btnNext").prop("disabled", i === slides.length - 1);
}

// Если нажата кнопка влево - картинки мотаются назад
$("#btnPrev").on("click", function () {
  if (index > 0) {
    showSlide(--index);
  }
});

// Если нажата кнопка вправо - картинки мотаются вперёд
$("#btnNext").on("click", function () {
  if (index < slides.length - 1) {
    showSlide(++index);
  }
});

// Отображение картинки по умолчанию (при старте страницы)
$(document).ready(function () {
  showSlide(0);
});
