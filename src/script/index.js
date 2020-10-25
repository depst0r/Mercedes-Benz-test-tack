// slider
'use strict'
class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = true,
        position = 0,
        slidesToShow = 3
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
                max-width: 85%;
                
            }

            .my-slider__wrap {
                display: flex ;
                transition: transform 0.5 ease!important;
                will-change: transform !important;
            }

            .my-slider__item {
                align-items: center;
                justify-content: center;
                flex: 0 0 20% !important;
                margin: auto 0 !important;
                max-width: 45% !important;
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

}