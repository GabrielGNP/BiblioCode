let classToFind = ["liBookRed", "liBookBlue", "liBookSkyBlue", "liBookYellow", "liBookLightPurple", "liBookPurple", "liBookGreen", "liBookDarkGreen", "liBookOrange"];

function unHover(thisElement){
  
    $q("#pageRight").innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>posiciónese sobre alguno de los items</div>";
    thisElement.style.background = "";
    thisElement.style.borderRadius = "";
    let inputName = document.getElementById(thisElement.getAttribute('for')).name;
    changeContentPageRight(inputName);
}

  function hover(thisElement){
    let classFinded = "";
  
    for (let index = 0; index < classToFind.length; index++) {
        if(thisElement.parentNode.classList.contains(classToFind[index])){
            classFinded = classToFind[index];
            break;
        }
    }
    let objectInput = document.getElementById(thisElement.getAttribute('for'));
    switch(classFinded){
        case "liBookRed":
          thisElement.style.background = "#5f151581";
          break;
        case "liBookBlue":
          thisElement.style.background = "#12265788";
          break;
        case "liBookSkyBlue":
          thisElement.style.background = "#20549387";
          if(objectInput.name="optionBookCSS")selectInputCSS(objectInput.value);
          break;
        case "liBookYellow":
          thisElement.style.background = "#8d671f85";
          break;
        case "liBookLightPurple":
          thisElement.style.background = "#4b3a5d86";
          break;
        case "liBookPurple":
          thisElement.style.background = "#3e2a5983";
          break;
        case "liBookGreen":
          thisElement.style.background = "#1f4b1d82";
          break;
        case "liBookDarkGreen":
          thisElement.style.background = "#24452481";
          break;
        case "liBookOrange":
          thisElement.style.background = "#954c1882";
          if(objectInput.name="optionBookHTML")selectInputHTML(objectInput.value);
          break;   
        default:
          thisElement.style.background = "#5f151581";
          break;
    }
    thisElement.style.borderRadius = "7px";
  }
  
  
  function changeContentPageRight(nameInput){
    var inputSelected = document.querySelector('input[name="'+nameInput+'"]:checked');
    if(inputSelected == null){
      $q("#pageRight").innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>posiciónese sobre alguno de los items</div>";
    }else{
      switch(nameInput){
        case "optionBookHTML":
          selectInputHTML(inputSelected.value);
          break;
        case "optionBookCSS":
          selectInputCSS(inputSelected.value);
          break;
      }
      
    }
  }
  
  function closeAlertNoResponsive(){
    document.getElementById("alertNoResponsive").style.display = "none";
  }
 