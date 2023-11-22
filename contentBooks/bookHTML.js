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

function selectInputHTML(value){  
    switch (value){
      case "headHTML":
        headHTMLSelected();
        break;
      case "bodyHTML":
        break;
      case "navHTML":
        break;
      case "mainHTML":
        break;
      case "asideHTML":
        break;
      case "headerHTML":
        break;
      case "footerHTML":
        break;
      case "sectionHTML":
        break;
      case "articleHTML":
        break;
      case "spanHTML":
        break;
      case "divHTML":
        break;
      case "formHTML":
        break;
      case "fieldsetHTML":
        break;
      case "detailsHTML":
        break;
      case "summaryHTML":
        break;
      case "dialogHTML":
        break;
      case "titlesHTML":
        break;
      case "paragraphHTML":
        break;
      case "strongHTML":
        break;
      case "smallHTML":
        break;
      case "listOlUlHTML":
        break;
      case "imgHTML":
        break;
      case "videoHTML":
        break;
      case "audioHTML":
        break;
      case "iframeHTML":
        break;
      case "anchorHTML":
        break;
      case "inputHTML":
        break;
      case "datalistHTML":
        break;
      case "selectHTML":
        break;
      case "buttonHTML":
        break;
      default:
        $q("#pageRight").innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>Sin datos ...</div>";
    }
  }

  function headHTMLSelected(){
    let htmlContentPageRight = 
    '<h1>Etiqueta &ltHead&gt</h1>'
    +'<p>Esta etiqueta es para especificar metadatos, los metadatos nos permitirán hacer ciertas configuraciones sobre la página que creemos, por ejemplo su título, enlaces a scripts y hojas de estilos, entre otros.</p>'
    +'<p>Algunas de las etiquetas de metadatos que podemos encontrar en el &lthead&gt son:<p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta charset</b>=<o>”utf-8”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>indica la codificación a utilizar para que los iconos o textos que escribamos, siempre se vean igual. De otra forma utilizará una codificación predeterminada y puede que no se vea igual para todos.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta name</b>=<o>”viewport”</o> <b>content</b>=<o>”width=device-width”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Esto sirve para que el sitio sea adaptable. Con esto hace que el ancho del contenido sea el ancho de la pantalla que se esté utilizando. De esta forma nos aseguramos que el ancho de la página sea el ancho de la pantalla que se esté utilizando independientemente de si se ve en móvil, en PC o sea cual sea la resolución de la pantalla.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>title</b>&gt*texto de título*&lt<b>/title</b>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Es el título que tendrá la página web. Es muy importante en SEO porque ayuda en la búsqueda de la página. Es importante utilizar un título con palabras clave y llamativo.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta name</b>=<o>”robots”</o> <b>content</b>=<o>”index, follow”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Es un metadato importante para google y los buscadores. Indica si la página será indexada y que siga los enlaces.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta name</b>=<o>”theme-color”</o> <b>content</b>=<o>”#09f”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Existen metadatos que sirven para un navegador en particular. El theme-color sirve para algunos navegadores, permite que la barra superior, la parte superior del navegador, cambie el color. Esto se ve por ejemplo en el navegador safari o en Android.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>link rel</b>=<o>”icon”</o> <b>type</b>=<o>”image/png”</o> <b>href</b>=<o>”url”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Sirve para poner el icono de la página, el icono que se verá junto con el título en la pestaña de la página.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta name</b>=<o>”description”</o> <b>content</b>=<o>”alguna descripción sobre la página web”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Esto describe el contenido de la página web. Esto es lo que se mostrará en el buscador cuando se muestra la página como una de las opciones encontradas. No siempre se muestra esta descripción, pero normalmente la descripción de la etiqueta es la mostrada.</p>'
    +'<br><br>'
    +'<h2>OPEN GRAPH</h2>'
    +'Es un conjunto de etiquetas que ayudan en el SEO de la página. Estas etiquetas se mostrarán al momento de compartir la url de la página mediante alguna red social.'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta property</b>=<o>”og:title”</o> <b>content</b>=<o>”*Título mostrado*”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Si no se pone este metadato, entonces utilizará el título de la página. Permite que se muestre el texto escrito en content como título al compartir la url de la página.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta property</b>=<o>”og:description”</o> <b>content</b>=<o>”*Descripción que se mostrará al compartirlo*”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Para indicar la descripción que se mostrará al compartirlo.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta property</b>=<o>”og:image”</o> <b>content</b>=<o>”url de la imagen”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Permite indicar la imagen que se mostrará al compartir la url.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>meta property</b>=<o>”og:image:alt”</o> <b>content</b>=<o>”descripción de la imagen”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Es para indicar la descripción que tendrá la imagen mostrada. Esto es para el caso en que no se pueda visualizar la imagen.</p>'
    +'<br>'
    +'Hay muchos más metadatos de OPEN GRAPH que pueden ayudar al SEO y al compartir url. Se pueden ver al buscar el protocolo de OPEN GRAPH (The Open Graph Protocol)'
    +'<br><br>'
    +'En temas de SEO hay dos etiquetas más que son importantes:'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>link rel</b>=<o>”alternate”</o> <b>href</b>=<o>”url”</o> <b>hreflang</b>=<o>”en-GB”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Lo que indica es que esta página, si la encuentra en ingles, la página que debería mostrar es la url proporcionada.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>link rel</b>=<o>”canonical”</o> <b>href</b>=<o>”url”</o>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Esto indica cual es la página que realmente es principal en nuestro sitio.</p>'
    +'<p>Si Google entra a por ejemplo "www.nombreDePagina.dev" o "nombreDePagina.dev", va a tratarlas como la misma página si tiene la etiqueta “canonical” puesta.</p>'
    +'<br><br>'
    +'<h3></h3>'
    +'<p>También se pueden poner los estilos CSS embebidos en el documento HTML con &ltstyle&gt para estilar el documento.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>style</b>&gt\n'
        +'   <y>body{</y>\n'
        +'      <b>background</b>: <o>#0f9</o>;\n'
        +'   <y>}</y>\n'
        +'<b>&lt/style</b>&gt'
      +'</pre>'
    +'</div>'
    +'<p>O poner javascript con &ltscript&gt&lt/scripr&gt</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>script</b>&gt\n'
        +'   <b>console</b>.<y>log(</y><o>"comentario en consola"</o><y>)</y>\n'
        +'&lt<b>/sript</b>&gt'
      +'</pre>'
    +'</div>'




    $q("#pageRight").innerHTML = htmlContentPageRight;    
  }