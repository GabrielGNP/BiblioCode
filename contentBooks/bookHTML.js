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
                '<input type="checkbox" id="labelHTML" name="optionBookHTML" value="labelHTML"/>'+
                '<label for="labelHTML" onmouseenter="hover(this); " onmouseleave="unHover(this)">&lt;label&gt;</label>'+
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
    /*case "bodyHTML":
      break;*/
    case "navHTML":
      navHTMLSelected();
      break;
    case "mainHTML":
      mainHTMLSelected();
      break;
    case "asideHTML":
      asideHTMLSelected();
      break;
    case "headerHTML":
      headerHTMLSelected();
      break;
    case "footerHTML":
      footerHTMLSelected();
      break;
    case "sectionHTML":
      sectionHTMLSelected();
      break;
    case "articleHTML":
      articleHTMLSelected();
      break;
    case "spanHTML":
      spanHTMLSelected();
      break;
    case "divHTML":
      divHTMLSelected();
      break;
    case "formHTML":
      formHTMLSelected();
      break;
    case "fieldsetHTML":
      fieldsetHTMLSelected();
      break;
    case "detailsHTML":
      detailsHTMLSelected();
      break;
    /*case "summaryHTML":
      break;*/
    case "dialogHTML":
      dialogHTMLSelected();
      break;
    /*case "titlesHTML":
      break;*/
    /*case "paragraphHTML":
      break;*/
    /*case "strongHTML":
      break;*/
    /*case "smallHTML":
      break;*/
    /*case "listOlUlHTML":
      break;*/
    /*case "imgHTML":
      break;*/
    /*case "videoHTML":
      break;*/
    /*case "audioHTML":
      break;*/
    /*case "iframeHTML":
      break;*/
    /*case "anchorHTML":
      break;*/
    case "labelHTML":
      labelHTMLSelected();
      break;
    /*case "inputHTML":
      break;*/
    /*case "datalistHTML":
      break;*/
    /*case "selectHTML":
      break;*/
    /*case "buttonHTML":
      break;*/
    default:
      $q("#pageRight").innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>Sin datos ...</div>";
  }
}

function headHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &lthead&gt</h1>'
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
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;    
}

function navHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltnav&gt</h1>'
    +'<p>Es un elemento que se utiliza para crear una sección de navegación para poder agregar elementos para navegar por el contenido.</p>'
    +'<p>Generalmente los elementos de navegación son &lta&gt (anchors)<p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>nav</b>&gt\n'
        +'  &lt<b>a href</b>=<o>"url"</o>&gtir a&lt/<b>a</b>&gt\n'
        +'  &lt<b>a href</b>=<o>"url"</o>&gtir a&lt/<b>a</b>&gt\n'
        +'  &lt<b>a href</b>=<o>"url"</o>&gtir a&lt/<b>a</b>&gt\n'
        +'&lt/<b>nav</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;    
}

function mainHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltmain&gt</h1>'
    +'<p>Es el elemento que englobará todo el contenido principal de la página. El main contendrá el contenido que será único en la página. Contendrá todo el contenido que no será repetitivo en las diferentes páginas de la misma web.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>main</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>main</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;    
}

function asideHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltaside&gt</h1>'
    +'<p>Es algo que se utiliza para anexar información al contenido mostrado. Por ejemplo, se muestra un proyecto y se agrega un &ltaside&gt para agregar información sobre las tecnologías utilizadas. Se utilizan para anexar información extra y que se relaciona con el contenido.  Algunas veces se utiliza el aside para agregar navegación también.</p>'
    +'<p>Generalmente el aside es un elemento que aparece a un lado en la página.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>aside</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>aside</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;    
}

function headerHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltheader&gt</h1>'
    +'<p>El elemento Header es el encabezado del contenido mostrado, si tenemos distintas secciones, cada sección puede contener un &ltheader&gt. El header puede utilizarse en distintas partes de la página pero siempre se debe recordar que es un elemento para escribir encabezados.</p>'
    +'<p>El elemento Header (&ltheader&gt) puede representar un grupo de ayudas introductorias o de navegación. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes.</p>'
    +'<p>Este elemento puede utilizarse tantas veces como se necesite, no es un elemento que estrictamente deba utilizarse una sola vez. Por ejemplo, podría utilizarse un header dentro de cada &ltarticle&gt como header del arrtículo y uno en el body como header de la página</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>header</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>header</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;    
}

function footerHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltfooter&gt</h1>'
    +'<p>Representa un pie de página para el contenido de sección más cercano o el elemento raíz de sección. Un pie de página típicamente contiene información acerca de el autor de la sección, datos de derechos de autor o enlaces a documentos relacionados.</p>'
    +'<p>Este elemento puede utilizarse tantas veces como se necesite, no es un elemento que estrictamente deba utilizarse una sola vez. Por ejemplo, podría utilizarse un footer dentro de cada &ltarticle&gt como footer del arrtículo y uno en el body como footer de la página</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>footer</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>footer</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;   
}

function sectionHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &ltsection&gt</h1>'
    +'<p>Se utiliza para marcar secciones independientes genéricas de información. El &ltarticle&gt engloba bloques y el &ltsection&gt engloba los &ltarticle&gt. Puede haber &ltsection&gt dentro de un &ltsection&gt, serían secciones dentro de una sección, subsecciones. No es recomendable abusar y utilizar muchas subsecciones, debe manejarse con cuidado.</p>'
    +'<p>No se debe confundir el uso de un &ltsection&gt con un &ltarticle&gt.</p>'
    +'<p>el section puede contener otros elementos, no estrictamente &ltarticle&gt</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>section</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>section</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;   
}

function articleHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltarticle&gt</h1>'
    +'<p>Es un elemento con información propia contenida y que puede copiarse y pegarse en cualquier otro sitio y que va a seguir funcionando igual. Es un elemento que no depende de la información o contenido externo. Engloba un contenido independiente del contenido fuera del <article>. Permite englobar contenido y que este pueda moverse a otros documentos o lugares del mismo documento sin perder su significado.</p>'
    +'<p>Un article puede contener un &ltheader&gt y un &ltfooter&gt. Tanto el &ltheader&gt como el &ltfooter&gt pueden utilizarse tantas veces como se desee, no son elementos que puedan ser utilizados una sola vez.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>article</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>article</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function spanHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltspan&gt</h1>'
    +'<p>El span es una etiqueta no semántica que permite ubicar el contenido en línea. Siempre que sea posible utilizar una etiqueta semántica, es recomendable utilizarlas y no utilizar el &ltspan&gt</p>'
    +'<p>Todos los span tienen el estilo display: inline de forma predeterminada por lo que se ajusta al contenido de sus elementos en línea, en un mismo row.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>span</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>span</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function divHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltdiv&gt</h1>'
    +'<p>El div es una etiqueta no semántica que permite ubicar el contenido en bloque. Siempre que sea posible utilizar una etiqueta semántica, es recomendable utilizarlas y no utilizar el &ltdiv&gt</p>'
    +'<p>Todos los span tienen el estilo display: block de forma predeterminada por lo que su tamaño se ajusta al contenido de sus elementos pero puede definirse un tamaño específico para este elemento.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>div</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>div</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function formHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltform&gt</h1>'
    +'<p>Los formularios son muy importantes para mandar información al servidor.</p>'
    +'<p>&ltform&gt tiene dos atributos importantes: method y action.</p>'
    +'<h3>method</h3>'
    +'<p>method es el tipo de comunicación que se tendrá con el servidor. Por ejemplo el protocolo post para enviar información al servidor.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>form method</b>=<o>”post”</o>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>form</b>&gt'
      +'</pre>'
    +'</div>'
    +'<h3>action</h3>'
    +'<p>action es la url a la que se enviarán los datos del formulario.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>form action</b>=<o>"/”</o>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>form</b>&gt'
      +'</pre>'
    +'</div>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>form method</b>=<o>”post”</o> <b>action</b>=<o>"/”</o>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>form</b>&gt'
      +'</pre>'
    +'</div>';

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function fieldsetHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltfieldset&gt</h1>'
    +'<p>Permite agrupar inputs en el &ltform&gt</p>'
    +'<p>Es una agrupación de los diferentes inputs que se tendrán. Dentro del fieldset se utilizaran las siguientes etiquetas.</p>'
    +'<ul>'
      +'<li><a class="btnNonStyle upperStyle" href="#legend">&ltlegend&gt</a><p style="display:inline"> permite poner una leyenda al fieldset</p></li><br>'
      +'<li><a class="btnNonStyle upperStyle" href="">&ltlabel&gt</a><p style="display:inline"> el &ltlabel&gt es una etiqueta para los &ltinputs&gt. Cuando se hace clic en la etiqueta, se debe poner el foco en el &ltinputs&gt correspondiente.</p></li><br>'
      +'<li><a class="btnNonStyle upperStyle" href="">&ltinput&gt</a><p style="display:inline"> se utilizan para poder escribir la información para luego mandarlo y completar el formulario.</p></li><br>'
      +'<li><a class="btnNonStyle upperStyle" href="">&ltselect&gt</a><p style="display:inline"> para poder seleccionar una opción de las listadas con &ltoption&gt dentro del &ltselect&gt</p></li><br>'
      +'<li><a class="btnNonStyle upperStyle" href="">&ltdatalist&gt</a><p style="display:inline"> es un elemento que permite hacer autoclompetados. Va acompañado de un &ltinput&gt.</p></li><br>'
    +'</ul>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>fieldset</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>fieldset</b>&gt'
      +'</pre>'
    +'</div>'
    +'<h3 id="legend">legend</h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<b>fieldset style</b>=<o>"background: #f1f1f1;"</o>&gt\n'
        +'  &lt<b>legend</b>&gttítulo del legend&lt/<b>legend</b>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<b>fieldset</b>&gt'
      +'</pre>'
    +'</div>'
    +'<fieldset style="background: #f1f1f1;">'
    +'  <legend>título del legend</legend>'
    +'</fieldset>'
    
    ;

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function labelHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltlabel&gt</h1>'
  +'<p>El label es una etiqueta para los inputs. Cuando se hace clic en la etiqueta, se debe poner el foco en el input correspondiente.<p>'
  +'<p>Hay dos formas de asignar o vincular un &ltlabel&gt a un &ltinput&gt:<p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>label for</b>=<o>”name”</o>&gtNombre: &lt/<b>label</b>&gt\n'
      +'&lt<b>input type</b>="text" <b>id</b>=<o>"name"</o> <b>name</b>=<o>"name"</o> <b>placeholder</b>=<o>"Escriba su nombre"</o>&gt\n'
    +'</pre>'
  +'</div>'
  +'<label for="name">Nombre: </label>'
  +'<input type="text" id="name" name="name" placeholder="Escriba su nombre">'
  +'<p> De esta manera, el id del input debe ser el que se ponga en el for del label para que el label quede vinculado al input</p>'
  +'<br>'
  +'<p> La segunda forma no utiliza un for en el label:'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>label</b>&gt\n'
      +'   Nombre: <br>'
      +'   &lt<b>input type</b>="text" <b>name</b>=<o>"name"</o> <b>placeholder</b>=<o>"Escriba su nombre"</o>&gt\n'
      +'&lt/<b>label</b>&gt'
    +'</pre>'
  +'</div>'
  +'<label>'
  +'   Nombre: '
  +'   <input type="text" name="name" placeholder="Escriba su nombre"'
  +'</label>'
  +'<p> De esta manera se evita utilizar id en los inputs y no es necesario agregar el atributo for a los label ya que al englobar el input, el label ya les hace referencia de manera automatica</p>';

  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function detailsHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltdetails&gt</h1>'
  +'<p>Permite tener una caja desplegable de forma predeterminada sin necesidad de implementar JavaScript.<p>'
  +'<p>Dentro del &ltdetails&gt se utilizara la etiqueta &ltsummary&gt<p>'
  +'<p>&ltsummary&gt&lt/summary&gt que indicará el “título” de esta caja desplegable. Todo lo que no esté dentro del summary no será visible al estar cerrado el &ltdetails&gt</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>details</b>&gt\n'
      +'  &lt<b>summary</b>&gt título mostrado&lt/<b>summary</b>&gt\n'
      +'  &lt<b>p</b>&gt contenido dentro del details &lt/<b>p</b>&gt\n'
      +'&lt/<b>details</b>&gt\n'
    +'</pre>'
  +'</div>'
  +'<details>'
  +'  <summary>Título mostrado</summary>'
  +'  <p>Contenido dentro del details</p>'
  +'</details>'
  +"<p>al hacer clic en el título summary o en el icono del details este se abrirá mostrando el contenido</p>"
  +"<p>si se tiene la intención de que el details esté abierto desde el principio se debe agregar el atributo open en el details</p>"
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>details open</b>&gt\n'
      +'  &lt<b>summary</b>&gt título mostrado&lt/<b>summary</b>&gt\n'
      +'  &lt<b>p</b>&gt contenido dentro del details &lt/<b>p</b>&gt\n'
      +'&lt/<b>details</b>&gt\n'
    +'</pre>'
  +'</div>'
  +'<details open>'
  +'  <summary>Título mostrado</summary>'
  +'  <p>Contenido dentro del details</p>'
  +'</details>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight;  
}

function dialogHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Etiqueta &ltdialog&gt</h1>'
  +'<p>La etiqueta &ltdialog&gt se puede utilizar como una modal. La modal será como una ventana que se abrirá por encima del contenido por lo que no ocupará espacio.<p>'
  +'<p>De forma predeterminada las modals estarán ocultas, para que esté visible desde el principio se utiliza el método open<p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>dialog open</b>&gt&lt/<b>dialog</b>&gt'
    +'</pre>'
  +'</div>'
  +"<p>Normalmente están ocultas por lo que no se pone el método open. Las ocasiones donde sería necesario que esté abierto sería aquellos casos donde se necesita mostrar al iniciar una web.</p>"
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<b>dialog id="dialog"</b>&gt\n'
      +'  &lt<b>h1</b>&gt¿Sabías que puedes abrir una modal así?&lt/<b>h1</b>&gt\n'
      +'  &lt<b>p</b>&gt¡Y es totalmente nativo!&lt/<b>p</b>&gt\n'
      +'  &lt<b>button id</b>=<o>”hide”</o>&gtCerrar modal&lt/<b>button</b>&gt\n'
      +'&lt/<b>dialog</b>&gt\n'
      +'&lt<b>button id</b>=<o>”show”</o>&gtAbrir modal&lt/<b>button</b>&gt'
    +'</pre>'
  +'</div>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">JS</div>'
    +'<pre class="codeView">'
    +'&lt<b>script</b>&gt'
    +'  <b>windows</b>.show.addEventListener("click", () => {'
    +'    windows.dialog.showModal();'
    +'  }'
    +'  windows.hide.addEventListener(‘click’, ()=>{'
    +'    windows.dialog.close();'
    +'  }'
    +'&lt/script&gt'
    +'</pre>'
  +'</div>'
  +'<dialog id=”dialog”>'
	+'  <h1>¿Sabías que puedes abrir una modal así?</h1>'
	+'  <p>¡Y es totalmente nativo!</p>'
  +'  <button id=”hide”>Cerrar modal</button>'
  +'</dialog>'
  +'<button id=”show”>Abrir modal</button>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight;  
}
