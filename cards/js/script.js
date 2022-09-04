var frame=document.querySelector('.cards');
var moves=document.querySelector('.moves span');
var rand=[];
var numb=30;
var count=0;
var btn=document.querySelector('.btn');
var cards;
var steps=0;
var diff
cardCreate();
cards=document.querySelectorAll('.card');
shuffler();
cardNumb();

//перемешивание
function shuffler(){
  rand.sort(()=>Math.random()-0.5);
}
for(i=0;i<cards.length;i++){
   cards[i].addEventListener('click',check)
}

// наполнение
function cardNumb(){
  for(i=0;i<numb;i++){
    cards[i].style.background='url(img/'+rand[i]+'.jpg)';
    cards[i].style.backgroundSize='cover';
    cards[i].style.backgroundColor='black';
  }
}

// Создание карт
function cardCreate(){
   for(i=0;i<numb;i++){
    var $block=document.createElement('div');
    $block.classList.add('block');
    frame.prepend($block);
  }
  var blockArray=document.querySelectorAll('.block');
  for(i=0;i<numb;i++){
    var $card=document.createElement('div');
    $card.classList.add('card');
    blockArray[i].prepend($card);
  }
  for(i=0;i<numb/2;i++){
    rand.push(i+1);
    rand.push(i+1);
  }
  }

// проверка
function check(){
  
  var chekeds=document.querySelectorAll('.check')
  if(!event.target.classList.contains('check')){
    steps=steps+1;
    moves.innerHTML=steps;
  }
  event.target.classList.add('check')
  if(chekeds.length>1){
    if(chekeds[0].style.background==chekeds[1].style.background){
      chekeds[0].style.display='none';
      chekeds[1].style.display='none';
      chekeds[0].classList.remove('check');
      chekeds[1].classList.remove('check');
      count=count+1;
      if(count==numb/2-1){
        var result=document.querySelector('.result');
        var btn=document.querySelector('.btn');
        var stats=document.querySelector('.stats');
        stats.classList.add('hide');
        result.classList.add('active')
        btn.classList.add('active')
        result.innerHTML='Победа! <br> Время: '+diff+'секунд <br> Ходов: '+steps;
        btn.addEventListener('click',restart)
        
      }     
    }
    else{
      chekeds[0].classList.remove('check');
      chekeds[1].classList.remove('check');
      
    }
  }
  
}

function restart(){
  location.reload()
}

// таймер
var startTime;
var cardsBox=document.querySelector('.cards');
cardsBox.addEventListener('click',createTimer);
function createTimer(){
  startTime=new Date();
  cardsBox.removeEventListener('click',createTimer);
  function timerCalc(){
    diff=Math.floor((new Date() - startTime)/1000);
    
    timer.innerHTML=diff+'s';
  }
  timerCalc();
  let timerId=setInterval(timerCalc,1000)
}

var timer=document.querySelector('.timer span')
console.log(timer)

