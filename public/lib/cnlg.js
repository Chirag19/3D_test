#header ,#ctx3d{
    font-family: "Microsoft JhengHei UI","Microsoft YaHei";
    height: 300px;
    width: 85%;
    margin: 0 auto;
    position: relative;
    background-size:100% ;
    background-color: rgb(123,123,123);
    border-radius: 8px;
}
canvas{
display:inline-block;
border-radius: 8px;
}
#catalogue img{
width:30px;
vertical-align:-12px;
}
.type{

}
.zfb{
width:100%;
border-radius:10px
}
#Header1_HeaderTitle {
    display: none;
}


#header #blogTitle {
    color: #fff;
    text-align: center;
}
#header #blogTitle .headermaintitle {
    color: #21292f;
    font-size: 28px;
}
#header #blogTitle h2 {
    font: 18px Georgia,"Times New Roman",Times,sans-serif;
}
#header::before {
    background-image: url("http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_tiwerwmg.jpg");
    background-size: 150%;
    background-position:-45px;
    border: 0 solid #fff;
    border-radius: 150px;
    box-shadow: 0 -1px 12px -4px #000;
    content: " ";
    display: block;
    height: 150px;
    margin-bottom: 20px;
    margin-left: 26%;
    position: relative;
    top:-50px;
    transform: translate3d(-50%, 50%, 0px);
    width: 150px;
}
#header #navigator {
    background-color: #fff;
    position: absolute;
z-index:999;
    top: -100%;
    left:26%;
    transition: top 0.5s cubic-bezier(0, 0.63, 0.32, 1.28) 0s;
    width: 80px;
}
#header #navigator::after {
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid #f8f8f8;
    content: " ";
    cursor: pointer;
    display: block;
    height: 0;
    left: 0;
    position: absolute;
    top: 100%;
    width: 0;
}
#header #navigator #navList {
    display: block;
    margin: 0;
    padding: 0;
}
#header #navigator #navList li {
    background-color: #f8f8f8;
    height: 49px;
    line-height: 49px;
    list-style: outside none none;
    margin-top: 1px;
    text-align: center;
    width: 100%;
}
#header #navigator #navList li a {
    color: #333;
    display: inline-block;
    font-family: "Microsoft YaHei";
    font-size: 11px;
}
#header #navigator #navList li:hover {
    background-color: #dee1e0;
}
#header #navigator #navList li:hover a {
    color: #7f9bc0;
}
#header #navigator #navList li:nth-child(2) {
    /* background-color: #fff; */
}
#header #navigator #navList li:nth-child(2) a {
    color: #7f9bc0;
    font-weight: bolder;
}
#header #navigator:hover {
    top: 0;
}
#header .blogStats {
    display: none;
}
#mainContent{
    width:65%;
    margin-left: 7.5%;
    margin-right:1%;
    float: left;
    margin-top:1.17em;
    border-radius: 8px;
    
}
#sideBar{margin-top:1.17em;
    width:19%;
    float: left;
    border-radius: 8px;
    
}
li{list-style:none;
}
.dayTitle{
    font-size: 24px;
    font-family: "微软雅黑";
}
.postCon{font-size: 16px;}
.postCon,.postDesc{font-size: 16px;}


.day,#header,#sideBarMain,#ctx3d{-webkit-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
   -moz-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
   box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;}
   .day div{
    margin-bottom:5px;
}
#sideBarMain{padding-bottom: 20px;}
a{text-decoration:none;}

