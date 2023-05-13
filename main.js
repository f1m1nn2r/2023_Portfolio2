// 부드러운 스크롤 효과, 출처 https://creativestudio.kr/2113
// 휠 이벤트와 겹쳐져 작동 불가한 현상으로 사용 안 함
/*$("html").easeScroll();
$("html").easeScroll({
    frameRate: 60,
    animationTime: 100,
    stepSize: 100,
    pulseAlgorithm: !0,
    pulseScale: 15,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
});
*/

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

    // 클릭 시 특정 위치로 이동
    contentColumn_li[i].addEventListener('click', function(){
        const link = document.querySelector('.sub_link');
        var linkLocation = window.pageYOffset + link.getBoundingClientRect().top;
        window.scrollTo({
            top:linkLocation,
            behavior:'smooth',
        })
    });
}

// career, skils 클릭 시
const headline = document.querySelectorAll('.heading-b');
const history = document.querySelectorAll('.history_con');
const exposuer_arrow = document.querySelectorAll('.open-fold-toggle-arrow');
for (var i=0; i<headline.length; i++){
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
                history[i].classList.add('exposuer');
                exposuer_arrow[i].classList.add('exposuer');
            }
        }
    });
}

const cursor = document.querySelector('.cursor');
var enterElement = document.querySelectorAll('.section_move li, .heading-b, a');
for(var i=0; i<enterElement.length; i++){
    enterElement[i].addEventListener('mouseover', function(){
        cursor.classList.add('scale');
    });
    enterElement[i].addEventListener('mouseleave', function(){
        cursor.classList.remove('scale');
    });
}
document.querySelector('.right-fix').addEventListener('mouseover', function(){
    cursor.classList.add('background');
});
document.querySelector('.right-fix').addEventListener('mouseleave', function(){
    cursor.classList.remove('background');
});

window.addEventListener('mousemove', function(e){
    // 커서 움직임에 맞춰 이미지 이동되도록
    var posX = e.clientX / 120;
    var posY = e.clientY / 120;
    const workImg = document.querySelectorAll('.work-img');
    for(var i=0; i<workImg.length; i++){
        workImg[i].style.transform = `translate3d(${posX}vw, ${posY}vw, 0)`;
    }

    // 커서 움직임
    cursor.style.transform = `matrix(1, 0, 0, 1, ${e.clientX}, ${e.clientY})`;
});

window.addEventListener('scroll', function(){
    // 스크롤 시 첫 번째 섹션 y값 조정
    const firstSection = document.querySelector('.section01-inner');
    const firstIntro = document.querySelector('.section01 .intro-txt-wrap');
    const firstTxt = document.querySelector('.section01 .m-txt-wrap');
    var yValue = window.pageYOffset * 8 / firstIntro.offsetTop;
    firstSection.style.transform = `translate3d(0, ${yValue}vw, 0)`;

    // 스크롤 시 텍스트 opacity 조정
    var opacityValue = 0.7 + (window.scrollY || window.pageYOffset / document.documentElement.scrollHeight);
    for(var i=0; i<contentColumn_li.length; i++){
        contentColumn_li[i].firstChild.style.opacity = '0.3';
        // 스크롤이 화면 중앙 지점일 때의 기준
        if(contentColumn_li[i].getBoundingClientRect().top < window.innerHeight / 2){
            contentColumn_li[i].firstChild.style.opacity = opacityValue;
            if(opacityValue >= 1){
                contentColumn_li[i].firstChild.style.opacity = '1';
            }
        }else{
            contentColumn_li[i].firstChild.style.opacity = '0.3';
        }
    }

    // 스크롤 시 텍스트 좌 우 이동 애니메이션
    const RLScroll_section = document.querySelectorAll('.txt-scroll-section');
    const RLScroll_txt = document.querySelectorAll('.rl-scroll');
    var RLScrollValue = window.pageYOffset / document.querySelector('.section01 .intro-txt-wrap').offsetTop;
    for(var i=0; i<RLScroll_section.length; i++){
        for(var j=0; j<RLScroll_txt.length; j++){
            if(window.scrollY || window.pageYOffset >= RLScroll_section[i].offsetTop * 1.3){
                if(j % 2 == 0){
                    RLScroll_txt[j].style.transform = `translate3d(${RLScrollValue}vw, 0, 0)`
                }else if(j % 2 == 1){
                    RLScroll_txt[j].style.transform = `translate3d(${-RLScrollValue}vw, 0, 0)`
                }
            }
        }
    }
    /*
    const right_fix_p = document.querySelectorAll('.step_p');
    const right_fix_span = document.querySelectorAll('.step_p .step_span');
    for(var i=0; i<RLScroll_section.length; i++){
        for(var j=0; j<right_fix_span.length; j++){
            var stepValue = right_fix_span[i].scrollHeight;
            right_fix_p[i].style.width = right_fix_span[i].scrollWidth + 'px'
            right_fix_span[i].style.transform = `translate3d(${stepValue}px, 0, 0)`;
            if(window.scrollY >= RLScroll_section[i].offsetTop){
                right_fix_span[i].style.transform = `translate3d(${-stepValue}px, 0, 0)`
            }else{
                right_fix_span[i].style.transform = `translate3d(0, 0, 0)`
            }
        }
    }
    */
});

// 마우스휠 이벤트
window.addEventListener('wheel', function(e){
    const header = document.querySelector('.at-header');
    if(e.deltaY > 0){
        header.style.top = -header.offsetHeight + 'px';
    }else{
        header.style.top = 0;
    }
});