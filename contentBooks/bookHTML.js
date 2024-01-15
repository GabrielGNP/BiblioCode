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
    case "titlesHTML":
      titlesHTMLSelected();
      break;
    case "paragraphHTML":
      paragraphHTMLSelected();
      break;
    case "strongHTML":
      strongHTMLSelected();
      break;
    case "smallHTML":
      smallHTMLSelected();
      break;
    case "listOlUlHTML":
			ListUlOlHTMLSelected();
      break;
    case "imgHTML":
      imgHTMLSelected();
      break;
    case "videoHTML":
      videoHTMLSelected();
      break;
    case "audioHTML":
      audioHTMLSelected();
      break;
    case "iframeHTML":
      iframeHTMLSelected();
      break;
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
      emptyPage();
  }
}
function emptyPage(){
  $q("#pageRight").innerHTML = "<div style='height: 100%; width: 100%; display: grid; align-content: center; text-align: center; position: relative; right: -5%; font-size: 20px; font-weight: 700;'>Sin datos ...</div>";
};


function headHTMLSelected(){
  let htmlContentPageRight = 
    '<h1>Etiqueta &lthead&gt</h1>'
    +'<p>Esta etiqueta es para especificar metadatos, los metadatos nos permitirán hacer ciertas configuraciones sobre la página que creemos, por ejemplo su título, enlaces a scripts y hojas de estilos, entre otros.</p>'
    +'<p>Algunas de las etiquetas de metadatos que podemos encontrar en el &lthead&gt son:<p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta charset</blue>=<orange>"utf-8"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>indica la codificación a utilizar para que los iconos o textos que escribamos, siempre se vean igual. De otra forma utilizará una codificación predeterminada y puede que no se vea igual para todos.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta name</blue>=<orange>"viewport"</orange> <blue>content</blue>=<orange>"width=device-width"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Esto sirve para que el sitio sea adaptable. Con esto hace que el ancho del contenido sea el ancho de la pantalla que se esté utilizando. De esta forma nos aseguramos que el ancho de la página sea el ancho de la pantalla que se esté utilizando independientemente de si se ve en móvil, en PC o sea cual sea la resolución de la pantalla.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>title</blue>&gt*texto de título*&lt<blue>/title</blue>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Es el título que tendrá la página web. Es muy importante en SEO porque ayuda en la búsqueda de la página. Es importante utilizar un título con palabras clave y llamativo.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta name</blue>=<orange>"robots"</orange> <blue>content</blue>=<orange>"index, follow"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Es un metadato importante para google y los buscadores. Indica si la página será indexada y que siga los enlaces.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta name</blue>=<orange>"theme-color"</orange> <blue>content</blue>=<orange>"#09f"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Existen metadatos que sirven para un navegador en particular. El theme-color sirve para algunos navegadores, permite que la barra superior, la parte superior del navegador, cambie el color. Esto se ve por ejemplo en el navegador safari o en Android.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>link rel</blue>=<orange>"icon"</orange> <blue>type</blue>=<orange>"image/png"</orange> <blue>href</blue>=<orange>"url"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Sirve para poner el icono de la página, el icono que se verá junto con el título en la pestaña de la página.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta name</blue>=<orange>"description"</orange> <blue>content</blue>=<orange>"alguna descripción sobre la página web"</orange>&gt'
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
        +'&lt<blue>meta property</blue>=<orange>"og:title"</orange> <blue>content</blue>=<orange>"*Título mostrado*"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Si no se pone este metadato, entonces utilizará el título de la página. Permite que se muestre el texto escrito en content como título al compartir la url de la página.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta property</blue>=<orange>"og:description"</orange> <blue>content</blue>=<orange>"*Descripción que se mostrará al compartirlo*"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Para indicar la descripción que se mostrará al compartirlo.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta property</blue>=<orange>"og:image"</orange> <blue>content</blue>=<orange>"url de la imagen"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Permite indicar la imagen que se mostrará al compartir la url.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>meta property</blue>=<orange>"og:image:alt"</orange> <blue>content</blue>=<orange>"descripción de la imagen"</orange>&gt'
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
        +'&lt<blue>link rel</blue>=<orange>"alternate"</orange> <blue>href</blue>=<orange>"url"</orange> <blue>hreflang</blue>=<orange>"en-GB"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Lo que indica es que esta página, si la encuentra en ingles, la página que debería mostrar es la url proporcionada.</p>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>link rel</blue>=<orange>"canonical"</orange> <blue>href</blue>=<orange>"url"</orange>&gt'
      +'</pre>'
    +'</div>'
    +'<p>Esto indica cual es la página que realmente es principal en nuestro sitio.</p>'
    +'<p>Si Google entra a por ejemplo "www.nombreDePagina.dev" o "nombreDePagina.dev", va a tratarlas como la misma página si tiene la etiqueta “canonical" puesta.</p>'
    +'<br><br>'
    +'<h3></h3>'
    +'<p>También se pueden poner los estilos CSS embebidos en el documento HTML con &ltstyle&gt para estilar el documento.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>style</blue>&gt\n'
        +'   <yellow>body{</yellow>\n'
        +'      <blue>background</blue>: <orange>#0f9</orange>;\n'
        +'   <yellow>}</yellow>\n'
        +'<blue>&lt/style</blue>&gt'
      +'</pre>'
    +'</div>'
    +'<p>O poner javascript con &ltscript&gt&lt/scripr&gt</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>script</blue>&gt\n'
        +'   <blue>console</blue>.<yellow>log(</yellow><orange>"comentario en consola"</orange><yellow>)</yellow>\n'
        +'&lt<blue>/sript</blue>&gt'
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
        +'&lt<blue>nav</blue>&gt\n'
        +'  &lt<blue>a href</blue>=<orange>"url"</orange>&gtir a&lt/<blue>a</blue>&gt\n'
        +'  &lt<blue>a href</blue>=<orange>"url"</orange>&gtir a&lt/<blue>a</blue>&gt\n'
        +'  &lt<blue>a href</blue>=<orange>"url"</orange>&gtir a&lt/<blue>a</blue>&gt\n'
        +'&lt/<blue>nav</blue>&gt'
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
        +'&lt<blue>main</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>main</blue>&gt'
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
        +'&lt<blue>aside</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>aside</blue>&gt'
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
        +'&lt<blue>header</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>header</blue>&gt'
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
        +'&lt<blue>footer</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>footer</blue>&gt'
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
        +'&lt<blue>section</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>section</blue>&gt'
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
        +'&lt<blue>article</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>article</blue>&gt'
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
        +'&lt<blue>span</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>span</blue>&gt'
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
        +'&lt<blue>div</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>div</blue>&gt'
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
        +'&lt<blue>form method</blue>=<orange>"post"</orange>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>form</blue>&gt'
      +'</pre>'
    +'</div>'
    +'<h3>action</h3>'
    +'<p>action es la url a la que se enviarán los datos del formulario.</p>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>form action</blue>=<orange>"/"</orange>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>form</blue>&gt'
      +'</pre>'
    +'</div>'
    +'<h3></h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>form method</blue>=<orange>"post"</orange> <blue>action</blue>=<orange>"/"</orange>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>form</blue>&gt'
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
        +'&lt<blue>fieldset</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>fieldset</blue>&gt'
      +'</pre>'
    +'</div>'
    +'<h3 id="legend">legend</h3>'
    +'<div class="panelCodeView">'
      +'<div class="titleCodeView">HTML</div>'
      +'<pre class="codeView">'
        +'&lt<blue>fieldset style</blue>=<orange>"background: #f1f1f1;"</orange>&gt\n'
        +'  &lt<blue>legend</blue>&gttítulo del legend&lt/<blue>legend</blue>&gt\n'
        +'  ...\n'
        +'  ...\n'
        +'&lt/<blue>fieldset</blue>&gt'
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
      +'&lt<blue>label for</blue>=<orange>"name"</orange>&gtNombre: &lt/<blue>label</blue>&gt\n'
      +'&lt<blue>input type</blue>="text" <blue>id</blue>=<orange>"name"</orange> <blue>name</blue>=<orange>"name"</orange> <blue>placeholder</blue>=<orange>"Escriba su nombre"</orange>&gt\n'
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
      +'&lt<blue>label</blue>&gt\n'
      +'   Nombre: <br>'
      +'   &lt<blue>input type</blue>="text" <blue>name</blue>=<orange>"name"</orange> <blue>placeholder</blue>=<orange>"Escriba su nombre"</orange>&gt\n'
      +'&lt/<blue>label</blue>&gt'
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
  +'<p>&ltsummary&gt&lt/summary&gt que indicará el “título" de esta caja desplegable. Todo lo que no esté dentro del summary no será visible al estar cerrado el &ltdetails&gt</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>details</blue>&gt\n'
      +'  &lt<blue>summary</blue>&gt título mostrado&lt/<blue>summary</blue>&gt\n'
      +'  &lt<blue>p</blue>&gt contenido dentro del details &lt/<blue>p</blue>&gt\n'
      +'&lt/<blue>details</blue>&gt\n'
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
      +'&lt<blue>details open</blue>&gt\n'
      +'  &lt<blue>summary</blue>&gt título mostrado&lt/<blue>summary</blue>&gt\n'
      +'  &lt<blue>p</blue>&gt contenido dentro del details &lt/<blue>p</blue>&gt\n'
      +'&lt/<blue>details</blue>&gt\n'
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
      +'&lt<blue>dialog open</blue>&gt&lt/<blue>dialog</blue>&gt'
    +'</pre>'
  +'</div>'
  +"<p>Normalmente están ocultas por lo que no se pone el método open. Las ocasiones donde sería necesario que esté abierto sería aquellos casos donde se necesita mostrar al iniciar una web.</p>"
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>dialog id="modal"</blue>&gt\n'
      +'  &lt<blue>h1</blue>&gt¿Sabías que puedes abrir una modal así?&lt/<blue>h1</blue>&gt\n'
      +'  &lt<blue>p</blue>&gt¡Y es totalmente nativo!&lt/<blue>p</blue>&gt\n'
      +'  &lt<blue>button id</blue>=<orange>"hide"</orange>&gtCerrar modal&lt/<blue>button</blue>&gt\n'
      +'&lt/<blue>dialog</blue>&gt\n'
      +'&lt<blue>button id</blue>=<orange>"show"</orange>&gtAbrir modal&lt/<blue>button</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">JS</div>'
    +'<pre class="codeView">'
    +'&lt<blue>script</blue>&gt\n'
    +'  <blue>windows</blue>.<blue>show</blue>.<yellow>addEventListener</yellow>("click", () => {\n'
    +'    windows.modal.showModal();\n'
    +'  }\n'
    +'  <blue>windows</blue>.<blue>hide</blue>.<yellow>addEventListener</yellow>("click", ()=>{\n'
    +'    windows.modal.close();\n'
    +'  }\n'
    +'&lt/<blue>script</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<dialog id="modal" style="background:#eddeaf;">'
	+'  <h1>¿Sabías que puedes abrir una modal así?</h1>'
	+'  <p>¡Y es totalmente nativo!</p>'
  +'  <button id="hide" onclick=\'document.getElementById("modal").close();\'>Cerrar modal</button>'
  +'</dialog>'
  +'<button id="show" onclick=\'document.getElementById("modal").showModal();\'>Ver más información</button>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function titlesHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Los titles</h1>'
  +'<p>Tenemos varios títulos en HTML, cada uno para dar diferentes niveles de importancia. Por ejemplo título, subtítulos, etc.<p>'
  +'<p>En HTML tenemos 6 niveles de títulos. &lth1&gt&lt/h1&gt &lth2&gt&lt/h2&gt<p> &lth3&gt&lt/h3&gt &lth4&gt&lt/h4&gt &lth5&gt&lt/h5&gt &lth6&gt&lt/h6&gt'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>h1</blue>&gtTítulo 1&lt/<blue>h1</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h1 style="text-align: initial;">Título 1</h1>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>h2</blue>&gtTítulo 2&lt/<blue>h2</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h2>Título 2</h2>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>h3</blue>&gtTítulo 3&lt/blue>h3</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h3 style="border-bottom: initial;">Título 3</h3>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>h4</blue>&gtTítulo 4&lt/<blue>h4</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h4>Título 4</h4>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>h5</blue>&gtTítulo 5&lt/<blue>h5</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h5 style="border-bottom: initial;">Título 5</h5>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&ltblue>h6</blue>&gtTítulo 6&lt/<blue>h6</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<h6>Título 6</h6>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function paragraphHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltp&gt</h1>'
  +'<p>La etiqueta &ltp&gt es utilizada para añadir párrafos de texto en la página.<p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>p</blue>&gtUn párrafo de ejemplo escrito en el documento&lt/<blue>p</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<p>Un párrafo de ejemplo escrito en el documento</p>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function strongHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltstrong&gt</h1>'
  +'<p>La etiqueta &ltstrong&gt se utiliza para darle énfasis a una palabra u oración. El énfasis es semántico, no estilístico. Para dar un énfasis estilístico se debe hacer con el uso de css.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>strong</blue>&gttexto importante&lt/<blue>strong</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<strong>texto importante</strong>'
  +'<p>Anteriormente se utilizaba la etiqueta &ltb&gt pero esto daba el estilo en negrita, no le daba importancia al texto, solo era algo estilístico. Strong le da importancia al texto, le da énfasis.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<red>b</red>&gttexto importante&lt/<red>b</red>&gt'
    +'</pre>'
  +'</div>'
  +'<b>texto importante</b>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function smallHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltsmall&gt</h1>'
  +'<p>El &ltsmall&gt se utiliza para poner información secundaria que se verá más pequeño. Se utiliza para agregar una información extra que no es esencial, poner referencias, aclaraciones cortas, contexto, etc. </p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>small</blue>&gttexto secundario&lt/<blue>small</blue>&gt'
    +'</pre>'
  +'</div>'
  +'<small>texto secundario</small>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function ListUlOlHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>Listas</h1>'
  +'<p>Las listas nos permiten ordenar distintos elementos uno debajo del otro.</p>'
	+'<p>Cada elemento en la lista se agregará con un &ltli&gt</p>'
	+'<p>&ltli&gt no necesita cerrar la etiqueta, no es recomendable hacer esto pero HTML lo permite.</p>'
	+'<p>Tenemos dos tipos de listas, listas ordenadas (Order List) y listas desordenadas (Unnorder List).</p>'
	+'<h2>&ltul&gt&lt/ul&gtListas Desordenada (Unorder List)</h2>'
	+'<p>Las listas desordenadas nos permiten listar los elementos de forma desordenada. Cada elemento se listará con un ítem. Este ítem puede ser modificado con CSS.</p>'
	+'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>ul</blue>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento 1&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 2&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 3&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ul</blue>&gt'
    +'</pre>'
  +'</div>'
	+'<ul>'
		+'<li>elemento 1</li>'
		+'<li>elemento 2</li>'
		+'<li>elemento 3</li>'
	+'</ul>'
  +'<h2>&ltol&gt&lt/ol&gtListas Ordenadas (Order List)</h2>'
	+'<p>Las listas ordenadas nos permiten listar los elementos de forma ordenada. Estos elementos se ordenan utilizando letras o números.</p>'
	+'<p>las listas ordenadas pueden tener los siguientes atributos:</p>'
	+'<ul>'
	+'<li>&ltol type="1"&gt para que utilice números. De forma predeterminada utilizará números</li>'
	+'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>ol</blue> <lightblue>type</lightblue>=<orange>"1"</orange>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento 1&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 2&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 3&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ol</blue>&gt'
    +'</pre>'
  +'</div>'
	+'<ol type="1">'
		+'<li>elemento 1</li>'
		+'<li>elemento 2</li>'
		+'<li>elemento 3</li>'
	+'</ol>'
	+'<li>&ltol type="a"&gt para que utilice letras. También puede utilizarse type="A" para usar letras mayúsculas.</li>'
	+'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>ol</blue> <lightblue>type</lightblue>=<orange>"a"</orange>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento a&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento b&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento c&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ol</blue>&gt'
    +'</pre>'
  +'</div>'
	+'<ol type="a">'
		+'<li>elemento a</li>'
		+'<li>elemento b</li>'
		+'<li>elemento c</li>'
	+'</ol>'
	+'<li>&ltol reversed&gt para que empiece a la inversa la numeración.</li>'
	+'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>ol</blue> <lightblue>reversed</lightblue>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento 1&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 2&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 3&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ol</blue>&gt'
    +'</pre>'
  +'</div>'
	+'<ol reversed>'
		+'<li>elemento 1</li>'
		+'<li>elemento 2</li>'
		+'<li>elemento 3</li>'
	+'</ol>'
	+'<li>&ltol start="3"&gt para indicar desde que valor iniciará la numeración.</li>'
	+'<div class="panelCodeView">'
		+'<div class="titleCodeView">HTML</div>'
		+'<pre class="codeView">'
			+'&lt<blue>ol</blue> <lightblue>start</lightblue>=<orange>"3"</orange>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento 1&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 2&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 3&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ol</blue>&gt'
		+'</pre>'
	+'</div>'
	+'<ol start="3">'
		+'<li>elemento 1</li>'
		+'<li>elemento 2</li>'
		+'<li>elemento 3</li>'
	+'</ol>'
	+'<li>Puede indicar que valor contendrá el &ltli&gt utilizando value="valor". &ltli value="5"&gt</li>'
	+'<div class="panelCodeView">'
		+'<div class="titleCodeView">HTML</div>'
		+'<pre class="codeView">'
			+'&lt<blue>ol"</blue>&gt\n'
			+'   &lt<blue>li</blue>&gtelemento 1&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue> <lightblue>value</lightblue>=<orange>"5"</orange>&gtelemento 2&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue> </lightblue>value</lightblue>=<orange>"3"</orange>&gtelemento 3&lt/<blue>li&gt</blue>\n'
			+'   &lt<blue>li</blue>&gtelemento 4&lt/<blue>li&gt</blue>\n'
			+'&lt/<blue>ol</blue>&gt'
		+'</pre>'
	+'</div>'
	+'<ol>'
		+'<li>elemento 1</li>'
		+'<li value="5">elemento 2</li>'
		+'<li value="3">elemento 3</li>'
		+'<li>elemento 4</li>'
	+'</ol>'
	+'</ul>'
	
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function imgHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltimg&gt</h1>'
  +'<p>La etiqueta &ltimg&gt se utiliza para agregar una imágen al documento.</p>'
  +'<p>Esta estiqueta no tiene una etiqueta de cierre porque es un elemento reemplazable, no utiliza el contenido de la etiqueta.</p>'
  +'<p>Se debe indicar el source que utilizará (src)</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>img</blue> <lightblue>src</lightblue>=<orange>""</orange>&gt'
    +'</pre>'
  +'</div>'
  +'<p>Es posible aplicar una etiqueta de autocierre pero no es necesario.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>img</blue> <lightblue>src</lightblue>=<orange>""</orange> /&gt'
    +'</pre>'
  +'</div>'
  +'\n'
  +'<p>el <strong>src</strong> es un atributo específico que no puede ser aplicado a cualquier etiqueta. Este atributo se aplicará dentro de la etiqueta y que se aplicará al elemento.</p>'
  +'<p><strong>alt</strong> es otro atributo de img, permite mostrar un texto en caso de que la imagen no pueda mostrarse.</p>'
  +'<p><strong>title</strong> es un atributo que permite dar una información relacionada con la imagen, Sirve para que cuando se posiciona el mouse sobre la imagen, da una información textual sobre la imagen.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>img</blue>\n'
      +'  <lightblue>title</lightblue>=<orange>"info imagen"</orange>\n'
      +'  <lightblue>alt</lightblue>=<orange>"info en caso de no cargar"</orange>\n'
      +'  <lightblue>src</lightblue>=<orange>"dirección de larchivo a mostrar"</orange>\n'
      +'&gt'
    +'</pre>'
  +'</div>'
  +'\n'
  +'<p>Si agregamos el atributo loading="lazy" lo que hacemos es que la imagen se cargue más tarde en la página si no está siendo visible. Esto puede ayudar al rendimiento. Es recomendable no utilizarlo en imágenes que se muestren muy arriba en la página, esto es debido a que demora la carga de las imágenes y dependiendo de qué tan rápido se cargue la página, es posible ver un parpadeo en la imagen.</p>'
  +'\n'
  +'<p>El width="250" height="250" son atributos que permiten modificar el tamaño de la imagen mostrada en la pantalla.</p>'
  +'<p>Esto deformaría la imagen si no se respeta la relación de aspecto. Para evitar esto se debe conocer la relación de aspecto de la imagen y utilizar los estilos CSS para ajustar el tamaño correctamente. Por ejemplo:</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>img</blue> <lightblue>style</lightblue>=<orange>"width:100%; aspect-ratio:638/317;"</orange>  <lightblue>style</lightblue>=<orange>"//..."</orange>/&gt'
    +'</pre>'
  +'</div>'
  +'<p>\n\n\n\n</p>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function videoHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltvideo&gt</h1>'
  +'<p>La etiqueta &ltvideo&gt permite mostrar un video en la página utilizando el atributo src="//" para escribir la url del video.</p>'
  +'<p>El atributo <strong>controls</strong> permite agregar controles al elemento. Esto agrega los controles para pausar, reproducir, controlar el volumen, etc.</p>'
  +'<p>El atributo <strong>muted</strong> silencia el video para que se reprodusca sin sonido.</p>'
  +'<p>El atributo <strong>autoplay</strong> para que se reproduzca automáticamente al cargar la página. Pero el <strong>autoplay</strong> no reproduce automáticamente el video realmente si el usuario no ha interactuado primero. Para que siempre se inicie automáticamente se agrega el atributo <strong>muted</strong> junto con el <strong>autoplay</strong>.</p>'
  +'<p>El atributo <strong>loop</strong> permite que cuando el video finalice, vuelva a reproducirse automáticamente.</p>'
  +'<p>El atributo <strong>poster="//"</strong> permite poner una imagen que se mostrará del video al cargar la página. Si el video tiene el atributo <strong>autoplay</strong>, no se mostrará la imagen puesta como poster debido a que el video se reproduce automáticamente.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>video</blue> <lightblue>src</lightblue>=<orange>"//"</orange>&gt'
    +'</pre>'
  +'</div>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function audioHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltaudio&gt</h1>'
  +'<p>La etiqueta &ltaudio&gt permite poner un audio en la página para poder reproducirlo en la propia página.</p>'
  +'<p>Funciona igual que la etiqueta video por lo que muchos de sus atributos son iguales</p>'
  +'<p>El atributo <strong>controls</strong> permite agregar controles al elemento. Esto agrega los controles para pausar, reproducir, controlar el volumen, etc.</p>'
  +'<p>El atributo <strong>muted</strong> silencia el audio para que se reprodusca sin sonido.</p>'
  +'<p>El atributo <strong>autoplay</strong> para que se reproduzca automáticamente al cargar la página. Pero el <strong>autoplay</strong> no reproduce automáticamente el video realmente si el usuario no ha interactuado primero. Para que siempre se inicie automáticamente se agrega el atributo <strong>muted</strong> junto con el <strong>autoplay</strong>.</p>'
  +'<p>El atributo <strong>loop</strong> permite que cuando el audio finalice, vuelva a reproducirse automáticamente.</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>audio</blue> <lightblue>src</lightblue>=<orange>"//"</orange>&gt'
    +'</pre>'
  +'</div>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

function iframeHTMLSelected(){
  let htmlContentPageRight = 
  '<h1>&ltiframe&gt</h1>'
  +'<p>Un &ltiframe&gt permite integrar una página web dentro de otra. No todas las páginas web pueden integrarse.</p>'
  +'<p>Para evitar que un &ltiframe&gt integre tu página web se utiliza un metadato en el &lthead&gt</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>iframe</blue> <lightblue>width</lightblue>=<orange>"100%"</orange> <lightblue>height</lightblue>=<orange>"415"</orange> <lightblue>src</lightblue>=<orange>"https://gabrielgnp.github.io/Portafolio-2.0"</orange>&gt'
    +'</pre>'
  +'</div>'
  +'<p>El iframe puede tener muchos otros atributos como:</p>'
  +'<p>El atributo <strong>title</strong> agrega un titulo que se mostrará al poner el puntero sobre el iframe</p>'
  +'<p>El atributo <strong>frameborder</strong> elimina el borde que se mostrara en el iframe</p>'
  +'<p>El atributo <strong>allowfullscreen</strong> permite que cuando se le de a la pantalla completa, se muestre en pantalla completa</p>'
  +'<p>El atributo <strong>allow</strong> indica los permisos que tendrá el iframe, por ejemplo:</p>'
  +'<div class="panelCodeView">'
    +'<div class="titleCodeView">HTML</div>'
    +'<pre class="codeView">'
      +'&lt<blue>iframe</blue> <lightblue>allow</lightblue>=<orange>"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"</orange>&gt'
    +'</pre>'
  +'</div>'
  +'<p>Se debe tener cuidado con los permisos que se agregan al iframe, puede generar brechas de seguridad.</p>'
  +'<p>A los &ltiframe&gt se les puede aplicar aspect-ratio igual que a las imágenes.</p>'
  +'<iframe width="100%" height="415" src=https://gabrielgnp.github.io/Portafolio-2.0>'
  ;
  $q("#pageRight").innerHTML = htmlContentPageRight; 
}

