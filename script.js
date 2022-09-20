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
    var select_detalles_modubrazo = document.getElementById("select_detalles_modubrazo");
    console.log(select_detalles_modubrazo.value);
    if("calidad media" == select_detalles_modubrazo.value){
     document.getElementById("price_modubrazo").innerHTML = 'S/500';
    }

    if("calidad media" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Media.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad alta" == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazo").innerHTML = 'S/560';
    }
    
    if("calidad alta" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 5 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza.<br>Patas: Chromadas.<br></span>' ;
    }

    if("" == select_detalles_modubrazo.value){
       document.getElementById("price_modubrazo").innerHTML = 'S/500 - 560';
    }

    if("" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>Por Favor Seleccione Una Calidad.</span>' ;
    }
}

/* Modular */
function modular_page(){
    var detalles_modulares = document.getElementById("detalles_modulares");
    console.log(detalles_modulares.value);
    if("calidad media" == detalles_modulares.value){
     document.getElementById("price_modular").innerHTML = 'S/400';
    }

    if("calidad media" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Media.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad alta" == detalles_modulares.value){
        document.getElementById("price_modular").innerHTML = 'S/450';
    }
    
    if("calidad alta" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza.<br>Patas: Chromadas.<br></span>' ;
    }

    if("" == detalles_modulares.value){
       document.getElementById("price_modular").innerHTML = 'S/400 - 450';
    }

    if("" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Por Favor Seleccione Una Calidad*</span>' ;
    }

    if("calidad media2" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Media.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad media2" == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/410';
       }
    
    if("calidad alta2" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad alta2" == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/460';
       }

    if("." == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Por Favor Seleccione Una Calidad*</span>' ;
    }

    if("." == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/410 - 460';
       }
}
