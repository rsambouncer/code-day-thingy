module.exports.exportFunction = function(peoples){
  return function(){
    var pplleenn = Object.keys(peoples).length;
    var infoBuffer = new ArrayBuffer(pplleenn*12);
    console.log(pplleenn);
    var info = new Float32Array(infoBuffer);
    var a=0; for(var p in peoples){
      info[a++] = peoples[p].ws.id;
      info[a++] = peoples[p].x;
      info[a++] = peoples[p].y;
    }
    for(var p in peoples){
      var bbb = new ArrayBuffer(12);
        var iii = new Float32Array(bbb);
        iii[0] = 5;
        iii[1] = 300;
        iii[2] = 500;
      if(false)
        peoples[p].ws.send(bbb);
    }
  };
};
