let cube = document.getElementById("cube");
let pointsCount = 25;

for (let i = 0; i < pointsCount; i++) {
    let cubePoints = document.createElement("div");
    cubePoints.className = "cube-point"
    cube.appendChild(cubePoints);
}

let points = document.getElementsByClassName("cube-point");
let space = 24;
let topPoint = 0;
let leftPoint = 0;

for (let i = 0; i < points.length; i++) {
    if (i <= 4) {
        points[i].style.top = topPoint + 'px';
        points[i].style.left = leftPoint + 'px';
        leftPoint += space;
        (leftPoint === 120) ? (leftPoint = 0, topPoint += space) : leftPoint;
    } else if (i <= 9) {
        points[i].style.top = topPoint + 'px';
        points[i].style.left = leftPoint + 'px';
        leftPoint += space;
        (leftPoint === 120) ? (leftPoint = 0, topPoint += space) : leftPoint;
    } else if (i <= 14) {
        points[i].style.top = topPoint + 'px';
        points[i].style.left = leftPoint + 'px';
        leftPoint += space;
        (leftPoint === 120) ? (leftPoint = 0, topPoint += space) : leftPoint;
    } else if (i <= 19) {
        points[i].style.top = topPoint + 'px';
        points[i].style.left = leftPoint + 'px';
        leftPoint += space;
        (leftPoint === 120) ? (leftPoint = 0, topPoint += space) : leftPoint;
    } else if (i <= 24) {
        points[i].style.top = topPoint + 'px';
        points[i].style.left = leftPoint + 'px';
        leftPoint += space;
        (leftPoint === 120) ? (leftPoint = 0, topPoint += space) : leftPoint;
    }

    if (i % 7 === 0) {
        points[i].style.backgroundColor = "#F7DC6F";
    } else if (i % 7 === 1) {
        points[i].style.backgroundColor = "#3498DB";
    }
    else if (i % 7 === 2) {
        points[i].style.backgroundColor = "#D35400";
    }
    else if (i % 7 === 3) {
        points[i].style.backgroundColor = "#E74C3C";
    }
    else if (i % 7 === 4) {
        points[i].style.backgroundColor = "#2ECC71";
    }
    else if (i % 7 === 5) {
        points[i].style.backgroundColor = "#8E44AD";
    }
    else if (i % 7 === 6) {
        points[i].style.backgroundColor = "#EC7063";
    }
}

let cubeLeft;
let cubeTop;
let x = window.innerWidth - 200;
let y = window.innerHeight - 200;

setInterval(() => {
    cubeTop = Math.floor(Math.random() * y) + 1;
    cubeLeft = Math.floor(Math.random() * x) + 1;
    cube.style.top = cubeTop + 'px';
    cube.style.left = cubeLeft + 'px';
}, 10000);

setInterval(() => {
    let size = Math.floor(Math.random() * 50);
    let timer = Math.floor(Math.random() * pointsCount);
    points[timer].style.width = size + "px";
    points[timer].style.height =  size + "px";
    points[timer].style.marginLeft = -(size/2 - 4) + "px";
    points[timer].style.marginTop = -(size/2 - 4) + "px";
    setTimeout(() => {
        points[timer].style.width = "4px";
        points[timer].style.height = "4px";
        points[timer].style.marginLeft = "0px";
        points[timer].style.marginTop = "0px";
    }, 1000);
}, 5000);

setInterval(() => {
    let size = Math.floor(Math.random() * 50);
    let timer = Math.floor(Math.random() * pointsCount);
    points[timer].style.width =  size + "px";
    points[timer].style.height =  size + "px";
    points[timer].style.marginLeft = -(size/2 - 4) + "px";
    points[timer].style.marginTop = -(size/2 - 4) + "px";
    setTimeout(() => {
        points[timer].style.width = "4px";
        points[timer].style.height = "4px";
        points[timer].style.marginLeft = "0px";
        points[timer].style.marginTop = "0px";
    }, 1000);
}, 3000);

setInterval(() => {
    let size = Math.floor(Math.random() * 50);
    let timer = Math.floor(Math.random() * pointsCount);
    points[timer].style.width =  size + "px";
    points[timer].style.height =  size + "px";
    points[timer].style.marginLeft = -(size/2 - 4) + "px";
    points[timer].style.marginTop = -(size/2 - 4) + "px";
    setTimeout(() => {
        points[timer].style.width = "4px";
        points[timer].style.height = "4px";
        points[timer].style.marginLeft = "0px";
        points[timer].style.marginTop = "0px";
    }, 1000);
}, 7000);