let time = document.getElementsByTagName('time')
let list = document.getElementsByTagName('ul')
let li = document.createElement('li')

window.onload = function()
{
    let today = new Date();
    time[0].innerHTML = today.toLocaleTimeString()
    li = document.createElement('li')
    li.innerHTML = "Screen : " + screen.width + "*" + screen.height;
    list[0].append(li)
    li = document.createElement('li')
    li.innerHTML = "Window Outer : " + window.outerWidth + "*" + window.outerHeight;
    list[0].append(li)
    li = document.createElement('li')
    li.innerHTML = "Window Inner : " + window.innerWidth + "*" + window.innerHeight;
    list[0].append(li)
    li = document.createElement('li')
    li.innerHTML = "Document : " + document.body.scrollWidth + "*" + document.body.scrollHeight;
    list[0].append(li)
} 