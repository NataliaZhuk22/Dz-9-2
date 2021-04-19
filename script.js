let div = document.createElement('div');
div.innerHTML = 0;

let buttonCounter = document.createElement('button');
buttonCounter.innerHTML = 'Счетчик';

let buttonChangeBg = document.createElement('button');
buttonChangeBg.innerHTML = 'Изменить цвет фона';

let buttonDecreaseFont = document.createElement('button');
buttonDecreaseFont.innerHTML = 'Уменьшить размер шрифта';

let buttonIncreaseFont = document.createElement('button');
buttonIncreaseFont.innerHTML = 'Увеличить размер шрифта';

document.body.appendChild(div);
document.body.appendChild(buttonCounter);
document.body.appendChild(buttonChangeBg);
document.body.appendChild(buttonDecreaseFont);
document.body.appendChild(buttonIncreaseFont);

buttonCounter.addEventListener('click', function() {
    div.innerHTML ++;
});

buttonChangeBg.addEventListener('click', function() {
    
    switch (true) {
        case div.style.backgroundColor === '':
            div.style.backgroundColor = 'yellow';       
            break;
        case div.style.backgroundColor === 'yellow':
            div.style.backgroundColor = 'orange';       
            break;
        case div.style.backgroundColor === 'orange': 
            div.style.backgroundColor = '';       
            break;
        default: div.style.backgroundColor = '';       
    }
});

buttonIncreaseFont.addEventListener('click', function() {
    
  let fontSize = parseInt(window.getComputedStyle(div, null).getPropertyValue('font-size'));
  if(fontSize >= 9 && fontSize < 32) {
    fontSize++;
    div.style.fontSize = fontSize + 'px';
 } else fontSize += 0; div.style.fontSize = fontSize + 'px';   
});

buttonDecreaseFont.addEventListener('click', function() {
    let fontSize = parseInt(window.getComputedStyle(div, null).getPropertyValue('font-size'));
    if(fontSize > 9 && fontSize <= 32) {
        fontSize--;
        div.style.fontSize = fontSize + 'px';
    } else fontSize += 0; div.style.fontSize = fontSize + 'px';
});


