const numOfFloors =10;
let leftLiftDirection = "up";
let rightLiftDirection = "up";
let threeLiftDirection = "up";
let fourLiftDirection = "up";
const duration=20;
let UpButton=[]
let outSideButtonThree='';
let outSideButtonFour='';

let upMap=new Map();
let leftLiftTotalArrayUp = [];
let leftLiftFrontDown = [];
let leftLiftBackDown = [];
let leftLiftFrontUp = [];
let leftLiftBackUp = [];
let leftLiftTotalArrayDown = [];

let rightLiftTotalArrayUp = [];
let rightLiftFrontDown = [];
let rightLiftBackDown = [];
let rightLiftFrontUp = [];
let rightLiftBackUp = [];
let rightLiftTotalArrayDown = [];

let threeLiftTotalArrayUp = [];
let threeLiftFrontDown = [];
let threeLiftBackDown = [];
let threeLiftFrontUp = [];
let threeLiftBackUp = [];
let threeLiftTotalArrayDown = [];

let fourLiftTotalArrayUp = [];
let fourLiftFrontDown = [];
let fourLiftBackDown = [];
let fourLiftFrontUp = [];
let fourLiftBackUp = [];
let fourLiftTotalArrayDown = [];


let leftLiftPos = 0;
let rightLiftPos = 0;
let threeLiftPos=0;
let fourLiftPos=0;

let leftLiftControls = 0;
let rightLiftControls = 0;
let threeLiftControls=0;
let fourLiftControls=0;








let currentPos;

let leftLiftArray = []
let rightLiftArray = []
let threeLiftArray = []
let fourLiftArray = []

let leftLiftTotalArray=[0];
let rightLiftTotalArray=[0];
let threeLiftTotalArray=[0];
let fourLiftTotalArray=[0];


setInterval(function () {
  
  var elementLift1=document.getElementById("lift1")
  var position1=elementLift1.getBoundingClientRect()
  console.log(fourLiftDirection)
  if(threeLiftPos===0)
{
  threeLiftDirection=""
}
if(fourLiftPos===0)
{
  fourLiftDirection=""
}
  


  leftLiftPos=Math.round(Math.abs((position1.top-100*numOfFloors-194.72918701171875)/100));
  if(leftLiftTotalArray.length!==0)
  {
    if(leftLiftTotalArray[0]-leftLiftPos>=0)
    {
      leftLiftDirection="up"
    }
   if(leftLiftTotalArray[0]-leftLiftPos<0) {
      leftLiftDirection="down"
    }
  }
  // console.log(leftLiftPos+" "+leftLiftDirection)









  var elementLift2=document.getElementById("lift2")
  var position2=elementLift2.getBoundingClientRect();
  rightLiftPos=Math.round(Math.abs((position2.top-100*numOfFloors-194.72918701171875)/100));
  if(rightLiftTotalArray.length!==0)
  {
    if(rightLiftTotalArray[0]-leftLiftPos>=0)
    {
      rightLiftDirection="up"
    }
    if(rightLiftTotalArray[0]-leftLiftPos<0) {
      rightLiftDirection="down"
    }
  }
  // console.log(rightLiftPos+" "+rightLiftDirection)

  
  // console.log(rightLiftPos)
  var elementLift3=document.getElementById("lift3")
  var position3=elementLift3.getBoundingClientRect();
  threeLiftPos=Math.round(Math.abs((position3.top-100*numOfFloors-194.72918701171875)/100));
 
  // console.log(threeLiftPos+" "+threeLiftDirection)
  // console.log(threeLiftPos)
  var elementLift4=document.getElementById("lift4")
  var position4=elementLift4.getBoundingClientRect();

  // console.log(fourLiftPos+" "+fourLiftDirection)
  // console.log(fourLiftPos)
 
 
}, 3000) 
const building = document.querySelector('.building');
const functionality = document.querySelector('.functionality');
const controlPanel = document.querySelector('.control-panel');

window.addEventListener('DOMContentLoaded', () => {
  building.innerHTML = displayBuilding(numOfFloors);
  controlPanel.innerHTML = displayCallButtons();
  display_Lift_Floor_Buttons(0, 'left');
  display_Lift_Floor_Buttons(0, 'right');
  display_Lift_Floor_Buttons(0, 'three');
  display_Lift_Floor_Buttons(0, 'four');


});


