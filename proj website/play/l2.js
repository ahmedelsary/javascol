var i;
var deg=1;
var sec;
var timerFlag=0;
var score;
var speed;
var containerWidth=700;
var containerHeight=500;
var BlocksArray=new Array();
var NumbersArray=new Array();
var TimeArray=new Array();
var RocketArray=new Array();
var TurtleArray=new Array();
function init(){
cont=document.getElementById("container");
tim=document.getElementById("timer");
scoreDiv=document.getElementById("score");

n5_1=document.getElementById("5n-1");
n10_1=document.getElementById("10n-1");
n20_1=document.getElementById("20n-1");
n5_2=document.getElementById("5n-2");
n10_2=document.getElementById("10n-2");
n20_2=document.getElementById("20n-2");
n5_3=document.getElementById("5n-3");
n10_3=document.getElementById("10n-3");
n20_3=document.getElementById("20n-3");

cont.style.width=containerWidth+'px';
cont.style.height=containerHeight+'px';
cont.style.border='5px #000 solid';
el=document.getElementById("el");
sk1=document.getElementById("skull1");
sk2=document.getElementById("skull2");
sk3=document.getElementById("skull3");

tt_1=document.getElementById("+t-1");
t_1=document.getElementById("-t-1");

rocket1=document.getElementById("rocket1");
rocket2=document.getElementById("rocket2");

turtle1=document.getElementById("turtle1");
turtle2=document.getElementById("turtle2");

BlocksArray.push(sk1);
BlocksArray.push(sk2);
BlocksArray.push(sk3);

NumbersArray.push(n5_1);
NumbersArray.push(n10_1);
NumbersArray.push(n20_1);
NumbersArray.push(n5_2);
NumbersArray.push(n10_2);
NumbersArray.push(n20_2);
NumbersArray.push(n5_3);
NumbersArray.push(n10_3);
NumbersArray.push(n20_3);

TimeArray.push(tt_1);
TimeArray.push(t_1);

RocketArray.push(rocket1);
RocketArray.push(rocket2);

TurtleArray.push(turtle1);
TurtleArray.push(turtle2);

el.style.position='absolute';
el.style.top='200px';
el.style.left='200px';
sk1.style.position='absolute';
sk1.style.top='50px';
sk1.style.left='200px';
sk2.style.position='absolute';
sk2.style.top='300px';
sk2.style.left='300px';
sk3.style.position='absolute';
sk3.style.top='400px';
sk3.style.left='400px';

n5_1.style.position='absolute';
n5_1.style.top='100px';
n5_1.style.left='350px';
n5_1.style.display='block';

n5_2.style.position='absolute';
n5_2.style.top='350px';
n5_2.style.left='600px';
n5_2.style.display='block';

n5_3.style.position='absolute';
n5_3.style.top='50px';
n5_3.style.left='600px';
n5_3.style.display='block';

n10_1.style.position='absolute';
n10_1.style.top='150px';
n10_1.style.left='150px';
n10_1.style.display='block';

n10_2.style.position='absolute';
n10_2.style.top='300px';
n10_2.style.left='20px';
n10_2.style.display='block';

n10_3.style.position='absolute';
n10_3.style.top='450px';
n10_3.style.left='300px';
n10_3.style.display='block';

n20_1.style.position='absolute';
n20_1.style.top='200px';
n20_1.style.left='450px';
n20_1.style.display='block';

n20_2.style.position='absolute';
n20_2.style.top='400px';
n20_2.style.left='50px';
n20_2.style.display='block';

n20_3.style.position='absolute';
n20_3.style.top='50px';
n20_3.style.left='50px';
n20_3.style.display='block';

tt_1.style.position='absolute';
tt_1.style.top='300px';
tt_1.style.left='200px';
tt_1.style.display='block';

t_1.style.position='absolute';
t_1.style.top='400px';
t_1.style.left='650px';
t_1.style.display='block';

rocket1.style.position='absolute';
rocket1.style.top='150px';
rocket1.style.left='600px';
rocket1.style.display='block';

rocket2.style.position='absolute';
rocket2.style.top='200px';
rocket2.style.left='300px';
rocket2.style.display='block';

turtle1.style.position='absolute';
turtle1.style.top='50px';
turtle1.style.left='500px';
turtle1.style.display='block';

turtle2.style.position='absolute';
turtle2.style.top='400px';
turtle2.style.left='500px';
turtle2.style.display='block';


score=0;
deg=1;
timerFlag=0;
rot(0);
sec=30;
speed=10;
tim.innerHTML="Time:"+sec;
scoreDiv.innerHTML="Score:"+score;
event.keyCode=200;


}
function moveup(){ 
    boom();   
    switch(deg){
    case 1:
    case 2:
    case 3:
    case 4:
    rot(0); break; 
}
el.style.top=parseInt(el.style.top)-1+'px'; 
deg=1;    
} 
function movedown(){
     boom();  
    switch(deg){
    case 1:
    case 2: rot(180);break;
    case 3:break;
    case 4: rot(180); break;  
}
el.style.top=parseInt(el.style.top)+1+'px';
deg=3;   
} 
function moveright(){ 
     boom();  
    switch(deg){
    case 1: rot(90);break;
    case 2: break;
    case 3: 
    case 4: rot(90); break;  
}
el.style.left=parseInt(el.style.left)+1+'px';
deg=2;   
} 
function moveleft(){
     boom();  
    switch(deg){
    case 1: 
    case 2: 
    case 3: rot(-90);break;
    case 4: break;  
}
el.style.left=parseInt(el.style.left)-1+'px';  
deg=4;    
} 
function f(e){
    if(timerFlag==0){
        setTimer();
    }
    timerFlag=1;
    switch(e.keyCode){
        case 37:
   clearInterval(i);
  i=setInterval(moveleft,speed);
  break;
          case 38:
   clearInterval(i);
  i=setInterval(moveup,speed);
  break;
          case 39:
   clearInterval(i);
  i=setInterval(moveright,speed);
  break;
          case 40:
   clearInterval(i);
  i=setInterval(movedown,speed);
  break;
  default:clearInterval(i);   
  }   
}

