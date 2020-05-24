function activeNavController(){
var scrollActive = () => {
    let html = document.querySelector("html");
    let header =  document.querySelector("nav");
    let ubicacionPrincipal = html.scrollTop ;

    document.addEventListener("scroll", ()=>{
        let desplazamientoActual = html.scrollTop;
        if(ubicacionPrincipal+20 <= desplazamientoActual){
            header.classList.add("cian");
        }
        else{
            header.classList.remove('vista');
            if(desplazamientoActual<=50){
                header.classList.remove('cian');
            }
        }
        ubicacionPrincipal = desplazamientoActual;
    });
}

scrollActive();

}