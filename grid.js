let gridCX,gridCY;
let emXt,emYt;
let dEmObs;


function gridSetup(){
    emShow=false;
    emX=0;
    emY=0;
    emXt=0;
    emYt=0;

    gridCX=ximg[1]+wimg[1]/2;
    gridCY=yimg[1]+himg[1]/2;

   
}

function gridDraw(){
    grid.background(0);

    grid.push();
    grid.translate(grid.width/2,grid.height/2);
    grid.noStroke();
    grid.fill(255,0,0);
    grid.circle(0,0,10);
    fill(255);
    circle(gridCX,gridCY,10)
    if(emShow){
        grid.fill(0,255,255);

        grid.circle(emXt,emYt,10);
        photon(emX,emY,0,0);
        }
    grid.pop();
}

function hubbleFlow(){
  if(emShow){
    dEmObs=dist(emX,emY,0,0);

   let a=table[0][0].getNum(int(t),1);
   let a0=table[0][0].getNum(0,1);
   emXt=emX*(a/a0);
   emYt=emY*(a/a0);

  }

}


function photon(xi,yi,xf,yf){
let d=dist(xi,yi,xf,yf);
print(d);
grid.push()
grid.translate(xi,yi)
let a=atan2(yf-yi,xf-xi);
grid.rotate(a);
let x=table[2][0].getNum(t,1)*scaleT;
grid.fill(255,255,0);
if(x<d){
grid.circle(x,0,5);
}else{
    bT[0].order(false);
}
grid.pop()
}