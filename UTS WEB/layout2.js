function addEventListenersToElements(elements, hoverColor, hoverText, defaultColor, defaultText) {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.addEventListener('mouseenter', function () {
            element.style.backgroundColor = hoverColor;
            element.innerHTML = hoverText;
        });
        element.addEventListener('mouseleave', function () {
            element.style.backgroundColor = defaultColor;
            element.innerHTML = defaultText;
        });
    }
}

const left1 = document.querySelectorAll('.leftbox1');
const right1 = document.querySelectorAll('.rightbox1');
const center1 = document.querySelectorAll('.centerbox1');

addEventListenersToElements(left1, 'red', 'done gak bang?', 'blue', 'Left');
addEventListenersToElements(right1, 'green', 'done gak bang?', 'rgb(0, 110, 255)', 'Right');
addEventListenersToElements(center1, 'salmon', 'done gak bang?', 'rgb(81, 81, 184)', 'Center');
