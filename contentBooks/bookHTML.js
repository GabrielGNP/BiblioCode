function contentListBookHTML(){
    let pageLeft = $q("#pageLeft");
    let pageRight = $q("#pageRight");

    //se quitaron los name="" en los input de cada elemento
    //comrpbar si esto no genera un error
    let contentPageLeft = 
        '<h1>Libro de HTML</h1>'+
        '<ul class="ulClass">'+
            '<h3>Estructura</h3>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="headHTML" name="optionBookHTML" value="headHTML"/>'+
                '<label for="headHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;head&gt;</label>'+
            '</li>'+
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="bodyHTML" name="optionBookHTML" value="bodyHTML"/>'+
                '<label for="bodyHTML" onmouseenter="hover(this);" onmouseleave="unHover(this)">&lt;body&gt;</label>'+
            '</li>'+
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="navHTML" name="optionBookHTML" value="navHTML"/>'+
                '<label for="navHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;nav&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="mainHTML" name="optionBookHTML" value="mainHTML"/>'+
                '<label for="mainHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;main&gt;</label>'+
            '</li>'+
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="asideHTML" name="optionBookHTML" value="asideHTML"/>'+
                '<label for="asideHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;aside&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="headerHTML" name="optionBookHTML" value="headerHTML"/>'+
                '<label for="headerHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;header&gt;</label>'+
            '</li>'+
      
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="footerHTML" name="optionBookHTML" value="footerHTML"/>'+
                '<label for="footerHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;footer&gt;</label>'+
            '</li>'+ 

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="sectionHTML" name="optionBookHTML" value="sectionHTML"/>'+
                '<label for="sectionHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;section&gt;</label>'+
            '</li>'+ 

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="articleHTML" name="optionBookHTML" value="articleHTML"/>'+
                '<label for="articleHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;article&gt;</label>'+
            '</li>'+ 

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="spanHTML" name="optionBookHTML" value="spanHTML"/>'+
                '<label for="spanHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;span&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="divHTML" name="optionBookHTML" value="divHTML"/>'+
                '<label for="divHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;div&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="formHTML" name="optionBookHTML" value="formHTML"/>'+
                '<label for="formHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;form&gt;</label>'+
                '<ul class="ulClass">'+
                    '<li class="liClass liBookOrange">'+
                        '<input type="checkbox" id="fieldsetHTML" name="optionBookHTML" value="fieldsetHTML"/>'+
                        '<label for="fieldsetHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;fieldset&gt;</label>'+
                    '</li>'+
                '</ul>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="detailsHTML" name="optionBookHTML" value="detailsHTML"/>'+
                '<label for="detailsHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;details&gt;</label>'+
                '<ul class="ulClass">'+
                    '<li class="liClass liBookOrange">'+
                        '<input type="checkbox" id="summaryHTML" name="optionBookHTML" value="summaryHTML"/>'+
                        '<label for="summaryHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;summary&gt;</label>'+
                    '</li>'+
                '</ul>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="dialogHTML" name="optionBookHTML" value="dialogHTML"/>'+
                '<label for="dialogHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;dialog&gt;</label>'+
            '</li>'+

            '<h3>Texto</h3>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="titlesHTML" name="optionBookHTML" value="titlesHTML"/>'+
                '<label for="titlesHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;h1&gt;&lt;h2&gt;&lt;h3&gt;... Títulos</label>'+
            '</li>'+
            
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="paragraphHTML" name="optionBookHTML" value="paragraphHTML"/>'+
                '<label for="paragraphHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;p&gt; Párrafo</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="strongHTML" name="optionBookHTML" value="strongHTML"/>'+
                '<label for="strongHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;strong&gt; Énfasis</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="smallHTML" name="optionBookHTML" value="smallHTML"/>'+
                '<label for="smallHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;small&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="listOlUlHTML" name="optionBookHTML" value="listOlUlHTML"/>'+
                '<label for="listOlUlHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;ul&gt;&lt;ol&gt Listas</label>'+
            '</li>'+

            '<h3>Multimedia</h3>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="imgHTML" name="optionBookHTML" value="imgHTML"/>'+
                '<label for="imgHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;img&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="videoHTML" name="optionBookHTML" value="videoHTML"/>'+
                '<label for="videoHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;video&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="audioHTML" name="optionBookHTML" value="audioHTML"/>'+
                '<label for="audioHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;audio&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="iframeHTML" name="optionBookHTML" value="iframeHTML"/>'+
                '<label for="iframeHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;iframe&gt;</label>'+
            '</li>'+

            '<h3>Interactivos</h3>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="anchorHTML" name="optionBookHTML" value="anchorHTML"/>'+
                '<label for="anchorHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;a&gt; anchor</label>'+
            '</li>'+
      
            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="inputHTML" name="optionBookHTML" value="inputHTML"/>'+
                '<label for="inputHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;input&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="datalistHTML" name="optionBookHTML" value="datalistHTML"/>'+
                '<label for="datalistHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)"> &lt;datalist&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="selectHTML" name="optionBookHTML" value="selectHTML"/>'+
                '<label for="selectHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;select&gt;</label>'+
            '</li>'+

            '<li class="liClass liBookOrange">'+
                '<input type="checkbox" id="buttonHTML" name="optionBookHTML" value="buttonHTML"/>'+
                '<label for="buttonHTML" onmouseenter="hover(this);" onmouseleave="unHover(this)">&lt;button&gt;</label>'+
            '</li>'+

        '</ul>';

  pageRight.innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>posiciónese sobre alguno de los items</div>"
  //document.getElementById("pageLeft").innerHTML(contentPageLeft);
  pageLeft.innerHTML = contentPageLeft;

  // Obtén todos los checkboxes dentro del contenedor específico por su nombre
  const container = document.getElementById('pageLeft');
  const checkboxes = container.querySelectorAll('input[type="checkbox"][name="optionBookHTML"]');

  // Agrega un evento clic a cada checkbox
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        // Deselecciona todos los checkboxes excepto el actual
        checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
  });
}