const displayBuilding = (numOfFloors) => {
  let floorHTML = '';
  for (let index = numOfFloors; index >= 0; index--) {
    floorHTML += `
      <div class="floor">
        <div class="entry entry--left">
          <div class="door door--left">
          <img src="/img/off.jpeg" width="50px" height="50px"/></div>
        </div>
        <div class="floor-num-cont">
          <div class="floor-num">${index}</div>
        </div>
        <div class="entry entry--right">
          <div class="door door--left">
          <img src="/img/off.jpeg" width="50px" height="50px"/></div>
        </div>
        <div class="floor-num-cont">
        <div class="floor-num">${index}</div>
      </div>
      <div class="entry entry--three">
      <div class="door door--left">
      <img src="/img/off.jpeg" width="50px" height="50px"/></div>
    </div>
    <div class="entry entry--four">
    <div class="door door--left">
    <img src="/img/off.jpeg" width="50px" height="50px"/></div>
  </div>
      </div>
    `;
  }
  return `
    <div class="building-text-cont">
    <div class="buildingHeading">
<h3>lift1(odd)</h3>
<h3>lift2(even)</h3>
<h3>lift3</h3>
<h3>lift4</h3>
</div>
      <div class="side-cont side-cont--building">
      </div>
    </div>
    <div class="lift lift--left" id="lift1">
      <div class="door door--left">
      <img src="/img/on.jpeg" width="50px" height="50px"/></div>
    </div>
    <div class="lift lift--right" id="lift2">
      <div class="door door--right">
      <img src="/img/on.jpeg" width="50px" height="50px"/>
      </div>
      </div>

      <div class="lift lift--three" id="lift3">
      <div class="door door--three">
      <img src="/img/on.jpeg" width="50px" height="50px"/>
      </div>
      </div>
      <div class="lift lift--four" id="lift4">
      <div class="door door--four">
      <img src="/img/on.jpeg" width="50px" height="50px"/>
      </div>
      </div>

    </div>
    ${floorHTML}

  `;
};






const displayCallButtons = () => {

  let displayAllButtonsHTML = '';
  for (let index = numOfFloors; index >= 0; index--) {
    displayAllButtonsHTML += `
      <div class="floor__buttons">
        <div class="call-button-cont--odd">
           
          <button class="call-button call-button--${index}-up" id="up-${index}">↑</button>
          <button class="call-button call-button--${index}-down" id="down-${index}">↓</button>
          
        </div>
        <div class="call-button-cont--even">
      
        <button class="call-button call-button--${index}-up" id="allup-${index}">↑</button>
        <button class="call-button call-button--${index}-down" id="alldown-${index}">↓</button>
        
      </div>
        </div>
        <div class="lift-buttons lift-buttons--left lift-buttons--${index}--left"></div>
        <div class="lift-buttons lift-buttons--right lift-buttons--${index}--right"></div>
        <div class="lift-buttons lift-buttons--three lift-buttons--${index}--three"></div>
        <div class="lift-buttons lift-buttons--four lift-buttons--${index}--four"></div>
      
    `;
  }
  return `
  <div class="controlPanelHeading">
<h3>lift1(odd)</h3>
<h3>lift2(even)</h3>
<h3>lift3</h3>
<h3>lift4</h3>
</div>
  
  
  
  
  
  ${displayAllButtonsHTML}`
};













let leftControlsTimer;
let rightControlsTimer;
const display_Lift_Floor_Buttons = (floor, side) => {
  let floorButtonsInnerHTML = '';
  let floorButtonsDiv = document.querySelector(`.lift-buttons--${floor}--${side}`);
  for (let index = numOfFloors; index >= 0; index--) {


    floorButtonsInnerHTML += `
    <button class="lift-floor-button--${side}" id="lift-floor-button-${side}--${index}">${index}</button>
    
   
  `;
  }

  floorButtonsDiv.innerHTML = floorButtonsInnerHTML;
};




























