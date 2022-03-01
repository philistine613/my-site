const cont = document.querySelector('#btns')
const pics = document.querySelectorAll('.pic');
const frame = document.querySelector('#popFrame')
const popInfo = document.querySelector('#popInfo')

const picSvg = document.querySelectorAll('svg')
let infoPanel = document.querySelector('#Info');
let objs = document.querySelectorAll('g')
let title_Info = document.createElement('h2');
let text_Info = document.createElement('p');
let cls_btn = document.createElement('button')
let btn_text = document.createTextNode('закрыть')
cls_btn.className = "btn btn-primary";
cls_btn.appendChild(btn_text)

cont.addEventListener('click', function (event) {
    let wButton = event.target.closest('button')
    for (let pic of pics){
        pic.style.opacity = "0";
        pic.style.pointerEvents = "none";
        infoPanel.style.display = "none";
        title_Info.innerHTML = "";
        text_Info.innerHTML = "";
        if(pic.id == wButton.innerHTML){
            pic.style.opacity = "100%";
            pic.style.pointerEvents = "auto";
        }
    }
});

frame.addEventListener('click', function (event) {
    let obj = event.target.parentNode;
    if (event.target.nodeName == "path") {
        for (let i=0; i<objs.length; i++){
            objs[i].classList.remove("active");
        }
        obj.classList.add("active")
        let test_title = obj.querySelector("title").innerHTML,
        test_text = obj.querySelector("desc").textContent;
//        console.log(test_text);
//        console.log(test_title);

        title_Info.innerHTML = "";
        text_Info.innerHTML = "";
        infoPanel.style.display = "block";
        title_Info.insertAdjacentText('afterbegin', test_title)
        text_Info.insertAdjacentText('afterbegin', test_text)
        infoPanel.appendChild(title_Info);
        infoPanel.appendChild(text_Info);
        infoPanel.appendChild(cls_btn);
    }
});

cls_btn.addEventListener('click', function(){
    infoPanel.style.display = "none";
    infoPanel.removeChild(infoPanel.lastChild);
})