function rot(degr){
    	if(navigator.userAgent.match("Chrome")){
el.style.WebkitTransform = "rotate("+degr+"deg)";
} else if(navigator.userAgent.match("Firefox")){
el.style.MozTransform = "rotate("+degr+"deg)";
} else if(navigator.userAgent.match("MSIE")){
el.style.msTransform = "rotate("+degr+"deg)";
} else if(navigator.userAgent.match("Opera")){
el.style.OTransform = "rotate("+degr+"deg)";
} else {
el.style.transform = "rotate("+degr+"deg)";
}       
}

function boom(){
  if( parseInt(el.style.top) <= 5 || parseInt(el.style.top) >= containerHeight-45 || parseInt(el.style.left) <= 5 || parseInt(el.style.left) >= containerWidth-45 )
 { 
     clearInterval(i);
     clearTimeout(i2); 
    alert("Smashed! your score is "+score);
    init();
	}
        
    for (var j=0;j<BlocksArray.length;j++){
	if (
    (
    parseInt(el.style.left) == parseInt(BlocksArray[j].style.left)- parseInt(el.style.height) 
    && 
    parseInt(el.style.top)>=parseInt(BlocksArray[j].style.top)-45 
    && 
    parseInt(el.style.top)<=parseInt(BlocksArray[j].style.top)+55 
    )
    
    ||
    ( 
     parseInt(el.style.top)==parseInt(BlocksArray[j].style.top)-parseInt(el.style.width)
      && parseInt(el.style.left)>=parseInt(BlocksArray[j].style.left)-50
       && parseInt(el.style.left)<=parseInt(BlocksArray[j].style.left)+60       
    )
    ||
     
    ( parseInt(el.style.left)==parseInt(BlocksArray[j].style.left)+parseInt(el.style.height)+10
     && parseInt(el.style.top)>=parseInt(BlocksArray[j].style.top)-50 
     && parseInt(el.style.top)<=parseInt(BlocksArray[j].style.top)+60 
     )
     ||
      (
      parseInt(el.style.top)==parseInt(BlocksArray[j].style.top)-parseInt(el.style.width)+110 
      && parseInt(el.style.left)>=parseInt(BlocksArray[j].style.left)-50 
      && parseInt(el.style.left)<=parseInt(BlocksArray[j].style.left)+60
      )
      )
      
      {
        
    clearInterval(i);
     clearTimeout(i2); 
    alert("Smashed! your score is "+score);
    init();
	}
	}
    
    ////////////////////////time check//////////////////////
    
    if(sec<=0){
        clearInterval(i);
        clearTimeout(i2); 
        alert("Time Over! your score is "+score);
        init();
        }
 //////////NUMBERS CHECK/////////////////////////////////////
 
 for (var k=0;k<NumbersArray.length;k++){
 	if (
    (
    parseInt(el.style.left) == parseInt(NumbersArray[k].style.left)- parseInt(el.style.height) 
    && 
    parseInt(el.style.top)>=parseInt(NumbersArray[k].style.top)-45 
    && 
    parseInt(el.style.top)<=parseInt(NumbersArray[k].style.top)+35 
    )
    
    ||
    ( 
     parseInt(el.style.top)==parseInt(NumbersArray[k].style.top)-parseInt(el.style.width)
      && parseInt(el.style.left)>=parseInt(NumbersArray[k].style.left)-45
       && parseInt(el.style.left)<=parseInt(NumbersArray[k].style.left)+40       
    )
    ||
     
    ( parseInt(el.style.left)==parseInt(NumbersArray[k].style.left)+parseInt(el.style.height)-10
     && parseInt(el.style.top)>=parseInt(NumbersArray[k].style.top)-45 
     && parseInt(el.style.top)<=parseInt(NumbersArray[k].style.top)+40 
     )
     ||
      (
      parseInt(el.style.top)==parseInt(NumbersArray[k].style.top)-parseInt(el.style.width)+90 
      && parseInt(el.style.left)>=parseInt(NumbersArray[k].style.left)-50 
      && parseInt(el.style.left)<=parseInt(NumbersArray[k].style.left)+40
      )
      )
      
      {
        switch(parseInt(NumbersArray[k].id)){
            case 5:NumbersArray[k].style.display="none"; NumbersArray.splice(k,1); score+=5; scoreDiv.innerHTML="Score:"+score;
            if(NumbersArray.length==0){    clearInterval(i);
     clearTimeout(i2); 
    alert("Congratulations,Your Score is "+score);
    init();}  break;
    
            case 10:NumbersArray[k].style.display="none"; NumbersArray.splice(k,1); score+=10; scoreDiv.innerHTML="Score:"+score; 
                        if(NumbersArray.length==0){    clearInterval(i);
     clearTimeout(i2); 
    alert("Congratulations,Your Score is "+score);
    init();} break;
            
            
            case 20:NumbersArray[k].style.display="none"; NumbersArray.splice(k,1); score+=20; scoreDiv.innerHTML="Score:"+score;
                        if(NumbersArray.length==0){    clearInterval(i);
     clearTimeout(i2); 
    alert("Congratulations,Your Score is "+score);
    init();} break;
          
        } 
	}   
}



 //////////Rocket CHECK/////////////////////////////////////
 
 for (var k=0;k<RocketArray.length;k++){
 	if (
    (
    parseInt(el.style.left) == parseInt(RocketArray[k].style.left)- parseInt(el.style.height) 
    && 
    parseInt(el.style.top)>=parseInt(RocketArray[k].style.top)-45 
    && 
    parseInt(el.style.top)<=parseInt(RocketArray[k].style.top)+35 
    )
    
    ||
    ( 
     parseInt(el.style.top)==parseInt(RocketArray[k].style.top)-parseInt(el.style.width)
      && parseInt(el.style.left)>=parseInt(RocketArray[k].style.left)-45
       && parseInt(el.style.left)<=parseInt(RocketArray[k].style.left)+40       
    )
    ||
     
    ( parseInt(el.style.left)==parseInt(RocketArray[k].style.left)+parseInt(el.style.height)-10
     && parseInt(el.style.top)>=parseInt(RocketArray[k].style.top)-45 
     && parseInt(el.style.top)<=parseInt(RocketArray[k].style.top)+40 
     )
     ||
      (
      parseInt(el.style.top)==parseInt(RocketArray[k].style.top)-parseInt(el.style.width)+90 
      && parseInt(el.style.left)>=parseInt(RocketArray[k].style.left)-50 
      && parseInt(el.style.left)<=parseInt(RocketArray[k].style.left)+40
      )
      )
      
      {
      
      RocketArray[k].style.display="none"; RocketArray.splice(k,1); speed-=4;  alert("Speed up!"); 
      switch(deg){
                case 1:
                clearInterval(i);
        i=setInterval(moveup,speed); break;
                case 2:
                clearInterval(i);
        i=setInterval(moveright,speed); break;
                case 3:
                clearInterval(i);
        i=setInterval(movedown,speed); break;
                case 4:
                clearInterval(i);
        i=setInterval(moveleft,speed); break;
        
        }
	}   
}



 //////////Turtle CHECK/////////////////////////////////////
 
 for (var k=0;k<TurtleArray.length;k++){
 	if (
    (
    parseInt(el.style.left) == parseInt(TurtleArray[k].style.left)- parseInt(el.style.height) 
    && 
    parseInt(el.style.top)>=parseInt(TurtleArray[k].style.top)-45 
    && 
    parseInt(el.style.top)<=parseInt(TurtleArray[k].style.top)+35 
    )
    
    ||
    ( 
     parseInt(el.style.top)==parseInt(TurtleArray[k].style.top)-parseInt(el.style.width)
      && parseInt(el.style.left)>=parseInt(TurtleArray[k].style.left)-45
       && parseInt(el.style.left)<=parseInt(TurtleArray[k].style.left)+40       
    )
    ||
     
    ( parseInt(el.style.left)==parseInt(TurtleArray[k].style.left)+parseInt(el.style.height)-10
     && parseInt(el.style.top)>=parseInt(TurtleArray[k].style.top)-45 
     && parseInt(el.style.top)<=parseInt(TurtleArray[k].style.top)+40 
     )
     ||
      (
      parseInt(el.style.top)==parseInt(TurtleArray[k].style.top)-parseInt(el.style.width)+90 
      && parseInt(el.style.left)>=parseInt(TurtleArray[k].style.left)-50 
      && parseInt(el.style.left)<=parseInt(TurtleArray[k].style.left)+40
      )
      )
      
      {
      
      TurtleArray[k].style.display="none"; TurtleArray.splice(k,1); speed+=4;  alert("Speed down!");
            switch(deg){
                case 1:
                clearInterval(i);
        i=setInterval(moveup,speed); break;
                case 2:
                clearInterval(i);
        i=setInterval(moveright,speed); break;
                case 3:
                clearInterval(i);
        i=setInterval(movedown,speed); break;
                case 4:
                clearInterval(i);
        i=setInterval(moveleft,speed); break;
        
        }
	}   
}


///////////////////////////////////////Time Blocks Check////////////////////////////////////////

 for (var k=0;k<TimeArray.length;k++){
 	if (
    (
    parseInt(el.style.left) == parseInt(TimeArray[k].style.left)- parseInt(el.style.height) 
    && 
    parseInt(el.style.top)>=parseInt(TimeArray[k].style.top)-45 
    && 
    parseInt(el.style.top)<=parseInt(TimeArray[k].style.top)+35 
    )
    
    ||
    ( 
     parseInt(el.style.top)==parseInt(TimeArray[k].style.top)-parseInt(el.style.width)
      && parseInt(el.style.left)>=parseInt(TimeArray[k].style.left)-45
       && parseInt(el.style.left)<=parseInt(TimeArray[k].style.left)+40       
    )
    ||
     
    ( parseInt(el.style.left)==parseInt(TimeArray[k].style.left)+parseInt(el.style.height)-10
     && parseInt(el.style.top)>=parseInt(TimeArray[k].style.top)-45 
     && parseInt(el.style.top)<=parseInt(TimeArray[k].style.top)+40 
     )
     ||
      (
      parseInt(el.style.top)==parseInt(TimeArray[k].style.top)-parseInt(el.style.width)+90 
      && parseInt(el.style.left)>=parseInt(TimeArray[k].style.left)-50 
      && parseInt(el.style.left)<=parseInt(TimeArray[k].style.left)+40
      )
      )
      
      {
        switch(TimeArray[k].id.charAt(0)){
            case '+':TimeArray[k].style.display="none"; TimeArray.splice(k,1); sec+=10; tim.innerHTML="Time:"+sec; alert("Time +10");  break;    
            case '-':TimeArray[k].style.display="none"; TimeArray.splice(k,1); sec-=10; alert("Time -10"); if(sec>0){tim.innerHTML="Time:"+sec;} else{tim.innerHTML="Time:0";}  break;
              
        } 
	}   
} 
  
}

function setTimer(){ 
    if(sec<=0){
    boom();
    }
    sec--;
    tim.innerHTML="Time:"+sec;
    i2=setTimeout(setTimer,1000); 
}
