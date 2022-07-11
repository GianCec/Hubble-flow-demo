
let emb;
let grid;
let axisIm;


function imgSetup(){
    emb=createGraphics(wimg[0],himg[0],WEBGL);
    grid=createGraphics(wimg[1],himg[1]);
    axisIm=createGraphics(wimg[1]+2*border,himg[1]+2*border);


    embSetup();
    gridSetup();
}



function imgDraw(){
    embDraw();
    image(emb,ximg[0],yimg[0]);
    gridDraw();
   image(grid,ximg[1],yimg[1]);
   image(axisIm,ximg[1]-border,yimg[1]-border);

}
let ximg=[];
let wimg=[];
let yimg=[];
let himg=[];

let xAxis=[];
let yAxis=[];
let border;

function imagePosition(){
ximg[0]=0;
yimg[0]=height*0.3;
wimg[0]=width*0.51;
himg[0]=height*0.7;

ximg[1]=width*0.52;
yimg[1]=height*0.025;
wimg[1]=height*0.95;
himg[1]=wimg[1];


border=width/10;


}


