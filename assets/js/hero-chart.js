// Rahali Corporation — decorative "client base, indexed" hero chart
(function(){
  var c = document.getElementById('horizon');
  if(!c) return;
  var ctx = c.getContext('2d');
  var w = c.width, h = c.height;
  function styleOf(varName, fallback){
    var v = getComputedStyle(document.documentElement).getPropertyValue(varName);
    return v ? v.trim() : fallback;
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    var line = styleOf('--line-strong','#B9AF98');
    var accent = styleOf('--accent','#3C6E64');
    var accentDeep = styleOf('--accent-deep','#24443D');
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    for(var gy=0; gy<=4; gy++){
      var y = (h/4)*gy + 0.5;
      ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    function series(seed, color, width, base){
      var pts = 60, arr=[];
      var v = base;
      for(var i=0;i<=pts;i++){
        var t = i/pts;
        v += Math.sin(t*7+seed)*3 + (Math.random()-0.45)*2.2 + 0.9;
        arr.push(v);
      }
      var min = Math.min.apply(null,arr), max = Math.max.apply(null,arr);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      for(var i=0;i<arr.length;i++){
        var x = (i/pts)*w;
        var y = h - 14 - ((arr[i]-min)/(max-min))*(h-28);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    series(1, accent, 1.4, 20);
    series(4, accentDeep, 2, 10);
  }
  draw();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw);
  window.addEventListener('resize', draw);
})();
