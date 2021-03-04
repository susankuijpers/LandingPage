//DOM elements

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),

// Options
const showAmPm = true;

// tijd laten zien

function showTime() {
    let today =  new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //kies AM of PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12uur formaat
    hour  = hour % 12 || 12;

    // output tijd
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// add een nulleke
 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set achtergrond fotokes en begroeting

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12 ) {
      //ochtend
      document.body.style.backgroundImage = "url('./img/ochtend.jpg')";
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18){
       //namiddag 
       document.body.style.backgroundImage = "url('./img/namiddag.jpg')";
       greeting.textContent = 'Good Afternoon, ';
    } else {
        //avond
        document.body.style.backgroundImage = "url('./img/avond.jpg')";
        greeting.textContent = 'Good Evening, ';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
  
  // Set Name
  function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

// get focus

function getFocus(){
    if(localStorage.getItem('focus') === null){
       focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localeStorage.getItem('focus');
    }
}

  // Set focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run 

showTime();
setBgGreet();
getName();
getFocus();