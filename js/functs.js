function closeBook(){
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth', // Agrega una animación suave.
        duration: 1500, // Duración de la animación en milisegundos.
      });
    $q(".librarie").style.top = "0px";
    $q(".lectern").style.top = "300px";
    $q(".space_librarie_lectern").style.top = "285px";
    $q(".containerReturnShelf").style.display = "none";
    let bookSelected = $q(".space_book_selected");
    let idBookSelected = bookSelected.id;
    document.getElementById(idBookSelected).remove();
    let bookShelf = $gi(idBookSelected.replace("Selected",""));
    
    bookShelf.classList.remove("transparent");
    bookShelf.querySelector(".book").classList.remove("transparent");
    bookShelf.querySelector(".back__book").classList.remove("transparent");
    bookShelf.querySelectorAll(".line").forEach((line => {
        line.classList.remove("transparent");
    }))
    bookShelf.querySelector(".lomo").classList.remove("transparent");
    bookShelf.querySelector(".titleBook").classList.remove("transparent");
    $q(".containerReturnShelf").remove();
}

