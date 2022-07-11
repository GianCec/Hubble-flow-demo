
//bottoni
let bT=[];   // time
let Tbar;
let bPS=[];
let bCoo=[];
let bTool;
let bRel;

let bt=[];






  
  
    function commandSetup(){
       let bx=width*0.01;
       let by=height*0.23;
      let   byI=height/36;
         bd=height*0.018;
   
   let byI2=byI/2;
   by=by+byI2;
   xTB=bx+byI*2;
   yTB=by-bd/3;
   wTB=width/4;
   hTB=10;

   Tbar=new slider(bx+byI*2,by*1.07,width*0.45,height*0.018);


   bT[0]=new button(bx,by*1.11,bd*1.3,true,false);
   bT[1]=new button(bx+byI,by*1.11,bd*1.3,false,false);


    }

    function commandDraw(){
            Tbar.display();
            for(let i=0; i<2;i++){
            bT[i].display();
            }

          
   
    }

