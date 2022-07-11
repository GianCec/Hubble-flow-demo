var t;
var frame;
var t0;
var scaleT;
var scaleR;
var textGraphic;
var col;
var N;

var exp=[]; ///Graphic
var formulas=[];
var timeImg;
var imp;
var txtButton;

let table=[];// Data
let popUpText=[];


function preload(){
  for(let i=0; i<5;i++){
    table[i]=[];
    for(let coo=0;coo<2;coo++){
      table[i][coo]=new p5.Table();
 if(coo==00){
     table[i][coo] = loadTable('assets/Data ('+i+').csv', 'csv');
 }else{
  table[i][coo] = loadTable('assets/DataC ('+i+').csv', 'csv');
 }


}
}


}


function setup() {
  createCanvas(windowWidth, windowHeight-1);
 imagePosition();
 initializeFields();
  imgSetup();
  axisSetup()
  commandSetup();



  }


function draw() {
  
  background(0);
  imgDraw();
  commandDraw();
  hubbleFlow();


}

var scaleT;
var scaleR;


  function initializeFields() {
     t=0;
     frame = 488;
    scaleT = wimg[1]/105;
    scaleR = scaleT;
    print(scaleT);

}
