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

    if("" == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazo").innerHTML = 'S/490 - 540';
     }
    
    if("calidad media" == select_detalles_modubrazo.value){
     document.getElementById("price_modubrazo").innerHTML = 'S/490';
    }

    if("calidad media" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Normal.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad alta" == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazo").innerHTML = 'S/540';
    }
    
    if("calidad alta" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza(Resorte).<br>Patas: Chromadas.<br></span>' ;
    }

    if("" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>Por Favor Seleccione Una Calidad.</span>' ;
    }

    if("." == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazodiseño").innerHTML = 'S/500 - 550';
       }
    
    if("calidad normalcondiseño" == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazodiseño").innerHTML = 'S/500';
       }

    if("calidad normalcondiseño" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Normal.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }
    
    if("calidad altacondiseño" == select_detalles_modubrazo.value){
        document.getElementById("price_modubrazodiseño").innerHTML = 'S/550';
       }

    if("calidad altacondiseño" == select_detalles_modubrazo.value){
        document.getElementById("modu_brazo_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza(Resorte).<br>Patas: Chromadas.<br></span>' ;
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
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza(Resorte).<br>Patas: Chromadas.<br></span>' ;
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
    
    if("calidad alta2" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: Tela Con Jacquar.<br>Madera: Cachimbo.<br>Soporte: Noza(Resorte).<br>Patas: Chromadas.<br></span>' ;
    }

    if("." == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Por Favor Seleccione Una Calidad*</span>' ;
    }

    if("." == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/410 - 460';
       }
    
    if("calidad media2" == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/410';
       }
    
    if("calidad alta2" == detalles_modulares.value){
        document.getElementById("price_modulardiseño").innerHTML = 'S/460';
       }

       if("calidad mediacuero" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Media.<br>Espuma: Zebra.<br>Incluye: 4 Cojines Decorativos.<br>Material: UltraCuero.<br>Madera: Cachimbo.<br>Soporte: Madera.<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad mediacuero" == detalles_modulares.value){
        document.getElementById("price_modularcuero").innerHTML = 'S/440';
       }
    
    if("calidad altacuero" == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Este producto no incluye mesa de centro ni banqueta* <br>Calidad: Alta.<br>Espuma: Zebra Dunlopillo.<br>Incluye: 4 Cojines Decorativos.<br>Material: UltraCuero.<br>Madera: Cachimbo.<br>Soporte: Noza(Resorte).<br>Patas: Chromadas.<br></span>' ;
    }

    if("calidad altacuero" == detalles_modulares.value){
        document.getElementById("price_modularcuero").innerHTML = 'S/490';
       }

    if(".." == detalles_modulares.value){
        document.getElementById("modular_calidad").innerHTML = '<span>*Por Favor Seleccione Una Calidad*</span>' ;
    }

    if(".." == detalles_modulares.value){
        document.getElementById("price_modularcuero").innerHTML = 'S/440 - 490';
       }
}
