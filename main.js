/****** 섹션03 ******/ 
const contentColumn_li = document.querySelectorAll('.section03 .content-column ul li');
var contentColumn_img = new Array();
for(var i=0; i<contentColumn_li.length; i++){
    var contentColumn_div = document.createElement('div');
    contentColumn_div.setAttribute('class', 'work-img');
    contentColumn_li[i].append(contentColumn_div);

    const workImg = document.querySelectorAll('.work-img');
    workImg[i].style.backgroundImage = `url('./img/move-img0${i + 1}.png')`;

    // 마우스 오버 시 이미지 노출, li 인덱스에 따라 노출 여부 설정
    contentColumn_li[i].addEventListener('mouseover', function(){
        var this_li = this;
        for(var i=0; i<contentColumn_li.length; i++){
            if(this_li != contentColumn_li[i]){
                contentColumn_li[i].classList.remove('opacity');
            }else if(this_li.classList.contains('opacity')){
                contentColumn_li[i].classList.remove('opacity');
            }else{
                contentColumn_li[i].classList.add('opacity');
            }
        }
    });
    contentColumn_li[i].addEventListener('mouseout', function(){
        var this_li = this;
        for(var i=0; i<contentColumn_li.length; i++){
            if(this_li != contentColumn_li[i]){
                contentColumn_li[i].classList.remove('opacity');
            }else if(this_li.classList.contains('opacity')){
                contentColumn_li[i].classList.remove('opacity');
            }else{
                contentColumn_li[i].classList.add('opacity');
            }
        }
    });

    contentColumn_li[i].addEventListener('click', function(){
        const link = document.querySelector('.sub_link');
        var linkLocation = window.pageYOffset + link.getBoundingClientRect().top;
        window.scrollTo({
            top:linkLocation,
            behavior:'smooth',
        })
    });
}

window.addEventListener('mousemove', function(e){
    var posX = e.clientX / 50;
    var posY = e.clientY / 50;
    const workImg = document.querySelectorAll('.work-img');
    for(var i=0; i<workImg.length; i++){
        workImg[i].style.transform = `translate3d(${posX}vw, ${posY}vw, 0)`;
    }
});

// 스크롤 시 텍스트 opacity 조정
window.addEventListener('scroll', function(){
    var opacityValue = 0.7 + (window.scrollY / document.documentElement.scrollHeight);
    for(var i=0; i<contentColumn_li.length; i++){
        contentColumn_li[i].firstChild.style.opacity = '0.3';
        // 화면 스크롤이 중앙 지점에 도착할 때 기준
        if(contentColumn_li[i].getBoundingClientRect().top < window.innerHeight / 2){
            contentColumn_li[i].firstChild.style.opacity = opacityValue;
        }else{
            contentColumn_li[i].firstChild.style.opacity = '0.3';
        }
    }
});