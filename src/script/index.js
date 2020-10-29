
class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = true,
        position = 0,
        slidesToShow = 5
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelector(wrap).children;
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };
    }

    init() {
        this.addGlobalClass();
        this.addStyle();
        this.controlSlider();
    }

    addGlobalClass() {
        this.main.classList.add('my-slider');
        this.wrap.classList.add('my-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('my-slider__item')
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.textContent = `
            .my-slider {
                overflow: hidden !important;
            }
            .my-slider__wrap {
                display: flex ;
                transition: transform 0.6!important;
                will-change: transform !important;
            }
            .my-slider__item {
                flex: 0 0 \`${this.options.widthSlide}%\`;
                max-width: \`${this.options.widthSlide}%\`;
            }
        `;
        style.id = 'sliderCarusel-style';

        document.head.appendChild(style)
        const t = document.querySelectorAll('.my-slider__wrap')
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow
            }
            this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.widthSlide}%)
        `
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `
            translateX(-${this.options.position * this.options.widthSlide}%)
            `
        }
    }
};

// list down header

const menuItem = document.querySelector('.menu__down'),
    downList = document.querySelector('.navbar__li-down');

function menuDown(menu, list) {
    menu.addEventListener('click', () => {
        list.classList.toggle('block')
    })
};

// custom select 
const select = () => {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML;
        sel = this.closest('.select'),
            currentText = sel.querySelector('.select__current');
        currentText.innerHTML = text;
        sel.classList.remove('is-active');

    }

};

// function call

select();
menuDown(menuItem, downList);



