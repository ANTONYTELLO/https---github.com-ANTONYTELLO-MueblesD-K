const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* Modu_Brazo */
function modu_brazo(){
    var select_detalles = document.getElementById("select_detalles");
    console.log(select_detalles.value);
    if("calidad media" == select_detalles.value){
     document.getElementById("price").innerHTML = 'S/500';
    }

    if("calidad media" == select_detalles.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Media.<br>Espuma: Zebra.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad alta" == select_detalles.value){
        document.getElementById("price").innerHTML = 'S/560';
    }
    
    if("calidad alta" == select_detalles.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza.<br>Patas: Chromadas.<br></span>' ;
    }

    if("" == select_detalles.value){
       document.getElementById("price").innerHTML = 'S/500-560';
    }

    if("" == select_detalles.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>Por Favor Seleccione Una Calidad.</span>' ;
    }
}