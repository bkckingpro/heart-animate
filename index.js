let bodyEl = document.querySelector("body");

function createEl(e) {
            let spanEl = document.createElement('span');
            let posX = e.offsetX;
            let posY = e.offsetY;
            spanEl.style.left = posX + 'px';
            spanEl.style.top = posY + 'px';
            let size = Math.random()*100;
            spanEl.style.width = size + 'px';
            spanEl.style.height = size + 'px';
            bodyEl.appendChild(spanEl);
            setTimeout(() => {
                bodyEl.removeChild(spanEl);
            }, 3000);
}

bodyEl.addEventListener('mousemove',(e)=>{
    createEl(e)
});

bodyEl.addEventListener("touchstart", (e)=>{
    ;[...e.changedTouches].forEach(Touch => {
        let spanEl = document.createElement('span');
            let posX = Touch.pageX;
            let posY = Touch.pageY;
            spanEl.style.left = posX + 'px';
            spanEl.style.top = posY + 'px';
            let size = Math.random()*70;
            spanEl.style.width = size + 'px';
            spanEl.style.height = size + 'px';
            spanEl.id = Touch.identifier;
            bodyEl.appendChild(spanEl);
            setTimeout(() => {
                bodyEl.removeChild(spanEl);
            }, 3000);
    });
    
});
bodyEl.addEventListener("touchmove", (e)=>{
    ;[...e.changedTouches].forEach(Touch => {
        let spanEl = document.createElement('span');
            let posX = Touch.pageX;
            let posY = Touch.pageY;
            spanEl.style.left = posX + 'px';
            spanEl.style.top = posY + 'px';
            let size = Math.random()*70;
            spanEl.style.width = size + 'px';
            spanEl.style.height = size + 'px';
            spanEl.id = Touch.identifier;
            bodyEl.appendChild(spanEl);
            setTimeout(() => {
                bodyEl.removeChild(spanEl);
            }, 3000);
    });
    
});


// bodyEl.addEventListener("touchend", (e)=>{
//     let spanEl = document.createElement('span');
//             let posX = e.offsetX;
//             let posY = e.offsetY;
//             spanEl.style.left = posX + 'px';
//             spanEl.style.top = posY + 'px';
//             let size = Math.random()*100;
//             spanEl.style.width = size + 'px';
//             spanEl.style.height = size + 'px';
//             bodyEl.appendChild(spanEl);
//             setTimeout(() => {
//                 bodyEl.removeChild(spanEl);
//             }, 1000);
// });


     