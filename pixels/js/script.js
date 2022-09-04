var size=base.length;
var rand=Math.floor(Math.random()*size)
var numb=121;
console.log(rand)
var web=document.querySelector('.web');
pixelCreate();
var blockArray=document.querySelectorAll('.block');
var pixelArray=document.querySelectorAll('.pixel');
var retry=document.querySelector('.btn-retry');



// for(i=0;i<numb;i++){
//   blockArray[i].addEventListener('click',checked)
// }



//----------------------------------------------------------- 
var check=document.querySelector('.btn-test');

var result=document.querySelector('.result-text')
var resultList=document.querySelector('.result')
function testF(){
  var checkedArray=[];
  var mistakes=0
  for(i=0;i<numb;i++){
    blockArray[i].removeEventListener('click',checked)
    if(blockArray[i].classList.contains('checked')){
      checkedArray.push(1);
    }
    else(
      checkedArray.push(0)
    )
    if(checkedArray[i]!=base[rand][i]){
      mistakes=mistakes+1;
    }
    if(base[rand][i]==1){
      pixelArray[i].classList.add('checked')
    }
  }
  resultList.classList.add('active');
  if(mistakes==0){
  result.innerHTML='Идеально!'
  }
  if(mistakes>0){
    result.innerHTML='Близко'
  }
  if(mistakes>=5){
    result.innerHTML='Неплохо'
  }
  if(mistakes>=10){
    result.innerHTML='Увы'
  }
  
  console.log(mistakes)
}

//----------------------------------------------------------- 

var start=document.querySelector('.btn-start');
start.addEventListener('click',startGame)


//----------------------------------------------------------- 

retry.addEventListener('click',reload)

//----------------------------------------------------------- 
function pixelCreate(){
  for(i=0;i<numb;i++){
   var $block=document.createElement('div');
   $block.classList.add('block');
   web.prepend($block);
 }
 var blockArray=document.querySelectorAll('.block');
  for(i=0;i<numb;i++){
   var $pixel=document.createElement('div');
   $pixel.classList.add('pixel');
   blockArray[i].prepend($pixel);
 }
}

function startGame(){
  for(i=0;i<numb;i++){
    if(base[rand][i]==1){
      blockArray[i].classList.add('checked')
    }
  }
  setTimeout(clear, 3000)
  
}

function reload(){
  location.reload();
}

function clear(){
  for(i=0;i<numb;i++){
    if(blockArray[i].classList.contains('checked')){
      blockArray[i].classList.remove('checked')
    }
    blockArray[i].addEventListener('click',checked)
  }
  check.addEventListener('click',testF)
  
}

function checked(){
  event.target.classList.toggle('checked')
}