let leftOpacFade;
let rightOpacFade;
let threeOpacFade;
let fourOpacFade;
const moveLift = (floor, side) => {

  let lift = document.querySelector(`.lift--${side}`);
 

  if (side === 'left') {
    lift.style.transform = `translateY(${floor * -100}px)`;
 
   

 
    leftOpacFade = setTimeout(() => {
     
       
    
      document.getElementById(`lift-floor-button-left--${floor}`).style.backgroundColor = '#EFEFEF';
     document.getElementById(`up-${floor}`).style.backgroundColor="#EFEFEF";
     document.getElementById(`down-${floor}`).style.backgroundColor="#EFEFEF";
      if (leftLiftTotalArray.length !== 0) {
        moveLift( leftLiftTotalArray.shift(), 'left')
     
        if (leftLiftFrontDown.includes(leftLiftTotalArray[0])) {
          ;
          // console.log(leftLiftFrontDown.shift());
        }
        if (leftLiftFrontUp.includes(leftLiftTotalArray[0])) {
          ;
          // console.log(leftLiftFrontUp.shift());
        }
        if (leftLiftBackDown.includes(leftLiftTotalArray[0])) {
          ;
          // console.log(leftLiftBackDown.shift());
        }
        if (leftLiftBackUp.includes(leftLiftTotalArray[0])) {
          ;
          // console.log(leftLiftBackUp.shift());
        }
        // console.log("leftLiftTotalArray"+leftLiftTotalArray)
        

      }

      if (leftLiftTotalArray.length === 0) {
        leftLiftTotalArrayUp = [];
        leftLiftFrontDown = [];
        leftLiftBackDown = [];
        leftLiftFrontUp = [];
        leftLiftBackUp = [];
        leftLiftTotalArrayDown = [];
        leftLiftDirection=''
      }


    }, 3000
);



  } 
  else if(side==="right")
  {

    lift.style.transform = `translateY(${floor * -100}px)`;
    lift.style.opacity = '1';
    rightOpacFade = setTimeout(() => {
      document.getElementById(`up-${floor}`).style.backgroundColor="#EFEFEF";
      document.getElementById(`down-${floor}`).style.backgroundColor="#EFEFEF";
      document.getElementById(`lift-floor-button-right--${floor}`).style.backgroundColor = '#EFEFEF';
      if (rightLiftTotalArray.length !== 0) {
        moveLift(rightLiftPos = rightLiftTotalArray.shift(), 'right')

        if (rightLiftFrontDown.includes(rightLiftTotalArray[0])) {
          ;
          console.log(rightLiftFrontDown.shift());
        }
        if (rightLiftFrontUp.includes(rightLiftTotalArray[0])) {
          ;
          console.log(rightLiftFrontUp.shift());
        }
        if (rightLiftBackDown.includes(rightLiftTotalArray[0])) {
          ;
          console.log(rightLiftBackDown.shift());
        }
        if (rightLiftBackUp.includes(rightLiftTotalArray[0])) {
          ;
          console.log(rightLiftBackUp.shift());
        }
        console.log("rightLiftTotalArray"+rightLiftTotalArray)

      }
      if (rightLiftTotalArray.length === 0) {
        rightLiftTotalArrayUp = [];
        rightLiftFrontDown = [];
        rightLiftBackDown = [];
        rightLiftFrontUp = [];
        rightLiftBackUp = [];
        rightLiftTotalArrayDown = [];
        rightLiftDirection=''
      }




    }, 3000
);

  }
  else if(side==="three"){

    
    lift.style.transform = `translateY(${floor * -100}px)`;
    lift.style.opacity = '1';
    threeOpacFade = setTimeout(() => {
      
      if((threeLiftDirection==='up'||threeLiftDirection==="")&&threeLiftPos===floor&&(fourLiftDirection==="down"||fourLiftDirection===""))
      {document.getElementById(`allup-${floor}`).style.backgroundColor="#EFEFEF";
      outSideButtonThree=''
       }
      if((threeLiftDirection==='down'||threeLiftDirection==="")&&threeLiftPos===floor&&(fourLiftDirection==="up"||fourLiftDirection===""))
     {document.getElementById(`alldown-${floor}`).style.backgroundColor="#EFEFEF";
    outSideButtonThree=''}
     
     
    if(threeLiftDirection==="up"&&fourLiftDirection==="up"&&threeLiftPos===floor)
    {
      document.getElementById(`allup-${floor}`).style.backgroundColor="#EFEFEF";
    }
     document.getElementById(`lift-floor-button-three--${floor}`).style.backgroundColor = '#EFEFEF';

      if (threeLiftTotalArray.length !== 0) {
        moveLift(threeLiftPos = threeLiftTotalArray.shift(), 'three')

        if (threeLiftFrontDown.includes(threeLiftTotalArray[0])) {
          ;
          console.log(threeLiftFrontDown.shift());
        }
        if (threeLiftFrontUp.includes(threeLiftTotalArray[0])) {
          ;
          console.log(threeLiftFrontUp.shift());
        }
        if (threeLiftBackDown.includes(threeLiftTotalArray[0])) {
          ;
          console.log(threeLiftBackDown.shift());
        }
        if (threeLiftBackUp.includes(threeLiftTotalArray[0])) {
          ;
          console.log(threeLiftBackUp.shift());
        }
        console.log("Three LIft total Array"+threeLiftTotalArray)

      }
   
      if (threeLiftTotalArray.length === 0) {
        threeLiftTotalArrayUp = [];
        threeLiftFrontDown = [];
        threeLiftBackDown = [];
        threeLiftFrontUp = [];
        threeLiftBackUp = [];
        threeLiftTotalArrayDown = [];
        threeLiftDirection=''

      }



    }, 3000);

  }
  else{

    lift.style.transform = `translateY(${floor * -100}px)`;
    lift.style.opacity = '1';
    fourOpacFade = setTimeout(() => {
      if(fourLiftDirection==="down"&&fourLiftPos===floor||fourLiftDirection==="")
      {
        document.getElementById(`alldown-${floor}`).style.backgroundColor="#EFEFEF";
      }
      
    //   if((fourLiftDirection==='up'||fourLiftDirection==="")&&fourLiftPos===floor&&(threeLiftDirection==="down"||threeLiftDirection===""))
    //   {document.getElementById(`allup-${floor}`).style.backgroundColor="#EFEFEF";
    //   outSideButtonFour=''
    //    }
    //   if((fourLiftDirection==='down'||fourLiftDirection==="")&&fourLiftPos===floor&&(threeLiftDirection==="up"||threeLiftDirection===""))
    //  {document.getElementById(`alldown-${floor}`).style.backgroundColor="#EFEFEF";
    // outSideButtonFour=''}
      document.getElementById(`lift-floor-button-four--${floor}`).style.backgroundColor = '#EFEFEF';
      if (fourLiftTotalArray.length !== 0) {
        moveLift(fourLiftPos = fourLiftTotalArray.shift(), 'four')

        if (fourLiftFrontDown.includes(fourLiftTotalArray[0])) {
          ;
          console.log(fourLiftFrontDown.shift());
        }
        if (fourLiftFrontUp.includes(fourLiftTotalArray[0])) {
          ;
          console.log(fourLiftFrontUp.shift());
        }
        if (fourLiftBackDown.includes(fourLiftTotalArray[0])) {
          ;
          console.log(fourLiftBackDown.shift());
        }
        if (fourLiftBackUp.includes(fourLiftTotalArray[0])) {
          ;
          console.log(fourLiftBackUp.shift());
        }
        console.log(fourLiftTotalArray)

      }
      if (fourLiftTotalArray.length === 0) {
        fourLiftTotalArrayUp = [];
        fourLiftFrontDown = [];
        fourLiftBackDown = [];
        fourLiftFrontUp = [];
        fourLiftBackUp = [];
        fourLiftTotalArrayDown = [];
        fourLiftDirection=''
      }




    }, 2000);
  }

};
















