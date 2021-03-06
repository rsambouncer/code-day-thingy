  const HOST = location.origin.replace(/^http/, 'ws');
  const ws = new WebSocket(HOST);
  var bForCCC=true;const ccc = function(mmm){if(bForCCC) bForCCC=confirm(mmm);};

  
  const myCanvas = document.getElementById("myCanvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
  const DRAW = myCanvas.getContext("2d");
  function line(x1,y1,x2,y2){
    DRAW.beginPath();
    DRAW.moveTo(x1,y1);
    DRAW.lineTo(x2,y2);
    DRAW.stroke();
  }
  function circle(x,y,r){
    DRAW.beginPath();
    DRAW.arc(x,y,r,0,2*Math.PI);
    DRAW.fill();
    DRAW.stroke();
  }
  function rect(x1,y1,w,h){
    DRAW.beginPath();
    DRAW.rect(x1,y1,w,h);
    DRAW.fill();
    DRAW.stroke();
  }
  function distsqrd(x1,y1,x2,y2){
    return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
  }
  
  
  function loadingScreen(){
    DRAW.fillStyle = "rgb(0,0,255)";
    DRAW.strokeStyle = "rgb(0,255,0)";
    DRAW.lineWidth = 5;
    circle(100,100,50);
    rect(100,100,200,200);
    circle(250,250,1);
    line(100,50,200,50);
    line(200,50,200,200);
    line(25,375,375,25);
    DRAW.fillStyle = "rgb(255,255,255)";
    DRAW.strokeStyle = "rgb(0,0,0)";
    DRAW.lineWidth = 1;
  }
  loadingScreen();





  

  var mycoords = {a:0,b:0,c:0,x:0,y:0,name:"Random potato",u:0};
  var allcoords = {};
  var interval;
  document.addEventListener('mousemove',function(mouseE){
    mycoords.x = mouseE.clientX/window.innerWidth;
    mycoords.y = mouseE.clientY/window.innerHeight;
  });
  document.getElementById("thecookie1").addEventListener("click", function(){
    mycoords.a++;
    mycoords.c++;
  });
  document.getElementById("thecookie2").addEventListener("click", function(){
    mycoords.b++;
    mycoords.c++;
  });
  var buildingCosts = [15,97,1057,11528,124878,1344835,19211921,316996684,4899039651,72044700750,960596010000,13448344140000,163301321700000,2017251621000000,24975496259999996];
  
  document.getElementById("buildings1").children[0].addEventListener("click",function(){mycoords.u= -1;});
  document.getElementById("buildings1").children[1].addEventListener("click",function(){mycoords.u= -2;});
  document.getElementById("buildings1").children[2].addEventListener("click",function(){mycoords.u= -3;});
  document.getElementById("buildings1").children[3].addEventListener("click",function(){mycoords.u= -4;});
  document.getElementById("buildings1").children[4].addEventListener("click",function(){mycoords.u= -5;});
  document.getElementById("buildings1").children[5].addEventListener("click",function(){mycoords.u= -6;});
  document.getElementById("buildings1").children[6].addEventListener("click",function(){mycoords.u= -7;});
  document.getElementById("buildings1").children[7].addEventListener("click",function(){mycoords.u= -8;});
  document.getElementById("buildings1").children[8].addEventListener("click",function(){mycoords.u= -9;});
  document.getElementById("buildings1").children[9].addEventListener("click",function(){mycoords.u= -10;});
  document.getElementById("buildings1").children[10].addEventListener("click",function(){mycoords.u= -11;});
  document.getElementById("buildings1").children[11].addEventListener("click",function(){mycoords.u= -12;});
  document.getElementById("buildings1").children[12].addEventListener("click",function(){mycoords.u= -13;});
  document.getElementById("buildings1").children[13].addEventListener("click",function(){mycoords.u= -14;});
  document.getElementById("buildings1").children[14].addEventListener("click",function(){mycoords.u= -15;});

  document.getElementById("buildings2").children[0].addEventListener("click",function(){mycoords.u= 1;});
  document.getElementById("buildings2").children[1].addEventListener("click",function(){mycoords.u= 2;});
  document.getElementById("buildings2").children[2].addEventListener("click",function(){mycoords.u= 3;});
  document.getElementById("buildings2").children[3].addEventListener("click",function(){mycoords.u= 4;});
  document.getElementById("buildings2").children[4].addEventListener("click",function(){mycoords.u= 5;});
  document.getElementById("buildings2").children[5].addEventListener("click",function(){mycoords.u= 6;});
  document.getElementById("buildings2").children[6].addEventListener("click",function(){mycoords.u= 7;});
  document.getElementById("buildings2").children[7].addEventListener("click",function(){mycoords.u= 8;});
  document.getElementById("buildings2").children[8].addEventListener("click",function(){mycoords.u= 9;});
  document.getElementById("buildings2").children[9].addEventListener("click",function(){mycoords.u= 10;});
  document.getElementById("buildings2").children[10].addEventListener("click",function(){mycoords.u= 11;});
  document.getElementById("buildings2").children[11].addEventListener("click",function(){mycoords.u= 12;});
  document.getElementById("buildings2").children[12].addEventListener("click",function(){mycoords.u= 13;});
  document.getElementById("buildings2").children[13].addEventListener("click",function(){mycoords.u= 14;});
  document.getElementById("buildings2").children[14].addEventListener("click",function(){mycoords.u= 15;});


  form1.onsubmit = function(e){
    e.preventDefault();
    mycoords.name = form1.value1.value;
    form1.value1.value = '';
    return false;
  };
  ws.onmessage = function(event){
    allcoords = JSON.parse(event.data.toString());
  };  
  ws.onclose = function(event){
    window.clearInterval(interval);
  }
  function drawScene(){
    DRAW.clearRect(0,0,myCanvas.width,myCanvas.height);
    for(var pp in allcoords.ppl){
      DRAW.fillText(
        allcoords.ppl[pp]['name']+": "+allcoords.ppl[pp]['c'],
        allcoords.ppl[pp]['x']*window.innerWidth-10,
        allcoords.ppl[pp]['y']*window.innerHeight-30
      );
      rect(
        allcoords.ppl[pp]['x']*window.innerWidth-10,
        allcoords.ppl[pp]['y']*window.innerHeight-10,
        20,20
      );
    }
    numcookiesbank1.innerHTML = allcoords.score1;
    numcookiesbank2.innerHTML = allcoords.score2;
    numcookiespsec1.innerHTML = allcoords.cps1;
    numcookiespsec2.innerHTML = allcoords.cps2;
    window.requestAnimationFrame(drawScene);
  }
  ws.onopen = function(event){
    interval=window.setInterval(function(){
      ws.send(JSON.stringify(mycoords));
      mycoords.a = 0;
      mycoords.b = 0;
      mycoords.u = 0;
    }, 20);
    window.requestAnimationFrame(drawScene);
  }


