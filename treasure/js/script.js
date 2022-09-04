var web = document.querySelector('.web');
var numb = 81;
var count=0;
var result=document.querySelector('.result')
blockCreate()
var blockArray = document.querySelectorAll('.block');
pathCreate()
var pathArray = document.querySelectorAll('.path');
levelCreate()
// ------------Управление ПК

document.addEventListener('keyup', function () {
  if (event.code == 'ArrowUp') {
    for (i = 0; i < numb; i++) {
      if (i - 9 >= 0) {
        if (pathArray[i].classList.contains('char')&&!blockArray[i-9].classList.contains('grass')) {
          pathArray[i].classList.remove('char')
          pathArray[i - 9].classList.add('char')
          pathArray[i - 9].classList.toggle('active')
          checkWin()
          count=count+1;
          break
        }
      }
    }
  }
  if (event.code == 'ArrowDown') {
    for (i = 0; i < numb; i++) {
      if (i + 9 < numb) {
        if (pathArray[i].classList.contains('char')&&!blockArray[i+9].classList.contains('grass')) {
          pathArray[i].classList.remove('char')
          pathArray[i + 9].classList.add('char')
          pathArray[i + 9].classList.toggle('active')
          checkWin()
          count=count+1;
          break
        }
      }
      else {
        break
      }
    }
  }
  if (event.code == 'ArrowRight') {
    for (i = 0; i < numb; i++) {
      if (!right.includes(i)) {
        if (pathArray[i].classList.contains('char')&&!blockArray[i+1].classList.contains('grass')) {
          pathArray[i].classList.remove('char')
          pathArray[i + 1].classList.add('char')
          pathArray[i + 1].classList.toggle('active')
          checkWin()
          count=count+1;
          break
        }
      }
    }
  }
  if (event.code == 'ArrowLeft') {
    for (i = 0; i < numb; i++) {
      if (!left.includes(i)) {
        if (pathArray[i].classList.contains('char')&&!blockArray[i-1].classList.contains('grass')) {
          pathArray[i].classList.remove('char')
          pathArray[i - 1].classList.add('char')
          pathArray[i - 1].classList.toggle('active')
          checkWin()
          count=count+1;
          break
        }
      }
    }
  }
})
// ------------Управление телефон
var btnUp=document.querySelector('.up')
var btnLeft=document.querySelector('.left')
var btnRight=document.querySelector('.right')
var btnDown=document.querySelector('.down')

btnUp.addEventListener('click', function () {
  for (i = 0; i < numb; i++) {
    if (i - 9 >= 0) {
      if (pathArray[i].classList.contains('char')&&!blockArray[i-9].classList.contains('grass')) {
        pathArray[i].classList.remove('char')
        pathArray[i - 9].classList.add('char')
        pathArray[i - 9].classList.toggle('active')
        checkWin()
        count=count+1;
        break
      }
    }
  }
}
)

btnDown.addEventListener('click', function () {
  for (i = 0; i < numb; i++) {
    if (i + 9 < numb) {
      if (pathArray[i].classList.contains('char')&&!blockArray[i+9].classList.contains('grass')) {
        pathArray[i].classList.remove('char')
        pathArray[i + 9].classList.add('char')
        pathArray[i + 9].classList.toggle('active')
        checkWin()
        count=count+1;
        break
      }
    }
    else {
      break
    }
  }
})

btnLeft.addEventListener('click', function () {
  for (i = 0; i < numb; i++) {
    if (!left.includes(i)) {
      if (pathArray[i].classList.contains('char')&&!blockArray[i-1].classList.contains('grass')) {
        pathArray[i].classList.remove('char')
        pathArray[i - 1].classList.add('char')
        pathArray[i - 1].classList.toggle('active')
        checkWin()
        count=count+1;
        break
      }
    }
  }
})

btnRight.addEventListener('click', function () {
  for (i = 0; i < numb; i++) {
    if (!right.includes(i)) {
      if (pathArray[i].classList.contains('char')&&!blockArray[i+1].classList.contains('grass')) {
        pathArray[i].classList.remove('char')
        pathArray[i + 1].classList.add('char')
        pathArray[i + 1].classList.toggle('active')
        checkWin()
        count=count+1;
        break
      }
    }
  }
})

// --------------------------------------------------------------

function blockCreate() {
  for (i = 0; i < numb; i++) {
    var $block = document.createElement('div');
    $block.classList.add('block');
    web.prepend($block);
  }

}
function pathCreate() {
  for (i = 0; i < numb; i++) {
    var $path = document.createElement('div');
    $path.classList.add('path');
    blockArray[i].prepend($path);
  }
}

function levelCreate() {
  for (i = 0; i < numb; i++) {
    if (base[0][i] == 1) {
      blockArray[i].classList.add('active')
    }
    if (base[0][i] == 0) {
      blockArray[i].classList.add('grass')
    }
    if (base[0][i] == 2) {
      blockArray[i].classList.add('active')
      pathArray[i].classList.add('active')
      pathArray[i].classList.add('char')
    }
    if (base[0][i] == 3) {
      blockArray[i].classList.add('active')
      pathArray[i].classList.add('finish')

    }
  }

}

function checkWin(){
  var cheker=0;
  for(i=0;i<numb;i++){
    if(pathArray[i].classList.contains('active')){
      cheker=cheker+1;
      if(cheker==firstNumb){
        result.classList.add('active')
        if(count==firstNumb-2){
          result.innerHTML='Победа!<br> Ходов: '+count+'<br>Идеально!!!';
        }
        else{
          result.innerHTML='Победа!<br> Ходов: '+count+'<br>Можно лучше...';
        }
      }
    }
  }
}



