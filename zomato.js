window.onload=()=>{const sliderTrack=document.querySelector('.slider-track');
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');

let currIdx=0;

const cardWidth=document.querySelector('.card').offsetWidth+20; //width of each card + margin (assumend)
const visibleCards=Math.floor(document.querySelector('.slider-container').offsetWidth/cardWidth);//let 1600 /400 = 4 vis cards 
//big conatiner width /each card width 
const totalCards=document.querySelectorAll('.slider-track .card').length;//all cards - arr ka length 
const maxIdxVis=totalCards-visibleCards;//You have 10 total cards.Your container can show 3 cards at a time. maxIndex = 10 - 3 = 7o the slider can move up to index 7, showing cards 8, 9, and 10 at the end.


//visulaization
//currentIndex = 0 → [Card 0][Card 1][Card 2] min idx 0
//currentIndex = 1 → [Card 1][Card 2][Card 3]
//currentIndex = 2 → [Card 2][Card 3][Card 4]
//currentIndex = 3 → [Card 3][Card 4][Card 5] max =index 3 total =6-3 visible=3 visible66666666666666666666666666666666666


function updateSlider() 
{
  currIdx=Math.max(0,Math.min(currIdx,maxIdxVis));//clamping You never scroll before Card 0 (Math.max(0, ...))You never scroll beyond Card 3 (Math.min(currentIndex, maxIndex)) //Math.min(currentIndex, maxIndex) → Math.min(5, 3) → 3//Math.max(0, 3) → 3
  sliderTrack.style.transform= `translateX(-${currIdx * cardWidth}px)`;//currentIndex = 2cardWidth = 220pxtranslateX(-440px)This shifts the entire track 440 pixels to the left, showing the third set of cards.
  
  prevBtn.disabled=currIdx===0;
  nextBtn.disabled=currIdx===maxIdxVis;
};

prevBtn.addEventListener("click",()=>
{
  currIdx--;
  updateSlider();
});

nextBtn.addEventListener("click",()=>
{
  currIdx++;
  updateSlider();
});

window.addEventListener('resize',updateSlider);

updateSlider(); // Initialize slider position

//autoplay
setInterval(function()
{ currIdx=(currIdx+1>maxIdxVis)?0:currIdx+1; //what tis the need to go back to start 
  updateSlider();//slider tranform
},3000);
};


//learning outcmes - 1) dlamping not going beyond a particular pt and returning to start 2) set interval use for autoplay