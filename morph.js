//var tween = TweenMax.to("#c4",.1,{scaleY:.2, transformOrigin: "0% 100%", ease: Linear.easeNone});

var vwidth = window.innerWidth,
    vheight = window.innerHeight,
    cwidth = 0, //width of container containing the player components
    cheight = 0; //height of container containing the player components

//Dynamically setting container size

if(vwidth>vheight)
{
    cheight = .5 * vheight;
    cwidth = 1.5 * cheight;
}
else
{
    cwidth = .5 * vwidth;
    cheight = .66 * cwidth;
}

var ratio = cwidth/600;

console.log(ratio);

var container = document.getElementById("container");

var c0 = document.getElementById("c0"),
    bts = document.getElementsByClassName("button-top"),
    c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    c4 = document.getElementById("c4"),
    c5 = document.getElementById("c5"),
    c6 = document.getElementById("c6"),
    c7 = document.getElementById("c7"),
    c8 = document.getElementById("c8"),
    c9 = document.getElementById("c9"),
    c10 = document.getElementById("c10"),
    c11 = document.getElementById("c11"),
    c12 = document.getElementById("c12"),
    c13 = document.getElementById("c13"),
    c14 = document.getElementById("c14"),
    c15 = document.getElementById("c15"),
    c16 = document.getElementById("c16"),
    c17 = document.getElementById("c17"),
    c18 = document.getElementById("c18"),
    c19 = document.getElementById("c19"),
    c20 = document.getElementById("c20"),
    c21 = document.getElementById("c21"),
    c22 = document.getElementById("c22"),
    c23 = document.getElementById("c23"),
    c24 = document.getElementById("c24");

var tl = new TimelineMax({delay:1});

tl
// .to([c1, c6, c22, c17], .2, {backgroundColor:"#ec33ff"})
// .to([c2, c5, c8, c7], .2, {backgroundColor:"#6503ff"})
// .to([c24, c10], .2, {backgroundColor:"#00fff8"})
// .to([c12, c19, c13], .2, {backgroundColor:"#35ff7d"})
// .to([c14, c16, c15, c4], .2, {backgroundColor:"#ecff35"})
// .to([c18, c11, c21, c20], .2, {backgroundColor:"#ff9e35"})
// .to([c0, c3, c23, c9], .2, {backgroundColor:"#ff3834"})
.to(container, 0, {width: 600*ratio, height: 400*ratio})
.to(c0, 0, {width: 580*ratio, height: 360*ratio, bottom:0})
.to(bts, 0, {width: 72*ratio, height: 20*ratio, top: 10*ratio})
.to(c1, 0, {left:100*ratio})
.to(c2, 0, {left:182*ratio})
.to(c3, 0, {left:264*ratio})
.to(c4, 0, {left:346*ratio})
.to(c5, 0, {left:428*ratio})
.to(c6, 0, {width: 450*ratio, height:10*ratio, top: 30*ratio, left:75*ratio})
.to(c7, 0, {top: 40*ratio, width: 580*ratio, left:0*ratio, height:10*ratio})
.to(c8, 0, {width: 10*ratio, height: 360*ratio, top:40*ratio})
.to(c9, 0, {width: 5*ratio, top: 50*ratio, height: 350*ratio, left: 75*ratio})
.to(c10, 0, {width: 5*ratio, top: 50*ratio, height: 350*ratio, left:460*ratio})
.to(c11, 0, {width: 35*ratio, height: 350*ratio, top: 50*ratio, left:545*ratio})
.to(c12, 0, {width: 7*ratio, height: 100*ratio, top: 80*ratio, left: 580*ratio})
.to(c13, 0, {width: 13*ratio, height: 70*ratio, top: 95*ratio, left: 587*ratio})
.to(c14, 0, {top: 100*ratio, left: 100*ratio, width: 340*ratio, height: 225*ratio})
.to(c15, 0, {top: 100*ratio, left: 485*ratio, width: 65*ratio, height: 225*ratio})
.to(c16, 0, {top: 140*ratio, left:100*ratio, width: 340*ratio, height: 160*ratio})
.to(c17, 0, {top: 160*ratio, left: 120*ratio, width: 300*ratio, height: 120*ratio})
.to(c18, 0, {top: 205*ratio, left: 150*ratio, width: 50*ratio, height: 30*ratio})
.to(c19, 0, {top: 195*ratio, left: 160*ratio, width: 30*ratio, height: 50*ratio})
.to(c20, 0, {top: 195*ratio, left: 220*ratio, width: 60*ratio, height: 50*ratio})
.to(c21, 0, {left: 280*ratio, top: 195*ratio, width: 40*ratio, height: 50*ratio})
.to(c22, 0, {left: 340*ratio, top: 205*ratio, width: 50*ratio, height: 30*ratio})
.to(c23, 0, {left: 350*ratio, top: 195*ratio, width: 30*ratio, height: 50*ratio})
.to(c24, 0, {height: 35*ratio, width: 570*ratio, left: 10*ratio, bottom: 0})