const alertForLifts = () => {
  alert('There is already a lift available on this floor.');
};











const moveLiftWithControls = (index, side) => {
  let lift = document.querySelector(`.lift--${side}`);
  if (side === 'left') {
 
   

    clearTimeout(leftOpacFade);
  

  }






  else if(side==='right'){

    clearTimeout(rightOpacFade);
  }
  else if(side==='three')
  {
    clearTimeout(threeOpacFade);
  }
  else if(side==='four')
  {
    clearTimeout(fourOpacFade)
  }
    moveLift(index,side)




}















const functionalityHandler = (e) => {
  console.clear();
  
  for (let index = numOfFloors; index >= 0; index--) {

    if (e.target.classList.contains(`call-button--${index}-up`) || e.target.classList.contains(`call-button--${index}-down`)) {
   
      switch(e.target.id)
      {
      
        case `up-${index}`:
          
          if(index%2!==0)
          {
            
            document.getElementById(`up-${index}`).style.backgroundColor="Red";
          leftLiftSort(index,'left')
          }
          else{
            document.getElementById(`up-${index}`).style.backgroundColor="Red";
            rightLiftSort(index,'right')
          }

          break;
          
        case `down-${index}`:
          if(index%2!==0)
          {
            document.getElementById(`down-${index}`).style.backgroundColor="Red";
          leftLiftSort(index,'left')}
          else{
            document.getElementById(`down-${index}`).style.backgroundColor="Red";
            rightLiftSort(index,'right')
          }
          break;

          case `allup-${index}`:
            document.getElementById(`allup-${index}`).style.backgroundColor="Red";
          liftButtonSort(index,'up')
          break;

          case `alldown-${index}`:
            document.getElementById(`alldown-${index}`).style.backgroundColor="Red";
            liftButtonSort(index,'down')
            break;
      
   

      
      }
    


      


    










    }

    switch (e.target.id) {
      case `lift-floor-button-left--${index}`:

        if(e.target.style.backgroundColor!=="red"&& leftLiftPos!==index&&(index%2!==0||index===0))
        {
          
         document.getElementById(`lift-floor-button-left--${index}`).style.backgroundColor = 'Red';
        
         leftLiftSort(index);}


        break;


      case `lift-floor-button-right--${index}`:
        if(e.target.style.backgroundColor!=="red"&& rightLiftPos!==index&&index%2===0)
        {
         document.getElementById(`lift-floor-button-right--${index}`).style.backgroundColor = 'Red';
         rightLiftSort(index);}
        break;
        case `lift-floor-button-three--${index}`:
          if(e.target.style.backgroundColor!=="red"&& threeLiftPos!==index)
          {
           document.getElementById(`lift-floor-button-three--${index}`).style.backgroundColor = 'Red';
           threeLiftSort(index);}
        
          break;
          case `lift-floor-button-four--${index}`:
            if(e.target.style.backgroundColor!=="red"&& fourLiftPos!==index)
            {
             document.getElementById(`lift-floor-button-four--${index}`).style.backgroundColor = 'Red';
             fourLiftSort(index);}
    
           
            break;
    }
  }
}


