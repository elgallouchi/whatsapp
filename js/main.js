


var content = document.getElementById('content'),

    button = document.getElementById('button'),

    ul = document.createElement('ul'),

    messages = document.getElementById('message');

    var nombreDeMessage = 1;

    content.appendChild(ul);

    ul.setAttribute('id', 'ulListDom');



var storage = localStorage.getItem("arrayList");

for(var i = 0; i < storage.length; i++) {
    console.log(storage[i]);
}


    // declaration de l'heure
    var myDate = new Date(),

        hours = myDate.getHours(),

        minutes = myDate.getMinutes(),

        inputValue = document.getElementById('input').value;

        var arrayList = [];
// start function 
button.onclick = function (){

    var li = document.createElement('li'),

        p = document.createElement('p'),

        span = document.createElement('span'),

        i = document.createElement('i'),

        img = document.createElement('img');

        img.setAttribute('src', 'double-tick.png');

        if(hours < 10) {

            hours = '0' + hours;

        };

        if(minutes < 10) {

            minutes = '0' + minutes;

        };

    if(inputValue == '' || inputValue == '  ' || inputValue == '   ' || inputValue == '    ') {

    } else {

        ul.appendChild(li).appendChild(p);

        li.appendChild(span);

        span.appendChild(img);

        span.appendChild(i);

        i.textContent = hours + ':' + minutes;

        p.textContent = inputValue;

        content.scrollTop = content.scrollHeight;

        
        messages.textContent = nombreDeMessage ++;

        arrayList.push(p.textContent);

        localStorage.setItem("arrayList", arrayList);

    }
    for(var i = 0; i < arrayList.length; i++) {
        console.log(arrayList[i]);
    }

}