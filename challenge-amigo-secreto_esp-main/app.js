let nombres = []; //este comando sera nuestra caja que guardara todos los nombres que introdusca el usuario

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();
     //estos comandos nos ayudaran a inroducir los nombres y que nuestro espacio se mantenga limpio para introducir más 

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido'); // mostrar nuestra alerta si el nombre no se introduce
        return; // detene la función si no hay un nombre
    }

    nombres.push(nombre); // introducir un nombre
    actualizarLista(); // actualiza la lista mostrada
    amigoInput.value = ''; // borra los nombres para introducir más
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // borra la lista actual

    // integra los nombres escritos a una lista visible
    nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // borra los reultados anteriores para iniciar nuevamente

    if (nombres.length < 2) {
        alert('Necesitas al menos dos nombres para sortear un amigo secreto.');
        return;
    }
 const indiceAleatorio = Math.floor(Math.random()* nombres.length);
    const amigoSecreto = nombres [indiceAleatorio];
    //Mostrar solo un nombre ganador

    let li = document.createElement('li');
    li.textContent = `¡El Amigo Secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);}



    
   

