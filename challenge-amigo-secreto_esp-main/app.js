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

    // los siguientes pasos nos ayudaran a elegir un nombre de manera aleatoria
    for (let i = nombres.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nombres[i], nombres[j]] = [nombres[j], nombres[i]]; // Swap elements
    }

    //nos mostrara el nombre elegido como nuestro amigo secreto
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement('li');
        let dador = nombres[i];
        let receptor = nombres[(i + 1) % nombres.length]; // la siguiente persona en la lista mezclada
        li.textContent = `${dador} --> Tu amigo secreto es ${receptor}`;
        resultado.appendChild(li);
    }
}

function reiniciarJuego() {
    nombres = []; // limpiar todo para iniciar nuevamente
    document.getElementById('amigo').value = ''; //borrar nuestro campo de entrada
    document.getElementById('listaAmigos').innerHTML = ''; // borrar nuestra lista de nombes visibles
    document.getElementById('resultado').innerHTML = ''; // borrar el resultado borrado
}