//.to(container, 0, {width: 600*ratio, height: 400*ratio})
//.to(c0, 0, {width: 580, height: 360, bottom:0})
//.to(bts, 0, {width: 72, height: 20, top: 10})
//.to(c1, 0, {left:100})
//.to(c2, 0, {left:182})
//.to(c3, 0, {left:264})
//.to(c4, 0, {left:346})
//.to(c5, 0, {left:428})
//.to(c6, 0, {width: 450, height:10, top: 30, left:75})
//.to(c7, 0, {top: 40, width: 580, left:0, height:10})
//.to(c8, 0, {width: 10, height: 360, top:40})
//.to(c9, 0, {width: 5, top: 50, height: 350, left: 75})
//.to(c10, 0, {width: 5, top: 50, height: 350, left:460})
//.to(c11, 0, {width: 35, height: 350, top: 50, left:545})
//.to(c12, 0, {width: 7, height: 100, top: 80, left: 580})
//.to(c13, 0, {width: 13, height: 70, top: 95, left: 587})
//.to(c14, 0, {top: 100, left: 100, width: 340, height: 225})
//.to(c15, 0, {top: 100, left: 485, width: 65, height: 225})
//.to(c16, 0, {top: 140, left:100, width: 340, height: 160})
//.to(c17, 0, {top: 160, left: 120, width: 300, height: 120})
//.to(c18, 0, {top: 205, left: 150, width: 50, height: 30})
//.to(c19, 0, {top: 195, left: 160, width: 30, height: 50})
//.to(c20, 0, {top: 195, left: 220, width: 60, height: 50})
//.to(c21, 0, {left: 280, top: 195, width: 40, height: 50})
//.to(c22, 0, {left: 340, top: 205, width: 50, height: 30})
//.to(c23, 0, {left: 350, top: 195, width: 30, height: 50})
//.to(c24, 0, {height: 35, width: 570, left: 10, bottom: 0})

