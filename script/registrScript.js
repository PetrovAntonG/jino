
let fileInput = document.querySelector('#fileInput'),
    wait = document.querySelector('.wait'),
    loading = document.querySelector('.loading'),
    done = document.querySelector('.done'),
    upload = document.querySelector('.upload'),
    floatingCirclesG = document.querySelector('#floatingCirclesG'),
    waitOk = document.querySelector('.waitOk'),
    loadingOk = document.querySelector('.loadingOk'),
    clock = document.querySelector('.cssload-clock'),
    pWait = document.querySelector('.pWait'),
    pLoading = document.querySelector('.pLoading'),
    pDone = document.querySelector('.pDone'),
    checkFile = document.querySelector('.checkFile'),
    variant = document.querySelector('.variant'),
    clear = document.querySelector('.clear');

let count = Math.random();

// Выбор варианта работы программы
variant.addEventListener('change',function(event){
    // console.log(event.target.value);
    let variantValue = event.target.value;
    switch(variantValue){
        case "rand": count = Math.random();
        break;
        case "plus": count = 0.7;
        break;
        case "minus": count = 0.1;
        break;
    }
});

// Сброс
clear.addEventListener('click', function(){
    window.location.reload();
});

// Обработка загрузки файла
fileInput.addEventListener('change', function(){
    // console.log(count);
    if(done.style.display != "inherit"){
        if(fileInput.files[0]) {
            if(fileInput.files[0].size < 1048576){
            upload.textContent = "";
            wait.style.display = "inherit";
            pWait.textContent = `${fileInput.files[0].name}`;
            loadingFiles();
            } else{
                alert('Размер выбранного файла превышает 5МБ');
                fileInput.value = '';
            }
        } else{
            alert('Файл не выбран');
        }
    } else{
        alert('Файл уже загружен, для изменения данных обратитесь в службу поддержки');
        fileInput.value = '';
    }
});

// Имитация загрузки файла
function loadingFiles(){
        setTimeout(function(){
            loading.style.display = "inherit";
            pWait.textContent = `${fileInput.files[0].name} (${Math.round(fileInput.files[0].size/1024)}Кб)`;
            pLoading.textContent = `${fileInput.files[0].name} (${Math.round(fileInput.files[0].size/1024)}Кб)`;
            loadProc()
                .then(loadDone)
                .catch(loadCancel);
        },5000);
}


// Отобразить/скрыть элемент
function addOk(hide,show){
    hide.style.display = 'none';
    show.style.display = 'inherit';
}

// Имитация проверки файла
function loadProc(){
    addOk(floatingCirclesG,waitOk);
    return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(count > 0.5){
                    resolve();
                }else {
                    reject();
                }
            },5000);
        }); 
    }

// Успешное завершение загрузки
function loadDone(){
    addOk(clock,loadingOk);
    done.style.display = "inherit"; 
    checkFile.textContent = '';
    pDone.textContent = `${fileInput.files[0].name} (${Math.round(fileInput.files[0].size/1024)}Кб)`;
    fileInput.value = '';
} 

// Отрицательный результат загрузки
function loadCancel(){
    wait.style.display = "none";
    loading.style.display = "none"; 
    upload.textContent = "Отклонено";
    addOk(loadingOk,clock);
    addOk(waitOk,floatingCirclesG);
    fileInput.value = '';
}




