const left1 = document.getElementsByClassName('leftbox1');
const left2 = document.getElementsByClassName('leftbox2');
const left3 = document.getElementsByClassName('leftbox3');
const center1 = document.getElementsByClassName('centerbox1');
const center2 = document.getElementsByClassName('centerbox2');
const center3 = document.getElementsByClassName('centerbox3');
const right1 = document.getElementsByClassName('rightbox1');
const right2 = document.getElementsByClassName('rightbox2');



for (let index = 0; index < left1.length; index++) {
    const element = left1[index];
    element.addEventListener('mouseenter', function () {
        element.style.backgroundColor = 'red';
        element.innerHTML = 'Saya Ganteng?';
    })
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor = 'blue';
        element.innerHTML = "left1";
    })
}


for (let index = 0; index < left2.length; index++) {
    const element = left2[index];
    element.addEventListener('mouseenter', function () {
        element.style.backgroundColor = 'red';
        element.innerHTML = 'Tentu Saja';
    })
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor = 'blue';
        element.innerHTML = "left2";
    })
}


for (let index = 0; index < left3.length; index++) {
    const element = left3[index];
    element.addEventListener('mouseenter', function () {
        element.style.backgroundColor = 'red';
        element.innerHTML = 'Adu Sini';
    })
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor = 'blue';
        element.innerHTML = "left3";
    })
}


for (let index = 0; index < center1.length; index++) {
    const y = center1[index];
    y.addEventListener('mouseenter', function () {
        y.style.backgroundColor = 'salmon';
        y.innerHTML = 'Saya Jomblo?';
    })
    y.addEventListener('mouseleave', function () {
        y.style.backgroundColor = 'rgb(81, 81, 184)';
        y.innerHTML = "Center1";
    })
}


for (let index = 0; index < center2.length; index++) {
    const y = center2[index];
    y.addEventListener('mouseenter', function () {
        y.style.backgroundColor = 'salmon';
        y.innerHTML = 'Tentu Saja';
    })
    y.addEventListener('mouseleave', function () {
        y.style.backgroundColor = 'rgb(81, 81, 184)';
        y.innerHTML = "Center2";
    })
}


for (let index = 0; index < center3.length; index++) {
    const y = center3[index];
    y.addEventListener('mouseenter', function () {
        y.style.backgroundColor = 'salmon';
        y.innerHTML = 'Bantu Cari Pacar Bang';
    })
    y.addEventListener('mouseleave', function () {
        y.style.backgroundColor = 'rgb(81, 81, 184)';
        y.innerHTML = "Center3";
    })
}


for (let index = 0; index < right1.length; index++) {
    const z = right1[index];
    z.addEventListener('mouseenter', function () {
        z.style.backgroundColor = 'salmon';
        z.innerHTML = 'Pinjam Dulu Seratus';
    })
    z.addEventListener('mouseleave', function () {
        z.style.backgroundColor = 'rgb(81, 81, 184)';
        z.innerHTML = "Right1";
    })
}


for (let index = 0; index < right2.length; index++) {
    const z = right2[index];
    z.addEventListener('mouseenter', function () {
        z.style.backgroundColor = 'salmon';
        z.innerHTML = 'Bulan Depan Saya Ganti';
    })
    z.addEventListener('mouseleave', function () {
        z.style.backgroundColor = 'rgb(81, 81, 184)';
        z.innerHTML = "Right2";
    })
}
