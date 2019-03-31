// Полифил forEach для IE 
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


let icon = document.querySelectorAll('.icon1'),
    hideIconText = document.querySelectorAll('.hideIconText'),
    btnCheck = document.querySelector('#check'),
    inpHide = document.querySelector(".inpHide"),
    inpDom = document.querySelector('#inpDom'),
    domenFree = document.querySelector('#domenFree'),
    radioBtn1 = document.querySelectorAll('.radioBtn1'),
    radioBtn2 = document.querySelectorAll('.radioBtn2'),
    radioBtn3 = document.querySelectorAll('.radioBtn3'),
    arrowDown = document.querySelector('.arrowDown');

// Перемещение по странице при нажатии radi кнопок
radioBtn1.forEach(function(value){
    value.addEventListener('click', function(event){
        event.preventDefault();
        // console.log(event.target);
        window.location.href = "#first";
    });
});
radioBtn2.forEach(function(value){
    value.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "#second";
    });
});
radioBtn3.forEach(function(value){
    value.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = "#third";
    });
});

// Перемещение вниз при нажатии arrow 
arrowDown.addEventListener('click', function(){
    window.location.href = "#second";
});


//Проверка домена
btnCheck.addEventListener('click', function(e){
    e.preventDefault();
    if(inpDom.value){
        domenFree.textContent = inpDom.value;
        inpHide.classList.add('inpShow');
    } 
});

// Отобразить/скрыть текст под иконками приемуществ
function hide() {
    for(let i = 0; i < hideIconText.length; i++) {
        hideIconText[i].classList.remove('show');
        hideIconText[i].classList.add('hide');
    }
}

function show(b) {
    if(hideIconText[b].classList.contains('hide')) {
        hideIconText[b].classList.remove('hide');
        hideIconText[b].classList.add('show');      
    }
}

icon.forEach(function(value){
    value.addEventListener('click', function(){
        let ico = this;
        let classItem = this.classList[0];
        for(i = 0; i < hideIconText.length; i++){
            if(hideIconText[i].classList.contains(classItem)){
                if(hideIconText[i].classList.contains('hide')){
                    for(j=0; j<icon.length; j++){
                        icon[j].classList.remove('transform');
                    }
                    ico.classList.add('transform');
                    hide();
                    show(i);
                } else {
                    hide();
                    ico.classList.remove('transform');
                }

            }
        }
    });
});


