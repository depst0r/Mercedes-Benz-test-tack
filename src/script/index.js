document.addEventListener('DOMContentLoaded', () => {

    const menuItem = document.querySelector('.menu__down');
    const downList = document.querySelector('.navbar__li-down');
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');
    const container = document.querySelector('.slider');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.slider__navigation__arrows-prev');
    const btnNext = document.querySelector('.slider__navigation__arrows-next');
    const items = document.querySelectorAll('.slider__item');

    const container2 = document.querySelector('.slider2');
    const track2 = document.querySelector('.slider2__track');
    const btnPrev2 = document.querySelector('.slider2__navigation__arrows-prev');
    const btnNext2 = document.querySelector('.slider2__navigation__arrows-next');
    const items2 = document.querySelectorAll('.slider2__item');


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

    const slider = (visible = 1, scroll = 1, wrapper, road, next, prev, slides) => {
        let position = 0;
        const sliderToShow = visible;
        const sliderToScroll = scroll;
        const itemsCount = slides.length;
        const itemWidth = wrapper.clientWidth / sliderToShow;
        const movePosition = sliderToScroll * itemWidth;

        // slides.forEach((item) => {
        //     item.style.minWidth = `${itemWidth}px`;
        // });


        next.addEventListener('click', () => {
            const itemLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
            position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
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
    slider(4, 1, container2, track2, btnNext2, btnPrev2, items2);
    select();
    menuDown(menuItem, downList);


});



