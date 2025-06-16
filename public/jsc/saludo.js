function saludar(){
    let saludo = document.getElementById("mostrar_saludo");

    // saludo.textContent = "Saludando desde el boton mediante click"; 
    saludo.innerHTML = "<i>Saludando desde el boton mediante click</i>";
    console.log(saludo); 
}