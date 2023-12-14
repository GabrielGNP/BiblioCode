
document.addEventListener('DOMContentLoaded', function() {
    
      
    $q(".librarie").style.top = "0px";
    //$q(".lectern").style.top = "300px";
    $q(".space_librarie_lectern").style.top = "285px";
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth', // Agrega una animación suave.
    });
    $gi("bookDeconstructedMath").addEventListener('click', selectBook);
    $gi("bookJavaScript").addEventListener('click', selectBook);
    $gi("bookCPlusPlus").addEventListener('click', selectBook);
    $gi("bookJava").addEventListener('click', selectBook);
    $gi("bookDart").addEventListener('click', selectBook);
    $gi("bookCSharp").addEventListener('click', selectBook);
    $gi("bookPseudocode").addEventListener('click', selectBook);
    $gi("bookPHP").addEventListener('click', selectBook);
    $gi("bookHTML").addEventListener('click', selectBook);
    $gi("bookCSS").addEventListener('click', selectBook);
    $gi("bookGit").addEventListener('click', selectBook);
    $gi("bookMagicTest2").addEventListener('click', selectBook);
    $gi("bookMagicTest3").addEventListener('click', selectBook);
    $gi("bookMagicTest4").addEventListener('click', selectBook);
    $gi("bookMagicTest5").addEventListener('click', selectBook);
});

function selectBook(){
  $q(".librarie").style.top = "-310px";
  $q(".space_librarie_lectern").style.top = "-25px";  
  $q(".space_librarie_lectern").style.transition = "1s";
  $q(".lectern").style.top = "0px";
  $q(".lectern").style.transition = "1s";
  
  
  let bookSelected = this.cloneNode(true);
    
  let idBookSelected = this.id + "Selected";
  bookSelected.id =  idBookSelected;
  let coordsBook = this.getBoundingClientRect();
    
  bookSelected.classList.add("space_book_selected");
    
  this.classList.add("transparent");
  this.querySelector(".book").classList.add("transparent");
  this.querySelector(".back__book").classList.add("transparent");
  this.querySelectorAll(".line").forEach((line => {
    line.classList.add("transparent");
  }))
  this.querySelector(".lomo").classList.add("transparent");
  this.querySelector(".titleBook").classList.add("transparent");
  
  let title = this.querySelector(".titleBook").textContent;
    
  let bookCoverFront = document.createElement("div");
  bookCoverFront.classList.add("bookCoverFront");
  
  let bookCoverFrontTop = document.createElement("div");
  bookCoverFrontTop.classList.add("bookCoverFrontTop");
  let divTitle = document.createElement("div");
  divTitle.classList.add("bookCoverFrontTitle");
  divTitle.textContent = title;
  
  let bookCoverFrontDown = document.createElement("div");
  bookCoverFrontDown.classList.add("bookCoverFrontDown");
    
  let bookCoverBack = document.createElement("div");
  bookCoverBack.classList.add("bookCoverBack");
  let bookPage = [];
  for (let n = 0; n < 15; n++) {
    let page= document.createElement("div");
    page.classList.add("bookPage");
    page.id = ("page"+n);
    bookPage[n] = page;
  }
  
  bookSelected.style.top = (coordsBook.top+17)+"px";
  bookSelected.style.left = (coordsBook.left-1)+"px";
  bookSelected.querySelector(".back__book").style.display = "none";
  bookSelected.querySelector(".book").style.height = "250px";
  bookSelected.querySelector(".lomo").style.height = "240px";
  bookSelected.querySelector(".lomo").style.top = "0px";
  bookSelected.querySelector(".lomo").style.borderTop = "5px solid #00000033";
  let colorBook;
  this.querySelector(".book").classList.forEach(classString =>{
    if(classString != "transparent"){
      colorBook=classString.replace("book", "");
    }
  });
  bookCoverFrontTop.classList.add("bookCover"+colorBook);
  bookCoverFrontDown.classList.add("bookCover"+colorBook);
  bookCoverBack.classList.add("bookCover"+colorBook);
  document.querySelector("body").appendChild(bookSelected);
  document.querySelector("#"+idBookSelected).appendChild(bookCoverFront);
  let coverFrontClone = bookCoverFront.cloneNode(true);
  coverFrontClone.appendChild(bookCoverFrontTop.cloneNode(true));
  coverFrontClone.appendChild(bookCoverFrontDown.cloneNode(true));
  document.querySelector("#"+idBookSelected).appendChild(bookCoverBack);
  bookPage.forEach(page => {
    bookCoverBack.appendChild(page);
  });
  
  coverFrontClone.id = "suportCover";
  document.querySelector("#"+idBookSelected).appendChild(coverFrontClone);
  bookCoverFront.appendChild(bookCoverFrontTop);
  bookCoverFront.appendChild(bookCoverFrontDown);
  bookSelected.querySelector(".bookCoverFrontTop").appendChild(divTitle);
  coverFrontClone.querySelector(".bookCoverFrontTop").appendChild(divTitle);
  

  let lectern = $gi("bookSiteLectern");
  let coordsLectern = lectern.getBoundingClientRect();
  $q("#"+idBookSelected).style.top = (coordsLectern.height/2.5) + "px";
  $q("#"+idBookSelected).style.left = (coordsLectern.width/2) + "px";
  let book = document.querySelector("#"+idBookSelected).querySelector(".book");
  book.style.transform = "rotateY(-88.5deg)";
  book.style.left="150px";
  book.style.height="0px";

  bookCoverFront.style.transform = "rotateY(0deg)";
  bookCoverBack.style.transform = "rotateY(0deg)";
  coverFrontClone.style.transform = "rotateY(0deg)";
  bookCoverFront.style.left = "50%";
  bookCoverBack.style.left = "50%";
  coverFrontClone.style.left = "50%";
  
  /*
    // Obtén el elemento que tiene capacidad de desplazamiento, como window o un div con desplazamiento.
    const scrollElement = document.documentElement; // En este ejemplo, usamos el elemento raíz del documento (html).

    // Calcula la altura total del contenido y la altura visible del elemento.
    const totalHeight = scrollElement.scrollHeight;
    const visibleHeight = scrollElement.clientHeight;

    // Establece el valor scrollTop para ir al final del scroll.
    //scrollElement.scrollTop = totalHeight - visibleHeight;
    
    scrollElement.scrollTo({
        top: totalHeight - visibleHeight,
        behavior: 'smooth', // Agrega una animación suave.
      });*/
      
      
      
  setTimeout(function () {
      
    bookCoverFront.style.transform = "rotateY(-180deg)";
    coverFrontClone.style.transform = "rotateY(-180deg)";
  
    setTimeout(function () {
      document.getElementById(coverFrontClone.id).remove();
      for (let nPage = 0; nPage < bookPage.length-1; nPage++) {
        setTimeout(function () {
          bookPage[nPage].style.transform = "rotateY(-180deg)";
        }, -100+(nPage*100));
      }
      setTimeout(function(){
        //$q("#"+idBookSelected).style.transform = "scale(4.0)";
        $q("#"+idBookSelected).style.height = "100%";
        $q("#"+idBookSelected).style.width = "100%";
        $q("#"+idBookSelected).style.top = "0px";
        $q("#"+idBookSelected).style.left = "0px";
        $q("#"+idBookSelected).querySelector(".bookCoverFront").style.width = "50%";
        $q("#"+idBookSelected).querySelector(".bookCoverFront").style.height = "100%";
        $q("#"+idBookSelected).querySelector(".bookCoverFrontTop").style.width = "100%";
        $q("#"+idBookSelected).querySelector(".bookCoverFrontTop").style.height = "100%";
        $q("#"+idBookSelected).querySelector(".bookCoverFrontDown").style.width = "100%";
        $q("#"+idBookSelected).querySelector(".bookCoverFrontDown").style.height = "100%";
        $q("#"+idBookSelected).querySelector(".bookCoverBack").style.width = "50%";
        $q("#"+idBookSelected).querySelector(".bookCoverBack").style.height = "100%";
        for (let nPage = 0; nPage < bookPage.length-1; nPage++) {
          if(nPage != 0 && nPage != bookPage.length-1){
            bookPage[nPage].remove();
          }            
        }
        let firstPage = bookPage.shift();
        let lastPage = bookPage.pop();
        
        firstPage.id = "firstPage";
        lastPage.id = "lastPage";
        bookPage = [firstPage, lastPage];

        $q(".space_book_selected").style.zIndex = "0";
        setTimeout(function () {
          createCloseButton();
          showDataBook(idBookSelected);
        }, 1600);
        
      },bookPage.length*100+500);
    }, 500);
  }, 1500);
  /**/
}


