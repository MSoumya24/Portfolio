var docheight = window.innerHeight;
var docwidth = window.innerWidth;
var imgCntnr = document.getElementById('img-carousel');
var imgIndex = 0;
n = 1;
leftClickIndex = 0;
function getImages() {
    for(var i=0;i<arr.length;i++) {
        var createImg = document.createElement('img');
        createImg.src = "." + arr[i].image_path + "/" + arr[i].img_name;
        createImg.className += "child-imgs";
        imgCntnr.appendChild(createImg);
        createImg.style.height = docheight + "px";
        elems = document.querySelectorAll('img');
        imgCntnr.style.width = docwidth*(arr.length)+'px';
        imgCntnr.style.height = docheight*(arr.length)+'px';
    }
    for(imgWidth=0;imgWidth<arr.length;imgWidth++){
        elems[imgWidth].style.width = docwidth+'px';
    }
}
getImages();
function leftClick() {
    if(imgIndex == 0){
        imgIndex = arr.length - 1;
        document.querySelectorAll('img')[imgIndex].style.removeProperty('right');
        elems[imgIndex].style.right = docwidth * imgIndex + "px";
    } else if(imgIndex > 0){
        document.querySelectorAll('img')[imgIndex].style.removeProperty('right');
        imgIndex--;
        elems[imgIndex].style.right = (docwidth * (imgIndex+1)) - docwidth + "px";
    }
}
/*id = setInterval(rightClick, 2000);*/
function rightClick() {
        if(n < arr.length){
            setInterval(function(){
                elems[imgIndex + 1].style.right = (docwidth * n) + "px";
                imgIndex++;
                n++;
            },4000);
        }
        else{
            count = 0;
            while(count <= n){
                document.querySelectorAll('img')[imgIndex].style.removeProperty('right');
                imgIndex--;
                n--;
                count++;
            }
        }
}


// ************ Self Invoking Function Starts **************//

(function () {
    for(var j=0; j < portfolioList.length; j++){
        var getactionItemCntnr = document.getElementById('portfolio-actions');
        var createList = document.createElement('li');
        createList.innerHTML = '<a class="portfolioActionItem">' + portfolioList[j].actionItem + '</a>';
        getactionItemCntnr.appendChild(createList);
    }
}) ();

// ************ Self Invoking Function Ends **************//



