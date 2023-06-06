// 모바일 pc 구분 스크립트, 출처 https://pjw48.net/wordpress/2017/02/11/mobilecheck-js/
function isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobile()) {
    document.querySelector('.cursor').style.display = 'none';
} else {
    // 모바일이 아니면 실행될 코드 들어가는 곳
    document.body.classList.add('no-cursor');
    document.body.style.cursor = 'none';
    /* 모바일에서 무한 로딩되는 현상보여 주석처리
    window.onresize = function(){
        document.location.reload();
    }
    */
}

// 인트로
document.documentElement.style.overflow = 'hidden';
var progressValue = 0;
var progress = setInterval(() => {
    document.querySelector('.loading-progress span').style.width = progressValue + '%'; 
    progressValue++;
    if(progressValue >= 101){
        clearInterval(progress);
        document.documentElement.style.overflow = 'initial';
        document.querySelector('.loading-intro').classList.add('loading');
    }
}, 40);

const rightFix = document.querySelector('.right-fix');
const cursor = document.querySelector('.cursor');
var enterElement = document.querySelectorAll('.section_move li, .heading-b, a, .section03 .content-column ul li');
function cursorMove(){
    for(var i=0; i<enterElement.length; i++){
        enterElement[i].addEventListener('mouseover', function(){
            cursor.classList.add('scale');
        });
        enterElement[i].addEventListener('mouseleave', function(){
            cursor.classList.remove('scale');
        });
    }
    rightFix.addEventListener('mouseover', function(){
        cursor.classList.add('background');
    }); 
    rightFix.addEventListener('mouseleave', function(){
        cursor.classList.remove('background');
    });
}
if(!isMobile()){cursorMove();}

// 메뉴 클릭 시 해당 섹션으로 이동, 출처 https://velog.io/@gamangee/JS-%ED%81%B4%EB%A6%AD%EC%9C%BC%EB%A1%9C-%EC%9B%90%ED%95%98%EB%8A%94-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0
const sectionMove = document.querySelector('.section_move');
sectionMove.addEventListener('click', (e) => {
    const target = e.target;
    const menuKey = target.dataset.key;
    if (menuKey == null) {
        return;
    }
    const scrollMenu = document.querySelector(menuKey);
    scrollMenu.scrollIntoView({ behavior: 'smooth' });
});

// career, skils 클릭 시
const headline = document.querySelectorAll('.heading-b');
const history = document.querySelectorAll('.history_con');
const exposuer_arrow = document.querySelectorAll('.open-fold-toggle-arrow');
for(var i=0; i<headline.length; i++){
    headline[i].addEventListener('click', function(){
        var this_headline = this;
        for(var i=0; i<headline.length; i++){
            if(this_headline != headline[i]){
                history[i].classList.remove('exposuer');
                exposuer_arrow[i].classList.remove('exposuer');
            }else if(this_headline.classList.contains('exposuer')){
                history[i].classList.remove('exposuer');
                exposuer_arrow[i].classList.remove('exposuer');
            }else{
                history[i].classList.toggle('exposuer');
                exposuer_arrow[i].classList.toggle('exposuer');
            }
        }
    });
}

const contentColumn_li = document.querySelectorAll('.section03 .content-column > ul > li');
const contentColumn_headLine = document.querySelectorAll('.section03 .headline p');
function workImgCreate(){
    for(var i=0; i<contentColumn_li.length; i++){
        var contentColumn_div = document.createElement('div');
        contentColumn_div.setAttribute('class', 'work-img');
        contentColumn_li[i].append(contentColumn_div);
    
        const workImg = document.querySelectorAll('.work-img');
        workImg[i].style.backgroundImage = `url('./img/move-img0${i + 1}.png')`;    
    
        // 마우스 오버 시 이미지 노출
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
    }
}
if(!isMobile()){workImgCreate();}

window.addEventListener('mousemove', function(e){
    // 커서 움직임에 맞춰 이미지 이동되도록
    if(!isMobile()){
        var posX = e.clientX / 120;
        var posY = e.clientY / 120;
        const workImg = document.querySelectorAll('.work-img');
        for(var i=0; i<workImg.length; i++){
            if(991 > window.innerWidth){
                workImg[i].style.transform = `translate3d(${e.clientX / 60}vw, ${e.clientY / 60}vw, 0)`;
            }else{
                workImg[i].style.transform = `translate3d(${posX}vw, ${posY}vw, 0)`;
            }
        }
        cursor.style.transform = `matrix(1, 0, 0, 1, ${e.clientX}, ${e.clientY})`;
    }
});

