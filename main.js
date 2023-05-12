// 섹션01 라인 width 값 
var sc01_p = document.querySelectorAll('.bot-right p');
var lineDashed = document.querySelectorAll('.bot-right .line_dash'); 

for(var i=0; i<sc01_p.length; i++){
    var sc01_p_width = sc01_p[i].clientWidth;
    lineDashed[i].style.width = `calc(100% - ${sc01_p_width}px)`;
}