.postTitle{border-top:1px dashed #ABABAB;padding-top:10px;font-size: 20px;}
#sidebar_topdiggedposts{border-top:1px dashed #ABABAB;margin-top:20px;}
.postDesc{padding-bottom: 10px;}
.day{margin-bottom:20px; }
.dayTitle,.postTitle,.postCon,.postDesc,.newsItem,#calendar,#leftcontentcontainer{padding:0 8px;}
.postDesc{padding-bottom: 15px;}

#sideBar li{margin-left:-40px;}
.subtitle{position:absolute;bottom:15px;left:300px;}
body{background-color:#C6E2FF}
.catListTitle{font-size:24px;font-family: "微软雅黑";font-weight: 400;margin:0;}
#profile_block,#calendar,#sidebar_search,#sidebar_shortcut,#sidebar_categories,#sidebar_topviewedposts{display:none;}
.catListTag ul li{margin:5px 0;}
#wechat img{position:absolute;display:none;right:0;top:300px;width:200px;height:200px;}
#wechat img{width:200px;border-radius:15px;}
#wechat:hover img{display:block;}
#lalala p,#lalala a{font-family:"微软雅黑";font-size:16px;margin:5px 0;padding:0;}
#count{vertical-align:middle;height:20px;border-radius:3px;border:1px solid gray;}
a,a:link,a:hover{color:black;}
#wechatimg{margin:5px 0;}
.course{width:70%;margin:0 auto;}
.course a img{width:100%;border-radius:5px;margin:5px auto;border:1px solid gray;}
.righttitle,#sidebar_toptags h3{font-size:24px;margin:10px 0;border-top:1px dashed gray;}
#footer{text-align:center;margin:30px 0;}
#catalogue{font-size:14px;}
.cn{font-family:楷体 !important;font-size:16px;}
.en,.web_en{font-size:14px;font-family:Comic Sans MS;}
.catListTitle{font-family:楷体 !important;text-align:center;}
#TopDiggPostsBlock{font-family:楷体 !important;}










<div id="ctx3d" style="position:absolute;top:8px;left:0;height:300px;width:85%;right:0;display:inline-block;margin:0 auto;text-align:center;"></div>
<div style="position:absolute;top:8px;left:50px;height:30px;width:85%;z-index:999;right:0;display:inline-block;margin:0 auto;text-align:left">
    <div id="button" style="box-shadow:0 0 10px 5px lightblue;cursor:pointer;margin-top:20px;height:30px;line-height:30px;text-align:center;width:100px;z-index:999;border:1px solid gray;border-radius:4px;" onclick="togglewebgl()">开启WEBGL</div>
</div>

<div id="lalala" >
<p class="cn">昵 称: 桔 子 桑</p>
<p class="cn">星 座: 水 瓶 座</p>
<div id= "wechatimg">
<a id="wechat" href="javascript:void(0);" class="cn">微 信 二 维 码
<img src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_0]E4%60GC__RXUY[SZ%60XV8@VP.png" alt="" />
</a>
</div>
<!--
<img class="zfb" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190114215718.jpg" alt="" />
-->



<div class="cn">
  <a href="http://webgl.ecoblog.online/#/three_1" target="_blank">
     <span class="web_en">WebGL站：</span>
     <img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_react.png">
  </a>
</div>

<br>



</div>


<div id = "catalogue" style="border-top:1px dashed #ABABAB;">
<h4 style="font-family:楷体;margin-bottom:5px;">随笔目录<span class="count"></span></h4>

<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_书籍.png"><a href="http://www.cnblogs.com/eco-just/tag/book/" class="en">Book(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_图形.png"><a href="http://www.cnblogs.com/eco-just/tag/cg/" class="en">计算机图形学(1)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_shaderlab.png"><a href="http://www.cnblogs.com/eco-just/tag/shader/" class="en">Shader(7)</a><br>
<img style="width:30px;vertical-align:-12px;" class="type" src="https://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_ThreeJs.png"><a href="http://www.cnblogs.com/eco-just/tag/three.js/" class="en">Three.js(10)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_pixi.png"><a href="http://www.cnblogs.com/eco-just/tag/pixi/" class="en">Pixi.js(5)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_WebGL.png"><a href="http://www.cnblogs.com/eco-just/tag/relation.js/" class="en">Relation.js(1)</a><br>
<img style="width:30px;vertical-align:-10px;margin-bottom:7px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_OpenGL_logo_(Nov14).png"><a href="http://www.cnblogs.com/eco-just/tag/opengl/" class="en">OpenGL(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_WebGL.png"><a href="http://www.cnblogs.com/eco-just/tag/webgl/" class="en">WebGL编程指南(13)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_编程%20(1).png"><a href="http://www.cnblogs.com/eco-just/tag/c/" class="en">C语言(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_python.png"><a href="http://www.cnblogs.com/eco-just/tag/python/" class="en">python(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_H5.png"><a href="http://www.cnblogs.com/eco-just/tag/html/" class="en">HTML/CSS(7)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_JavaScript.png"><a href="http://www.cnblogs.com/eco-just/tag/javascript/" class="en">JavaScript(17)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_es6.png"><a href="http://www.cnblogs.com/eco-just/tag/es6/" class="en">ES6(3)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_jquery.png"><a href="http://www.cnblogs.com/eco-just/tag/jQuery/" class="en">jQuery(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_D3.png"><a href="http://www.cnblogs.com/eco-just/tag/d3/" class="en">D3(8)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_设计.png"><a href="http://www.cnblogs.com/eco-just/tag/design_pattern/" class="en">DesignPattern(2)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_Vue.png"><a href="http://www.cnblogs.com/eco-just/tag/vue/" class="en">Vue(8)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_react.png"><a href="http://www.cnblogs.com/eco-just/tag/react/" class="en">React(9)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_electron.png"><a href="http://www.cnblogs.com/eco-just/tag/electron/" class="en">Electron(1)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_WebRTC.png"><a href="http://www.cnblogs.com/eco-just/tag/rtc/" class="en">rtc(1)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_java.png"><a href="http://www.cnblogs.com/eco-just/tag/java/" class="en">Java(38)</a><br>
<img style="width:30px;vertical-align:-3px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_php.png"><a href="http://www.cnblogs.com/eco-just/tag/php/" class="en">PHP(8)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_linux.png"><a href="http://www.cnblogs.com/eco-just/tag/linux/" class="en">Linux(11)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_node.png"><a href="http://www.cnblogs.com/eco-just/tag/node/" class="en">Node.js(3)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_code.png"><a href="http://www.cnblogs.com/eco-just/tag/前端集合/" class="en">Front-end(6)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_code.png"><a href="http://www.cnblogs.com/eco-just/tag/service/" class="en">Back-end(8)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_database.png"><a href="http://www.cnblogs.com/eco-just/tag/DataBase/" class="en">DataBase(1)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_database.png"><a href="http://www.cnblogs.com/eco-just/tag/data-collection/" class="en">Data-Collection(1)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_http.png"><a href="http://www.cnblogs.com/eco-just/tag/http/" class="en">Http(6)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_tool.png"><a href="http://www.cnblogs.com/eco-just/tag/开发工具/" class="en">Tool(5)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_前端.png"><a href="http://www.cnblogs.com/eco-just/tag/web/" class="en">Web(3)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_微信.png"><a href="http://www.cnblogs.com/eco-just/tag/WeChatApp/" class="en">WeChatApp(11)</a><br>
<img style="width:30px;vertical-align:-12px;" src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_故事.png"><a href="http://www.cnblogs.com/eco-just/tag/story/" class="en">Story(1)</a><br>


<img src="https://s05.flagcounter.com/count2/jvGW/bg_82B0FF/txt_000000/border_CCCCCC/columns_3/maxflags_18/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" style="min-width:100%;" alt="Flag Counter" border="0">
<p class="cn">个人Blog小程序，扫码查看</p>
<img src="http://images.cnblogs.com/cnblogs_com/eco-just/1110566/o_gh_ca37680cc456_258.jpg"   style="display:block;width:100%;border-radius:3px;">



</div>
  

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/106/three.min.js"></script>


<script>

   window.ready =function(){
console.log(121212)
};


var timer = setInterval(function(){
var dom = document.getElementsByClassName("en");
if(dom){
calc();
clearInterval(timer)
}
},1000)



function calc(){

//console.warn("Welcome to my blog! ");
//console.warn("You can call me【桔子桑】,");
//console.warn("I am committed to becoming a full stack engineer,");
//console.warn("I hope we can learn from each other,and make progress together.");

console.log("%c\n       ", "padding:140px 100px;background:url('https://www.cnblogs.com/images/cnblogs_com/eco-just/1110566/o_838ba61ea8d3fd1f74fce089374e251f94ca5f8f.jpg') no-repeat 35% 30%;line-height:100px;height:10px;'");


console.log('%c','padding:140px 100px;background:url("https://www.cnblogs.com/images/cnblogs_com/eco-just/1110566/o_838ba61ea8d3fd1f74fce089374e251f94ca5f8f.jpg") no-repeat 35% 30%;line-height:100px;height:10px;');

var title1= document.getElementById("sideBar").getElementsByTagName("h4")[0];
//title1.innerHTML='随笔分类';

var en =document.getElementsByClassName("en");
var count =0;
for(var i=0;i<en.length;i++){
var str = en[i].innerText.split('\(')[1];
count+=parseInt(str.replace(/[^0-9]/ig,""));
}

title1.innerHTML='随笔目录' + "（"+count+"篇"+"）";
}






var vs = `
  uniform float time;

    void main(){
        vec3 posChanged = position;
        posChanged.x = posChanged.x*(abs(sin(time*1.0)));
        posChanged.y = posChanged.y*(abs(cos(time*1.0)));
        posChanged.z = posChanged.z*(abs(sin(time*1.0)));
        //gl_Position = projectionMatrix * modelViewMatrix * vec4(position*(abs(sin(time)/2.0)+0.5),1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(posChanged,1.0);
    }

`

var vs2 = `

void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}


`


var fs = `
  
    uniform float time;
    uniform vec2 resolution;

    // 2013-03-30 by @hintz

    #define CGFloat float
    #define M_PI 3.14159265359

    vec3 hsvtorgb(float h, float s, float v)
    {
    float c = v * s;
    h = mod((h * 6.0), 6.0);
    float x = c * (1.0 - abs(mod(h, 2.0) - 1.0));
    vec3 color;

    if (0.0 <= h && h < 1.0)
    {
    color = vec3(c, x, 0.0);
    }
    else if (1.0 <= h && h < 2.0)
    {
    color = vec3(x, c, 0.0);
    }
    else if (2.0 <= h && h < 3.0)
    {
    color = vec3(0.0, c, x);
    }
    else if (3.0 <= h && h < 4.0)
    {
    color = vec3(0.0, x, c);
    }
    else if (4.0 <= h && h < 5.0)
    {
    color = vec3(x, 0.0, c);
    }
    else if (5.0 <= h && h < 6.0)
    {
    color = vec3(c, 0.0, x);
    }
    else
    {
    color = vec3(0.0);
    }

    color += v - c;

    return color;
    }

    void main(void)
    {

    vec2 position = (gl_FragCoord.xy - 0.5 * resolution) / resolution.y;
    float x = position.x;
    float y = position.y;

    CGFloat a = atan(x, y);

    CGFloat d = sqrt(x*x+y*y);
    CGFloat d0 = 0.5*(sin(d-time)+1.5)*d;
    CGFloat d1 = 5.0;

    CGFloat u = mod(a*d1+sin(d*10.0+time), M_PI*2.0)/M_PI*0.5 - 0.5;
    CGFloat v = mod(pow(d0*4.0, 0.75),1.0) - 0.5;

    CGFloat dd = sqrt(u*u+v*v);

    CGFloat aa = atan(u, v);

    CGFloat uu = mod(aa*3.0+3.0*cos(dd*30.0-time), M_PI*2.0)/M_PI*0.5 - 0.5;
    // CGFloat vv = mod(dd*4.0,1.0) - 0.5;

    CGFloat d2 = sqrt(uu*uu+v*v)*1.5;

    gl_FragColor = vec4( hsvtorgb(dd+time*0.5/d1, sin(dd*time), d2), 1.0 );
    }

`


var fs2 = `
   

/*
 * "Seascape" by Alexander Alekseev aka TDM - 2014
 * License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
 * Contact: tdmaav@gmail.com
 */



 // 时间
uniform float iTime;
// 分辨率
uniform vec2 iResolution;
// 鼠标位置
uniform vec2 iMouse;




const int NUM_STEPS = 8;
const float PI	 	= 3.141592;
const float EPSILON	= 1e-3;
#define EPSILON_NRM (0.1 / iResolution.x)

// sea
const int ITER_GEOMETRY = 3;
const int ITER_FRAGMENT = 5;
const float SEA_HEIGHT = 0.6;
const float SEA_CHOPPY = 4.0;
const float SEA_SPEED = 0.8;
const float SEA_FREQ = 0.16;
const vec3 SEA_BASE = vec3(0.1,0.19,0.22);
const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6);
#define SEA_TIME (1.0 + iTime * SEA_SPEED)
const mat2 octave_m = mat2(1.6,1.2,-1.2,1.6);

// math
mat3 fromEuler(vec3 ang) {
	vec2 a1 = vec2(sin(ang.x),cos(ang.x));
    vec2 a2 = vec2(sin(ang.y),cos(ang.y));
    vec2 a3 = vec2(sin(ang.z),cos(ang.z));
    mat3 m;
    m[0] = vec3(a1.y*a3.y+a1.x*a2.x*a3.x,a1.y*a2.x*a3.x+a3.y*a1.x,-a2.y*a3.x);
	m[1] = vec3(-a2.y*a1.x,a1.y*a2.y,a2.x);
	m[2] = vec3(a3.y*a1.x*a2.x+a1.y*a3.x,a1.x*a3.x-a1.y*a3.y*a2.x,a2.y*a3.y);
	return m;
}
float hash( vec2 p ) {
	float h = dot(p,vec2(127.1,311.7));	
    return fract(sin(h)*43758.5453123);
}
float noise( in vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );	
	vec2 u = f*f*(3.0-2.0*f);
    return -1.0+2.0*mix( mix( hash( i + vec2(0.0,0.0) ), 
                     hash( i + vec2(1.0,0.0) ), u.x),
                mix( hash( i + vec2(0.0,1.0) ), 
                     hash( i + vec2(1.0,1.0) ), u.x), u.y);
}

// lighting
float diffuse(vec3 n,vec3 l,float p) {
    return pow(dot(n,l) * 0.4 + 0.6,p);
}
float specular(vec3 n,vec3 l,vec3 e,float s) {    
    float nrm = (s + 8.0) / (PI * 8.0);
    return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;
}

// sky
vec3 getSkyColor(vec3 e) {
    e.y = max(e.y,0.0);
    return vec3(pow(1.0-e.y,2.0), 1.0-e.y, 0.6+(1.0-e.y)*0.4);
}

// sea
float sea_octave(vec2 uv, float choppy) {
    uv += noise(uv);        
    vec2 wv = 1.0-abs(sin(uv));
    vec2 swv = abs(cos(uv));    
    wv = mix(wv,swv,wv);
    return pow(1.0-pow(wv.x * wv.y,0.65),choppy);
}

float map(vec3 p) {
    float freq = SEA_FREQ;
    float amp = SEA_HEIGHT;
    float choppy = SEA_CHOPPY;
    vec2 uv = p.xz; uv.x *= 0.75;
    
    float d, h = 0.0;    
    for(int i = 0; i < ITER_GEOMETRY; i++) {        
    	d = sea_octave((uv+SEA_TIME)*freq,choppy);
    	d += sea_octave((uv-SEA_TIME)*freq,choppy);
        h += d * amp;        
    	uv *= octave_m; freq *= 1.9; amp *= 0.22;
        choppy = mix(choppy,1.0,0.2);
    }
    return p.y - h;
}

float map_detailed(vec3 p) {
    float freq = SEA_FREQ;
    float amp = SEA_HEIGHT;
    float choppy = SEA_CHOPPY;
    vec2 uv = p.xz; uv.x *= 0.75;
    
    float d, h = 0.0;    
    for(int i = 0; i < ITER_FRAGMENT; i++) {        
    	d = sea_octave((uv+SEA_TIME)*freq,choppy);
    	d += sea_octave((uv-SEA_TIME)*freq,choppy);
        h += d * amp;        
    	uv *= octave_m; freq *= 1.9; amp *= 0.22;
        choppy = mix(choppy,1.0,0.2);
    }
    return p.y - h;
}

vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {  
    float fresnel = clamp(1.0 - dot(n,-eye), 0.0, 1.0);
    fresnel = pow(fresnel,3.0) * 0.65;
        
    vec3 reflected = getSkyColor(reflect(eye,n));    
    vec3 refracted = SEA_BASE + diffuse(n,l,80.0) * SEA_WATER_COLOR * 0.12; 
    
    vec3 color = mix(refracted,reflected,fresnel);
    
    float atten = max(1.0 - dot(dist,dist) * 0.001, 0.0);
    color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;
    
    color += vec3(specular(n,l,eye,60.0));
    
    return color;
}

// tracing
vec3 getNormal(vec3 p, float eps) {
    vec3 n;
    n.y = map_detailed(p);    
    n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;
    n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;
    n.y = eps;
    return normalize(n);
}

float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {  
    float tm = 0.0;
    float tx = 1000.0;    
    float hx = map(ori + dir * tx);
    if(hx > 0.0) return tx;   
    float hm = map(ori + dir * tm);    
    float tmid = 0.0;
    for(int i = 0; i < NUM_STEPS; i++) {
        tmid = mix(tm,tx, hm/(hm-hx));                   
        p = ori + dir * tmid;                   
    	float hmid = map(p);
		if(hmid < 0.0) {
        	tx = tmid;
            hx = hmid;
        } else {
            tm = tmid;
            hm = hmid;
        }
    }
    return tmid;
}

// main
void main() {
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;    
    float time = iTime * 0.3 + iMouse.x*0.0;
        
    // ray
    vec3 ang = vec3(sin(time*3.0)*0.1,sin(time)*0.2+0.3,time);    
    vec3 ori = vec3(0.0,3.5,time*5.0);
    vec3 dir = normalize(vec3(uv.xy,-2.0)); dir.z += length(uv) * 0.15;
    dir = normalize(dir) * fromEuler(ang);
    
    // tracing
    vec3 p;
    heightMapTracing(ori,dir,p);
    vec3 dist = p - ori;
    vec3 n = getNormal(p, dot(dist,dist) * EPSILON_NRM);
    vec3 light = normalize(vec3(0.0,1.0,0.8)); 
             
    // color
    vec3 color = mix(
        getSkyColor(dir),
        getSeaColor(p,n,light,dir,dist),
    	pow(smoothstep(0.0,-0.05,dir.y),0.3));
        
    // post
	gl_FragColor = vec4(pow(color,vec3(0.75)), 1.0);
}

`

</script>



<script>
var renderer;
var clock ;
var ctx3d = document.getElementById('ctx3d');

        var width = ctx3d.clientWidth,height = ctx3d.clientHeight;
function initRender() {
        clock = new THREE.Clock();
        renderer = new THREE.WebGLRenderer({antialias: true,alpha:true});
        renderer.setSize(width, height);
        //告诉渲染器需要阴影效果
        //renderer.shadowMap.enabled = true;
        //renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
        renderer.setClearColor(0xffffff);
        ctx3d.appendChild(renderer.domElement);
    }
var camera;
    function initCamera() {
        camera = new THREE.PerspectiveCamera(75, width / ctx3d.height, 0.1, 1000);
        camera.position.set(0, 0, 150);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

var scene;
    function initScene() {
        scene = new THREE.Scene();
    }

    var light;
    function initLight() {
        var dirLight = new THREE.DirectionalLight(0xFFFFFF);
            dirLight.position.set(0,70,0);
            scene.add(dirLight);
        light = new THREE.SpotLight(0xffffff);
        light.position.set(0.5,2,0);
        light.angle = Math.PI/3;
        var spotLightHelper = new THREE.SpotLightHelper(light);
        light.castShadow = true;
        scene.add(light);


        light = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
        light.position.set(0, 20, 0);
        scene.add(light);
        //scene.add(spotLightHelper);
    }
    //创建ShaderMaterial纹理的函数
var uniforms = {
            time: {type: 'f', value: 5.4},
            scale: {type: 'f', value: 0.2},
            alpha: {type: 'f', value: 0.6},
            iTime: { value: 1.0 },
            iResolution: { value: new THREE.Vector2(width * 1.0, height * 1.0)},
            resolution: {type: "v2", value: new THREE.Vector2(width, height)},
            iMouse:{type: "v2", value: new THREE.Vector2(width, height)},
        };
    function createMaterial(vertexShader, fragmentShader) {
        //配置着色器里面的attribute变量的值
        var attributes = {};
        //配置着色器里面的uniform变量的值
        

        var meshMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            defaultAttributeValues : attributes,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true
        });


        return meshMaterial;
    }
    


    function addplane(){
        var planeGeometry = new THREE.PlaneGeometry(1500,450)
        var meshMaterial1 = createMaterial(vs2, fs2);
        var meshMaterial = new THREE.MeshPhongMaterial({
            color: 0xfff000 * Math.random()
        });
        var plane = new THREE.Mesh(planeGeometry,meshMaterial1);
        scene.add(plane);
    }

   //窗口变动触发的函数
    function onWindowResize() {
        width = ctx3d.clientWidth,height = ctx3d.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        render();
        renderer.setSize(width, height);
    }
    function render(){

renderer.render( scene, camera ); // 重新渲染
}

    function animate() {
        requestAnimationFrame(animate);
       var delta = clock.getDelta(); // 获取本次和上次的时间间隔
       
       if(window.openwebgl){
            uniforms.iTime.value += delta;
            render();
       }
       
    }

    function draw() {
        //calc();
        initScene();
        initCamera();
        initLight();
        initRender();


        addplane();
        animate();
        window.onresize = onWindowResize;
onWindowResize();
    }


    function togglewebgl(){
        window.openwebgl  = !window.openwebgl ;
        var text = "";
        if(window.openwebgl){
             text = '关闭WEBGL'
        }else{
             text = '开启WEBGL'
        }
        $('#button').text(text)
    }

   window.openwebgl = false;
    draw();




</script>