functionality.addEventListener('click', functionalityHandler);


function liftButtonSort(index,direction)
{
 
if(direction==='up')
{

  if(threeLiftDirection==="down"&&(fourLiftDirection===""||fourLiftDirection==="up"))
  {
    fourLiftSort(index,"four");
    return;
  }
 
  if(fourLiftDirection==="down"&&(threeLiftDirection===""||threeLiftDirection==="up"))
  {
    threeLiftSort(index,"four")
    return;
  }
  if(threeLiftDirection==="up"&&fourLiftDirection==="up")
  {
    threeLiftSort(index,"three")
    return;
  }
  if(threeLiftDirection==="up")
  {
    threeLiftSort(index,"three")
    return;
  }

  if(threeLiftDirection===""&&fourLiftDirection==="up")
  {
    if(Math.abs(index-threeLiftPos)<=Math.abs(index-fourLiftPos))
    {
      threeLiftSort(index,"three")
      return;
    }
  }
if(threeLiftPos>index&&fourLiftDirection=="")
{
  fourLiftSort(index,"four")
  return;
}





  if(threeLiftDirection===""&&fourLiftDirection==="")
  {
    if(Math.abs(index-threeLiftPos)<=Math.abs(index-fourLiftPos))
    {
      threeLiftSort(index,"three")
      return;
   
    }
    else{
      fourLiftSort(index,"four")
      return
    }
  }

  
//   if((threeLiftDirection==="up"||threeLiftDirection==="")||(fourLiftDirection==="up"||fourLiftDirection===""))
// {
//  if(Math.abs(index-threeLiftPos)<=Math.abs(index-fourLiftPos))
//  {
//    threeLiftSort(index,"three")
//  }}
}



  
  


else{
  console.log(Math.abs(index-threeLiftPos));
  console.log(Math.abs(index-fourLiftPos))
  if(threeLiftDirection==="up"&&fourLiftDirection==="up")
  {
    
      fourLiftSort(index,"four")

     
  }
  if(threeLiftDirection===""&&fourLiftDirection==="")
{
 
  if(Math.abs(index-threeLiftPos)<=Math.abs(index-fourLiftPos))
  {
    threeLiftSort(index,"three")
    return;

  }
  else{
    fourLiftSort(index,"four")
    return;
  }
}
  if(threeLiftDirection==="up"&&(fourLiftDirection===""||fourLiftDirection==="down"))
  {
    fourLiftSort(index,"four")
    return;
  }
  if(fourLiftDirection==="up"&&(threeLiftDirection===""||threeLiftDirection==="down"))
  {
    threeLiftSort(index,"three")
    return;
  }
if(threeLiftDirection==="down"&&fourLiftDirection==="")
{
  if(Math.abs(index-threeLiftPos)<=Math.abs(index-fourLiftPos))
  {
    threeLiftSort(index,"three")
    return;

  }
  else{
    fourLiftSort(index,"four")
    return;
  }

}
if(threeLiftDirection===""&&fourLiftDirection==="down")
{
  if(Math.abs(index-threeLiftArray)<=Math.abs(index-fourLiftArray))
  {
    threeLiftSort(index,"three")
    return
  }
  else{
    fourLiftSort(index,"four")
    return
  }
}


 



}
}

