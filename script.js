
let fordance = prompt("write me <disko>")

function getRandomRgb() {
    //kody internetic em vercre or el es amen ankam guyn ctam iranc random vernceky
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  
  // sonk for_ic dus em tve or myam skzbnakan guynery ereva u sksvi
  document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[1].style.background = getRandomRgb();
  document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[3].style.background = getRandomRgb();
  document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[5].style.background = getRandomRgb();
  document.body.style.background = getRandomRgb();
  document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[1].style.background = getRandomRgb();
  document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[3].style.background = getRandomRgb();
  document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[5].style.background = getRandomRgb();
  let x = 100;
  if(fordance == "disko"){
      for(let y = 0;y < x; y++){
      setInterval(()=>{
  setTimeout(() => {
  document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[1]. style.background = getRandomRgb(); 
  }, 500);
        setTimeout(() => {
      document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[1]. style.background = getRandomRgb(); 
  
        }, 1000);
        setTimeout(() => {
          document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[1]. style.background = getRandomRgb(); 
  
        }, 1500)
        setTimeout(() => {
   document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[3]. style.background = getRandomRgb(); 
  }, 500);
       
        setTimeout(() => {
      document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[3]. style.background = getRandomRgb(); 
  
        }, 1000);
        setTimeout(() => {
       document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[3]. style.background = getRandomRgb(); 
  
        }, 1500)
        setTimeout(() => {
      document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[5]. style.background = getRandomRgb(); 
  }, 500);
        setTimeout(() => {
     document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[5]. style.background = getRandomRgb(); 
  
        }, 1000);
        setTimeout(() => {
        document.body.firstElementChild.firstElementChild.firstElementChild.childNodes[5]. style.background = getRandomRgb(); 
        }, 1500)
        
        setTimeout(() => {
      document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[1]. style.background = getRandomRgb(); 
  }, 500);
        setTimeout(() => {
     document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[1]. style.background = getRandomRgb(); 
  
        }, 1000);
        setTimeout(() => {
       document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[1]. style.background = getRandomRgb(); 
        }, 1500)
  
    setTimeout(() => {
   document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[3]. style.background = getRandomRgb(); 
  }, 500);
        setTimeout(() => {
       document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[3]. style.background = getRandomRgb(); 
        }, 700);
        setTimeout(() => {
             document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[3]. style.background = getRandomRgb(); 
  
        }, 1000)
        setTimeout(() => {
       document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[5]. style.background = getRandomRgb(); 
  }, 500);
        setTimeout(() => {
        document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[5]. style.background = getRandomRgb(); 
        }, 700);
        setTimeout(() => {
        document.body.firstElementChild.firstElementChild.lastElementChild.childNodes[5]. style.background = getRandomRgb(); 
  
        }, 1000)
        setTimeout(() => {
         document.body.style.background = getRandomRgb();
        }, 500);
        setTimeout(() => {
         document.body.style.background = getRandomRgb();
        }, 1000);
        setTimeout(() => {
         document.body.style.background = getRandomRgb();
        }, 1500);
  }, 350)
        } 
    }
