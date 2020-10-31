document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.querySelector('.menu__down');
    const downList = document.querySelector('.navbar__li-down');
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.slider__navigation__arrows-prev');
    const btnNext = document.querySelector('.slider__navigation__arrows-next');
    const items = document.querySelectorAll('.slider-item');

    // list down header
    function menuDown(menu, list) {
        menu.addEventListener('click', () => {
            list.classList.toggle('block')
        })
    };

    // custom select 
    const select = () => {

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

    // const container = document.querySelector('.slider-container');
    // const track = document.querySelector('.slider-track');
    // const btnPrev = document.querySelector('.slider__navigation__arrows-prev');
    // const btnNext = document.querySelector('.slider__navigation__arrows-next');
    // const items = document.querySelectorAll('.slider-item');

    const slider = (visible = 1, scroll = 1, wrapper, road, next, prev, slides) => {
        let position = 0;
        const sliderToShow = visible;
        const sliderToScroll = scroll;
        const itemsCount = slides.length;
        const itemWidth = wrapper.clientWidth / sliderToShow;
        const movePosition = sliderToScroll * itemWidth;

        slides.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
        });


        next.addEventListener('click', () => {
            const itemLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
            position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
            console.log(itemLeft)
            setPosition();
            checkBtns();
        });

        prev.addEventListener('click', () => {
            const itemLeft = Math.abs(position) / itemWidth;
            position += itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
            checkBtns();
        });


        const setPosition = () => road.style.transform = `translateX(${position}px)`;
    }
    // function call
    slider(3, 1, container, track, btnNext, btnPrev, items);
    select();
    menuDown(menuItem, downList);


});



