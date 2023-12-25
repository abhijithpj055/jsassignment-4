//Question 1
    
    document.getElementById('Action').addEventListener('click',function(){
        document.getElementById('colorSelect').removeChild(document.getElementById('colorSelect').lastElementChild)
    })
  

//Question 2
    function changeColor(){
        let selectedColor = document.getElementById('colorSelect').value;
         document.getElementById('textcolor').style.color=selectedColor;
        
    }


    //Question 3
        function getNames(){
        var firstName = document.getElementById('form1').elements['fname'].value;
        var secondName = document.getElementById('form1').elements['lname'].value;
      
        console.log(firstName);
        console.log(secondName);
      }


      //Question 4
      function sphereVolume(){
    
        var volume;
        var radius = document.getElementById('radius').value;
        radius = Math.abs(radius);
        volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
        document.getElementById('volume').value = volume;
        return false;
       } 
      window.onload = document.getElementById('sphere-volume').onsubmit = sphereVolume;


//Question 5
      document.getElementById('btn').addEventListener('click',changeImage)

function changeImage(){
    document.getElementById('change').src='download.jpeg'
}


//Question 6
function newWindow(){
    window.open('https://www.w3schools.com/');
  }

  //Question 7

  function reDirect(){
    window.location.href='https://www.w3schools.com/';
 }

 //Question 8

 function display(){
    let currentUrl= window.location.href;
    let url = new URL(currentUrl);
    let protocol= url.protocol;
    let hostName=url.hostname;
    let pmeter= url.searchParams;
    let result= " URL's Protocol : " + protocol + "  " + "Host name : " + hostName + "   "+ "Query Parameters : " + pmeter;
    const info= document.getElementById('info');
    info.innerText= result;
  }

//Question 9

  function reloadPage(){
    location.reload();
}

//Question 10
    function screenSize(){
    document.getElementById("sheight").innerHTML="Screen height :"+ screen.height;
    document.getElementById("swidth").innerHTML="Screen Width :"+ screen.width;
    
  }

//Question 11

  function countdownTimer(){
    setTimer();
    clear= setInterval(setTimer,1000);

 }