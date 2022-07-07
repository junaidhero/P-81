Canvas - document.getElementById("mycanvas")
ctx - Canvas.getContext("2d")

ctx.beginpath();
ctx.strockeStyle= "Gray" ;
ctx.lineWidth="4";
ctx.rect(150,143,430,200)
ctx.strocke();

ctx.beginpath();
ctx.strockeStyle= "Blue" ;
ctx.lineWidth="5";
ctx.arc(250,215,50,0,2*Math.PI)
ctx.strocke();

ctx.beginpath();
ctx.strockeStyle= "Black" ;
ctx.lineWidth="5"
ctx.arc(360,215,50,0,2*Math.PI)
ctx.strocke();

ctx.beginpath();
ctx.strockeStyle= "Red" ;
ctx.lineWidth="5";
ctx.arc(460,215,50,0,2*Math.PI)
ctx.strocke();

ctx.beginpath();
ctx.strockeStyle= "Yellow" ;
ctx.lineWidth="5";
ctx.arc(310,255,50,0,2*Math.PI)
ctx.strocke();

ctx.beginpath();
ctx.strockeStyle= "Gren" ;
ctx.lineWidth="5";
ctx.arc(410,255,50,0,2*Math.PI)
ctx.strocke();