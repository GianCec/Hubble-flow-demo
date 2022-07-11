const sensitivityX = 2;
const sensitivityY = 1;
const sensitivityZ = 0.1;
const scaleFactor = 100;
let emX,emY;
let emShow;
function mousePressed(){
  if(overArea(ximg[1],yimg[1],wimg[1],himg[1])){
   emShow=true;
   emX=(mouseX-gridCX);
   emY=(mouseY-gridCY);
   t=0;
   bT[0].order(true);
  }
    
         for(let i=0; i<2;i++){

            bT[i].click();
           
            }
           
           
         
         Tbar.click();
       
         if(bT[1].State){
            t=0;
        }
    
        if(bT[0].State && t<frame){
            t++;
        }

        } 


function mouseDragged() {

    const deltaTheta =
      (-sensitivityX * (mouseX - pmouseX)) / scaleFactor;
    const deltaPhi =
      (sensitivityY * (mouseY - pmouseY)) / scaleFactor;
      if(overArea(ximg[0],yimg[0],wimg[0],himg[0])){
    cam._orbit(deltaTheta, deltaPhi, 0);}
  }
  
  function mouseWheel(event) {
    if (event.delta > 0) {
      cam._orbit(0, 0, sensitivityZ * scaleFactor);
    } else {
      cam._orbit(0, 0, -sensitivityZ * scaleFactor);
    }
  }


  function overArea(x,y,w,h){
    if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
        return true;
    }
    return false;
    }
