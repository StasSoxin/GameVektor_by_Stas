function openbox(){
    let display = document.getElementById("cat-div-1").style.display;

    if(display==='none'){
        document.getElementById("cat-div-1").style.display='flex';
        document.getElementById("cat-div-2").style.display='flex';
        document.getElementById("cat-div-3").style.display='flex';
        document.getElementById("cat-div-4").style.display='flex';
        document.getElementById("cat-div-5").style.display='flex';
        document.getElementById("cat-div-clear").innerHTML='Clear&nbsp;all';
    }else{
        document.getElementById("cat-div-1").style.display='none';
        document.getElementById("cat-div-2").style.display='none';
        document.getElementById("cat-div-3").style.display='none';
        document.getElementById("cat-div-4").style.display='none';
        document.getElementById("cat-div-5").style.display='none';
        document.getElementById("cat-div-clear").innerHTML='Show&nbsp;all';
    }
}

function viewDiv1(){
    document.getElementById("cat-div-1").style.display = "flex";
}

function  viewDiv2(){
    document.getElementById("cat-div-2").style.display = "flex";
}

function  viewDiv3(){
    document.getElementById("cat-div-3").style.display = "flex";
}

function  viewDiv4(){
    document.getElementById("cat-div-4").style.display = "flex";
}

function  viewDiv5(){
    document.getElementById("cat-div-5").style.display = "flex";
}

function  viewDivClear(){
    document.getElementById("cat-div-clear").style.display = "flex";
}

function  viewAll(){
    document.getElementById("cat-div-1").style.display = "flex";
    document.getElementById("cat-div-2").style.display = "flex";
    document.getElementById("cat-div-3").style.display = "flex";
    document.getElementById("cat-div-4").style.display = "flex";
    document.getElementById("cat-div-5").style.display = "flex";
    document.getElementById("cat-div-clear").style.display = "flex";
}


let num = 1;

function addQuestion() {
    let newdiv = document.createElement("div");
    newdiv.className = "card";
    newdiv.innerHTML = "<div class=\"card-main\">\n" +
        "                    <a href=\"#\" class=\"card-link\">\n" +
        "                        <img src=\"images/empty.svg\" class=\"card-img\" alt=\"\">\n" +
        "                        <div class=\"card-information\">\n" +
        "                            <div class=\"new-card-category\">\n" +
        "                                <span class=\"category-name-1\"><span class=\"dot\">&#149;</span> Genre</span>\n" +
        "                            </div>\n" +
        "                            <h3 class=\"card-title\">Name of your game</h3>\n" +
        "                            <div class=\"card-rate\">\n" +
        "                                <img src=\"images/star-empty.png\" class=\"star\" alt=\"\">\n" +
        "                                <img src=\"images/star-empty.png\" class=\"star\" alt=\"\">\n" +
        "                                <img src=\"images/star-empty.png\" class=\"star\" alt=\"\">\n" +
        "                                <img src=\"images/star-empty.png\" class=\"star\" alt=\"\">\n" +
        "                                <img src=\"images/star-empty.png\" class=\"star\" alt=\"\">\n" +
        "                                <span class=\"star-number\">0</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"card-description\">\n" +
        "                                <span>Description</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </a>\n" +
        "                </div>\n" +
        "                <a href=\"#\" class=\"card-link\">\n" +
        "                    <div class=\"card-price\">\n" +
        "                        <div class=\"price\">\n" +
        "                            <span class=\"actual-price\">Price</span>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </a>\n" +
        "            </div>";
    //newdiv.appendTo('div#quest');
    document.getElementById("parentId").appendChild(newdiv);
    return false;
}

let btnClear = document.getElementById('cat-div-clear');
let form = document.getElementById('all-cats');

let catFunction = function () {
    btnClear.addEventListener('click', function () {
        form.reset();
    });
}