.to(c4, .2, {scaleY:.1, transformOrigin:"center bottom"})
.to([c18, c19, c22, c23], 2, {rotation:360, ease:Linear.easeNone})
.to(c4, .2, {scaleY:1})
.to(c4, 1, {transformOrigin:"center center"})
.to(c1, .2, {top:150*ratio, left:10*ratio})
.to(c1, .2, {width:20*ratio, height:100*ratio})
.to(c2, .2, {top:170*ratio, left:120*ratio})
.to(c2, .2, {width:20*ratio, height:60*ratio})
.to(c3, .2, {top: 150*ratio, left:535*ratio})
.to(c3, .2, {width:60*ratio, height:20*ratio})
.to(c4, .2, {left:345*ratio, top:215*ratio})
.to(c4, .2, {width:60*ratio, height:35*ratio})
.to(c5, .2, {left:120*ratio, top:150*ratio})
.to(c5, .2, {width:60*ratio, height:20*ratio})
.to(c17, .2, {left:90*ratio, top:150*ratio})
.to(c17, .2, {width:20*ratio, height:100*ratio})
.to(c18, .2, {left:425*ratio, top:150*ratio})
.to(c18, .2, {width:20*ratio, height:100*ratio})
.to(c19, .2, {left:270*ratio, top:150*ratio})
.to(c19, .2, {width:60*ratio, height:20*ratio})
.to(c20, .2, {left:465*ratio, top:170*ratio})
.to(c20, .2, {width:20*ratio, height:50*ratio})
.to(c21, .2, {left:500*ratio, top:150*ratio})
.to(c21, .2, {width:20*ratio, height:100*ratio})
.to(c22, .2, {left:50*ratio, top:180*ratio})
.to(c22, .2, {width:20*ratio, height:35*ratio})
.to(c23, .2, {left:535*ratio, top:170*ratio})
.to(c23, .2, {width:20*ratio, height:60*ratio})
.to(c16, .2, {left:385*ratio, top:170*ratio})
.to(c16, .2, {width:20*ratio, height:45*ratio})
.to(c14, .2, {left:345*ratio, top:150*ratio})
.to(c14, .2, {width:60*ratio, height:20*ratio})
.to(c24, .2, {left:200*ratio, top:150*ratio})
.to(c24, .2, {width:20*ratio, height:65*ratio})
.to(c7, .2, {left:140*ratio, top:190*ratio})
.to(c7, .2, {width:20*ratio, height:20*ratio})
.to(c8, .2, {left:120*ratio, top:230*ratio})
.to(c8, .2, {width:60*ratio, height:20*ratio})
.to(c11, .2, {left:445*ratio, top:150*ratio})
.to(c11, .2, {width:60*ratio, height:20*ratio})
.to(c9, .2, {left:555*ratio, top:190*ratio})
.to(c9, .2, {width:20*ratio, height:20*ratio})
.to(c10, .2, {left:200*ratio, top:215*ratio})
.to(c10, .2, {width:60*ratio, height:35*ratio})
.to(c12, .2, {left:270*ratio, top:170*ratio})
.to(c12, .2, {width:20*ratio, height:60*ratio})
.to(c13, .2, {left:270*ratio, top:215*ratio})
.to(c13, .2, {width:60*ratio, height:35*ratio})
.to(c15, .2, {left:345*ratio, top:170*ratio})
.to(c15, .2, {height:45*ratio, width:20*ratio})
.to(c0, .2, {width:60*ratio, height:20*ratio})
.to(c0, .2, {left:535*ratio, top:230*ratio})
.to(c6, .2, {left:30*ratio, top:215*ratio})
.to(c6, .2, {width:60*ratio, height:35*ratio})
.to([c1, c6, c22, c17], .4, {backgroundColor:"#ec33ff"})
.to([c2, c5, c8, c7], .4, {backgroundColor:"#6503ff"})
.to([c24, c10], .4, {backgroundColor:"#00fff8"})
.to([c12, c19, c13], .4, {backgroundColor:"#35ff7d"})
.to([c14, c16, c15, c4], .4, {backgroundColor:"#ecff35"})
.to([c18, c11, c21, c20], .4, {backgroundColor:"#ff9e35"})
.to([c0, c3, c23, c9], .4, {backgroundColor:"#ff3834"})
.staggerTo([[c1, c6, c22, c17],[c2, c5, c8, c7],[c24, c10],[c12, c19, c13],[c14, c16, c15, c4],[c18, c11, c21, c20],[c0, c3, c23, c9]], .75, { bezier:{curviness:2, values:[{x:0, y:0}, {x:0, y:-100*ratio}, {x:0, y:0}]} }, 0.2)
;
