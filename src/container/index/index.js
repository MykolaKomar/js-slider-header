class Slider {
  // в поле content будемо давати посилання на тег slider__content
  static #content = null

  // в поля left та  right будемо додавати посилання на кнопки
  static #left = null
  static #right = null

  // поле count показує нашу поточну картинку в слайдері
  static #count = 1
  // в полі max знаходиться максимальне число картинок
  static #max = null

  //   в поле ініт підключимо всі наші поля
  static init = () => {
    // document -- Це вбудований об’єкт браузера, який надає доступ до
    // елементів поточної сторінки і є центральним елементом
    // querySelector()- Це вбудована функція, яка шукає елементи в документі,
    // що відповідають певному CSS-селектору.
    this.#content = document.querySelector(
      '.slider__content',
    )
    // document -- Це вбудований об’єкт браузера, який надає доступ до
    // елементів поточної сторінки і є центральним елементом
    // querySelector()- Це вбудована функція, яка шукає елементи в документі,
    // що відповідають певному CSS-селектору.
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    // document -- Це вбудований об’єкт браузера, який надає доступ до
    // елементів поточної сторінки і є центральним елементом
    // querySelector()- Це вбудована функція, яка шукає елементи в документі,
    // що відповідають певному CSS-селектору.
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    // childElementCount -- Це вбудована властивість,
    // яка повертає кількість дочірніх елементів, які має елемент.
    this.#max = this.#content.childElementCount

    // задаємо onclick для кнопок
    this.#left.onclick = () => this.#slide('left')

    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    // offsetWidth -- Це вбудована властивість, яка повертає висоту або ширину
    // всього розміру видимої частини елемента в пікселях.
    const offsetWidth = this.#content.offsetWidth

    // scrollLeft -- Це вбудована властивість, яка відображає кількість пікселів,
    // на які вміст елемента прокручений вліво
    // від країв видимої області
    const scrollLeft = this.#content.scrollLeft

    // scrollWidth -- Це вбудована властивість, яка повертає ширину
    // доступного простору для прокрутки елемента в пікселях
    const scrollWidth = this.#content.scrollWidth

    // каже на скільки пікселів нам треба прокрутити
    let scroll = 0
    // ВАРІАНТ №1
    // if (side === 'left') {
    //   if (this.#count === 1) {
    //     this.#count = this.#max
    //     scroll = (this.#count - 1) * offsetWidth
    //   } else {
    //     this.#count -= 1

    //     scroll = (this.#count - 1) * offsetWidth
    //   }
    // }

    // if (side === 'right') {
    //   if (this.#count === this.#max) {
    //     this.#count = 1
    //     scroll = 0
    //   } else {
    //     this.#count += 1

    //     scroll = (this.#count - 1) * offsetWidth
    //   }
    // }

    // Варіант №2
    if (side === 'left') {
      if (scrollLeft === 0) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1

        scroll = (this.#count - 1) * offsetWidth
      }
    }

    if (side === 'right') {
      if (scrollLeft === scrollWidth - offsetWidth) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1

        scroll = (this.#count - 1) * offsetWidth
      }
    }

    // scrollTo -- Це функція, яка дозволяє прокручувати вміст елемента по
    // горизонталі та вертикалі відносно країв елемента
    this.#content.scrollTo({
      top: 0,
      left: scroll,
      // behavior: 'smooth', -- плавне прокручування
      behavior: 'smooth',
    })
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init() {
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__button')

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )

      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )

      this.#wrapper.style.height = `${this.#height}px`
    }
    this.#isOpen = !this.#isOpen
  }
}
Header.init()