function showDataBook(id){

  /*
    | space_book_select
      | div container_content_page
        | div content_page
          | div content_page_left
          | div content_page_right
        _
      _
    _
  */
 let bookSelected = $q("#"+id);
 let containerContentPage = document.createElement("div");
 let contentPage = document.createElement("div");
 let contentPageLeft = document.createElement("div");
 let contentPageRight = document.createElement("div");
 
 containerContentPage.classList.add("container_content_page");
 contentPage.classList.add("content_page");
 contentPageLeft.classList.add("content_page_left");
 contentPageRight.classList.add("content_page_right");
 contentPageLeft.id = "pageLeft";
 contentPageRight.id = "pageRight";
 bookSelected.appendChild(containerContentPage);
 containerContentPage.appendChild(contentPage);
 contentPage.appendChild(contentPageLeft);
 contentPage.appendChild(contentPageRight);

 bookSelected.querySelector(".book").classList.forEach(classString =>{
    if(classString != "book"){
      contentPageLeft.classList.add("scroll"+classString.replace("book",""));
      contentPageRight.classList.add("scroll"+classString.replace("book",""));
    }
 })

 switch (id) {
  case "bookDeconstructedMathSelected":
    
    break;
  case "bookJavaScriptSelected":
    break;
  case "bookCPlusPlusSelected":
    break;
  case "bookJavaSelected":
    break;
  case "bookDartSelected":
    break;
  case "bookCSharpSelected":
    break;
  case "bookPseudocodeSelected":
    break;
  case "bookPHPSelected":
    break;
  case "bookHTMLSelected":
    contentListBookHTML();
    break;
  case "bookCSSSelected":
    contentListBookCss();
    break;
  default:
    break;  
 }

 
}