function leftLiftSort(index) {
  leftLiftArray.push(index);

  if (index - leftLiftPos > 0) {
    leftLiftDirection = "up"
  }
 if(index-leftLiftPos<0) {
    leftLiftDirection = "down"
  }
  if (leftLiftDirection === "up") {

    if (leftLiftPos < index) {
      leftLiftFrontUp.push(index);
      leftLiftFrontUp.sort(function (a, b) { return a - b });
    }
    else {
      leftLiftBackUp.push(index);
      leftLiftBackUp.sort(function (a, b) { return b - a });
    }
  

    leftLiftTotalArrayUp = leftLiftFrontUp.concat(leftLiftBackUp);
  }
  if(leftLiftDirection==="down") {



    if (leftLiftPos < index) {
      leftLiftFrontDown.push(index);
      leftLiftFrontDown.sort(function (a, b) { return a - b });
    }
    else {


      leftLiftBackDown.push(index)
      leftLiftBackDown.sort(function (a, b) { return b - a; })
    }
    


    leftLiftTotalArrayDown = leftLiftBackDown.concat(leftLiftFrontDown);
  }

  if (leftLiftDirection === "up") {
    leftLiftTotalArray = leftLiftTotalArrayDown.concat(leftLiftTotalArrayUp);
    
    moveLiftWithControls(leftLiftTotalArray[0], 'left');
    leftLiftDirection="up"


  }
  else {


    leftLiftTotalArray = leftLiftTotalArrayUp.concat(leftLiftTotalArrayDown);

    moveLiftWithControls(leftLiftTotalArray[0], 'left');
    leftLiftDirection="down"





  }
}





function rightLiftSort(index) {
  rightLiftArray.push(index);


  if (index - rightLiftPos > 0) {
    rightLiftDirection = "up"
  }
 if(index - rightLiftPos < 0) {
    rightLiftDirection = "down"
  }
  if (rightLiftDirection === "up") {

    if (rightLiftPos < index) {
      rightLiftFrontUp.push(index);
      rightLiftFrontUp.sort(function (a, b) { return a - b });
    }
    else {
      rightLiftBackUp.push(index);
      rightLiftBackUp.sort(function (a, b) { return b - a });
    }
    console.log("rightLiftFrontUp" + rightLiftFrontUp);
    console.log("rightLiftBackUp" + rightLiftBackUp);
    

    rightLiftTotalArrayUp = rightLiftFrontUp.concat(rightLiftBackUp);
  }
  else {



    if (rightLiftPos < index) {
      rightLiftFrontDown.push(index);
      rightLiftFrontDown.sort(function (a, b) { return a - b });
    }
    else {


      rightLiftBackDown.push(index)
      rightLiftBackDown.sort(function (a, b) { return b - a; })
    }
    console.log("rightLiftFrontDown" + rightLiftFrontDown)
    console.log("rightLiftBackDown" + rightLiftBackDown)


    rightLiftTotalArrayDown = rightLiftBackDown.concat(rightLiftFrontDown);
  }

  if (rightLiftDirection === "up") {
    rightLiftTotalArray = rightLiftTotalArrayDown.concat(rightLiftTotalArrayUp);

    moveLiftWithControls(rightLiftTotalArray[0], 'right');
    rightLiftDirection="up"


  }
  else {


    rightLiftTotalArray = rightLiftTotalArrayUp.concat(rightLiftTotalArrayDown);

    moveLiftWithControls(rightLiftTotalArray[0], 'right');

rightLiftDirection="down"




  }
}








