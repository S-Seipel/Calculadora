const pantalla = document.querySelector( ".div__div" )
const botones = document.querySelectorAll( ".button" )



botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;

        if(boton.id === "buttonMult"){
            pantalla.textContent += "*";
            return
        }
        if(boton.id === "buttonCE"){
            pantalla.textContent = "0";
            return
        }
        if(boton.id === "buttonBorrar"){
            if( pantalla.textContent.length == 1 ){
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "buttonIgual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch{
                pantalla.textContent = "error!";
            }
            return;
        }


        if(pantalla.textContent === "0"){
            pantalla.textContent = botonPresionado;
        } else{
            pantalla.textContent += botonPresionado;
        }
    })
})