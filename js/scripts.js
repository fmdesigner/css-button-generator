const formControls = document.getElementById('controles');
const btn = document.querySelector('.btn');
const cssText = document.querySelector('.css-result');

const htmlButton = document.querySelector('.html');
const cssHover = document.querySelector('.css-hover');
const cssTextHover = document.querySelector('.css-hover .css-result');


formControls.addEventListener('change', handleChange);

/*Estilos do botão*/
const handleStyle = {
    element: btn,
    
    text(value) {
        this.element.innerText = value;
    }, 
    
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    },
    
    fontFamily(value) {
        this.element.style.fontFamily =  value + ', sans-serif';
    },
    
    color(value) {
        this.element.style.color = value;
    },
    
    fontWeight(value) {
        this.element.style.fontWeight = value;
    },
    
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    
    width(value) {
        this.element.style.width = value + 'px';
    },
    
    height(value) {
        this.element.style.height = value + 'px';
    }, 
    
    border(value) {
        this.element.style.border = value + 'px';
    },
    
    borderStyle(value) {
        this.element.style.borderStyle = value;
    },
    
    borderColor(value) {
        this.element.style.borderColor = value;
    },
    
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    
    cursor(value) {
        this.element.style.cursor = value;
    },
    
    transition(value) {
        this.element.style.transition = value;
    },

}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    showCss();
    
    htmlButton.innerText = '<button>' + text.value + '</button>'; 
}

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>'); 
    
}
                    
/* Fonts */

const fontBox = document.querySelector('.google-font');
const googleFont = document.querySelector('#fontFamily');
const googleApi = '&lt;link rel="preconnect" href="https://fonts.googleapis.com"></span> <span>&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></span>';

/* Font Family */

const outfit = '&lt;link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></span>';
const montserrat = '&lt;link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></span>';
const roboto = '&lt;link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></span>';
const robotoSlab = '&lt;link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></span>';
const lato = '&lt;link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></span>'



googleFont.addEventListener('change', showGoogleFonts)

function showGoogleFonts(element) {
    
    const font = element.target.value;
    if(font === 'Outfit'){
        fontBox.innerHTML = '<span>' + googleApi + '<span>' + outfit;
    } else if(font === 'Montserrat') {
        fontBox.innerHTML = '<span>' + googleApi + '<span>' + montserrat;
    } else if(font === 'Roboto') {
        fontBox.innerHTML = '<span>' + googleApi + '<span>' + roboto;
    } else if(font === 'Lato') {
        fontBox.innerHTML = '<span>' + googleApi + '<span>' + lato;
    } else if(font === 'Roboto Slab') {
        fontBox.innerHTML = '<span>' + googleApi + '<span>' + robotoSlab;
    }
     
 
}

/* Add Hover Effect */

const hover = document.getElementById('hover');
hover.addEventListener('change', selectHover);

function selectHover(e) {
    const effect = e.target.value;
    console.log(effect);
    
    btn.classList.remove('opacity', 'scale', 'translate');
    cssHover.style.display = 'flex';
    
    
    if(effect === 'Opacity'){
        cssTextHover.innerText = 'opacity: .5;';        
        btn.classList.add('opacity');
        
    } else if(effect === 'Scale'){
        cssTextHover.innerText = 'transform: scale(1.1);';
        btn.classList.add('scale');
        
    } else if(effect === 'Translate'){
        cssTextHover.innerText = 'transform: translate(0, -5px);';
        btn.classList.add('translate');
    }
    
}


/* BTN Copy */

const btnCopy = document.querySelectorAll('.copy');

function copyCode(e) {
    e.preventDefault();
    const value = this.nextElementSibling.innerText;
    navigator.clipboard.writeText(value);
}

btnCopy.forEach((btn) => {
    btn.addEventListener('click', copyCode);
})