function threeLiftSort(index) {
  threeLiftArray.push(index);


  if (index - threeLiftPos > 0) {
    threeLiftDirection = "up"
  }
  if (index - threeLiftPos < 0){
    threeLiftDirection = "down"
  }
  if (threeLiftDirection === "up") {

    if (threeLiftPos < index) {
      threeLiftFrontUp.push(index);
      threeLiftFrontUp.sort(function (a, b) { return a - b });
    }
    else {
      threeLiftBackUp.push(index);
      threeLiftBackUp.sort(function (a, b) { return b - a });
    }
    console.log("threeLiftFrontUp" + threeLiftFrontUp);
    console.log("threeLiftBackUp" + threeLiftBackUp);
    

    threeLiftTotalArrayUp = threeLiftFrontUp.concat(threeLiftBackUp);
  }
  else {



    if (threeLiftPos < index) {
      threeLiftFrontDown.push(index);
      threeLiftFrontDown.sort(function (a, b) { return a - b });
    }
    else {


      threeLiftBackDown.push(index)
      threeLiftBackDown.sort(function (a, b) { return b - a; })
    }
    console.log("threeLiftFrontDown" + threeLiftFrontDown)
    console.log("threeLiftBackDown" + threeLiftBackDown)


    threeLiftTotalArrayDown = threeLiftBackDown.concat(threeLiftFrontDown);
  }

  if (threeLiftDirection === "up") {
    threeLiftTotalArray = threeLiftTotalArrayDown.concat(threeLiftTotalArrayUp);

    moveLiftWithControls(threeLiftTotalArray[0], 'three');
threeLiftDirection="up"

  }
  else {


    threeLiftTotalArray = threeLiftTotalArrayUp.concat(threeLiftTotalArrayDown);

    moveLiftWithControls(threeLiftTotalArray[0], 'three');
threeLiftDirection="down"





  }
}


function fourLiftSort(index) {
  fourLiftArray.push(index);


  if (index - fourLiftPos > 0) {
    fourLiftDirection = "up"
  }
  else {
    fourLiftDirection = "down"
  }
  if (fourLiftDirection === "up") {

    if (fourLiftPos < index) {
      fourLiftFrontUp.push(index);
      fourLiftFrontUp.sort(function (a, b) { return a - b });
    }
    else {
      fourLiftBackUp.push(index);
      fourLiftBackUp.sort(function (a, b) { return b - a });
    }
    console.log("fourLiftFrontUp" + fourLiftFrontUp);
    console.log("fourLiftBackUp" + fourLiftBackUp);
    

    fourLiftTotalArrayUp = fourLiftFrontUp.concat(fourLiftBackUp);
  }
  else {



    if (fourLiftPos < index) {
      fourLiftFrontDown.push(index);
      fourLiftFrontDown.sort(function (a, b) { return a - b });
    }
    else {


      fourLiftBackDown.push(index)
      fourLiftBackDown.sort(function (a, b) { return b - a; })
    }
    console.log("fourLiftFrontDown" + fourLiftFrontDown)
    console.log("fourLiftBackDown" + fourLiftBackDown)


    fourLiftTotalArrayDown = fourLiftBackDown.concat(fourLiftFrontDown);
  }

  if (fourLiftDirection === "up") {
    fourLiftTotalArray = fourLiftTotalArrayDown.concat(fourLiftTotalArrayUp);

    moveLiftWithControls(fourLiftTotalArray[0], 'four');
    fourLiftDirection="up"


  }
  else {


    fourLiftTotalArray = fourLiftTotalArrayUp.concat(fourLiftTotalArrayDown);

    moveLiftWithControls(fourLiftTotalArray[0], 'four');
    fourLiftDirection="down"






  }
}