window.addEventListener('scroll', function(){
    // 스크롤 시 텍스트 좌 우 이동 애니메이션
    const RLScroll_section = document.querySelectorAll('.txt-scroll-section');
    const RLScroll_txt = document.querySelectorAll('.rl-scroll');
    var RLScrollValue = window.pageYOffset / document.querySelector('.section01 .intro-txt-wrap').offsetTop;
    for(var i=0; i<RLScroll_section.length; i++){
        for(var j=0; j<RLScroll_txt.length; j++){
            if(window.pageYOffset >= RLScroll_section[i].offsetTop * 1.3){
                if(!isMobile()){
                    if(j % 2 == 0){
                        RLScroll_txt[j].style.transform = `translate3d(${RLScrollValue}vw, 0, 0)`
                    }else if(j % 2 == 1){
                        RLScroll_txt[j].style.transform = `translate3d(${-RLScrollValue}vw, 0, 0)`
                    }
                }else{
                    if(j % 2 == 0){
                        RLScroll_txt[j].style.transform = `translate3d(${RLScrollValue * 3}vw, 0, 0)`
                    }else if(j % 2 == 1){
                        RLScroll_txt[j].style.transform = `translate3d(${-RLScrollValue * 3}vw, 0, 0)`
                    }
                }
            }
        }
    }
    
    // 스크롤 시 첫 번째 섹션 y값 조정
    const firstSection = document.querySelector('.section01-inner');
    const firstIntro = document.querySelector('.section01 .intro-txt-wrap');
    const firstTxt = document.querySelector('.section01 .m-txt-wrap');
    var yValue = window.pageYOffset * 10 / firstIntro.offsetTop;
    if(!isMobile()){
        if(991 > window.innerWidth){
            firstSection.style.transform = `translate3d(0, ${window.pageYOffset / 10}vw, 0)`;
        }else{
            firstSection.style.transform = `translate3d(0, ${yValue}vw, 0)`;
        }
    }else{
        firstSection.style.transform = `translate3d(0, ${yValue * 3}vw, 0)`;
    }

    // 스크롤 시 텍스트 opacity 조정
    var opacityValue = 0.7 + (window.pageYOffset / document.documentElement.scrollHeight);
    for(var i=0; i<contentColumn_li.length; i++){
        contentColumn_headLine[i].style.opacity = '0.3';
        // 스크롤이 화면 중앙 지점일 때의 기준으로
        if(contentColumn_headLine[i].getBoundingClientRect().top < window.innerHeight / 2){
            contentColumn_headLine[i].style.opacity = opacityValue;
            if(opacityValue >= 1){
                contentColumn_headLine[i].style.opacity = '1';
            }
        }else{
            contentColumn_headLine[i].style.opacity = '0.3';
        }
    }

    const section04 = document.querySelector('.section04');
    const bgCircle = document.querySelector('.bg-circle');
    const stickyWrap = document.querySelector('.section04 .intro-txt-wrap');
    bgCircle.style.width = 10 + 'vmax';
    bgCircle.style.height = 10 + 'vmax';
    stickyWrap.style.transform = `translate3d(${100}vw, 0, 0)`;
    
    if(window.scrollY >= section04.offsetTop){
        if(!isMobile()){
            if(991 >= window.innerWidth){
                bgCircle.style.width = (document.documentElement.scrollHeight + window.pageYOffset) / document.querySelector('.at-header').scrollHeight + 'vmax';
                bgCircle.style.height = (document.documentElement.scrollHeight + window.pageYOffset) / document.querySelector('.at-header').scrollHeight + 'vmax';
                var sticky = 96;
                sticky -= (window.pageYOffset / document.querySelector('.at-header').scrollHeight) * 1.5;
                if(0 >= sticky){
                    stickyWrap.style.transform = `translate3d(0, 0, 0)`;
                }else{
                    stickyWrap.style.transform = `translate3d(${sticky}vw, 0, 0)`;
                }
            }else{
                var circleValue = (window.pageYOffset / rightFix.offsetWidth) * 2;
                var sticky = 100;
                sticky -= (window.pageYOffset / rightFix.offsetWidth) * 1.7;
                bgCircle.style.width = circleValue + 'vmax';
                bgCircle.style.height = circleValue + 'vmax';
                if(0 >= sticky){
                    stickyWrap.style.transform = `translate3d(0, 0, 0)`;
                }else{
                    stickyWrap.style.transform = `translate3d(${sticky}vw, 0, 0)`;
                }
            }
        }else{
            bgCircle.style.width = window.scrollY / 20 + 'vmax';
            bgCircle.style.height = window.scrollY / 20 + 'vmax';
            var mSticky = 30;
            mSticky -= window.pageYOffset / document.querySelector('.at-header').scrollHeight;
            if(0 >= mSticky){
                stickyWrap.style.transform = `translate3d(0, 0, 0)`;
            }else{
                stickyWrap.style.transform = `translate3d(${mSticky}vw, 0, 0)`;
            }
        }
    }
});

window.addEventListener('wheel', function(e){
    const header = document.querySelector('.at-header');
    if(e.deltaY > 0){
        header.style.top = -header.offsetHeight + 'px';
    }else{
        header.style.top = 0;
    }
});

// IntersectionObserver API, 출처 https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const $target = entry.target;
        const rightMenu = document.querySelectorAll('.step_p span');
        for(var i=0; i<rightMenu.length; i++){
            if(entry.isIntersecting){ // 화면에 보일 경우
                rightMenu[i].innerHTML = $target.dataset.menu;
            }
        }
    });
});
// 각 섹션에 대한 옵저버 시작
const $item = document.querySelectorAll('.section');
$item.forEach(item => {
    io.observe(item);
});