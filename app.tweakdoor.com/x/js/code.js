var code, getIt, errorMessage;

getIt = document.getElementById("get");
errorMessage = document.getElementById("P-For-Errors");

getIt.addEventListener("click", callLinks);

function callLinks (){
  code = document.getElementById("code").value;

  switch (code){
    case "2":
      window.location.href = "https://tweakdoor.com/"
      break;

      
          case "1":
      window.location.href = "https://tweakdoor.com/";
      break;
      

      case "":
        errorMessage.innerHTML = "Not Foundە";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: myFirstFont ;";
        break;
  
      default:
        errorMessage.innerHTML = "Not Found";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: myFirstFont ;";
        break;
  
    }
  }