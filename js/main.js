const celdas = document.getElementsByClassName('celdas');
var ganador = null;
var turno = 1;
var quien = document.getElementById('quien');
var titulo = document.getElementById('turno')


for (let i = 0; i < celdas.length; i++) {

    celdas[i].addEventListener('click', function() {

        //compruebo si el cuadrado esta vacio o no

        if (celdas[i].textContent == "" && ganador == null) {

            //Si son turnos impares poner X

            if (turno == 1 || turno == 3 || turno == 5 || turno == 7 || turno == 9) {

                celdas[i].innerHTML = 'X'
                celdas[i].style.color = 'red'
                quien.innerHTML = 'O'
                quien.style.color = 'blue'
                turno++

                ganador = detganador('X')
            }

            //Si son turnos pares poner O

            else if (turno == 2 || turno == 4 || turno == 6 || turno == 8) {

                celdas[i].innerHTML = 'O'
                celdas[i].style.color = 'blue'
                quien.innerHTML = 'X'
                quien.style.color = 'red'
                turno++

                //Si ya ganó el O ponerlo de ganador
                ganador = detganador('O')
            }
        }
        else {
            return null
        }

        if (ganador) {

            titulo.innerHTML = 'El ganador es: ' + ganador
        } 
        else if (!ganador && turno == 10) {
            
            titulo.innerHTML = 'Empate'
        }

    })
}

function detganador(letra) {

    if (
        (celdas[0].innerHTML == letra && celdas[1].innerHTML == letra && celdas[2].innerHTML == letra) ||
        (celdas[3].innerHTML == letra && celdas[4].innerHTML == letra && celdas[5].innerHTML == letra) ||
        (celdas[6].innerHTML == letra && celdas[7].innerHTML == letra && celdas[8].innerHTML == letra) ||
        (celdas[0].innerHTML == letra && celdas[3].innerHTML == letra && celdas[6].innerHTML == letra) ||
        (celdas[1].innerHTML == letra && celdas[4].innerHTML == letra && celdas[7].innerHTML == letra) ||
        (celdas[2].innerHTML == letra && celdas[5].innerHTML == letra && celdas[8].innerHTML == letra) ||
        (celdas[0].innerHTML == letra && celdas[4].innerHTML == letra && celdas[8].innerHTML == letra) ||
        (celdas[2].innerHTML == letra && celdas[4].innerHTML == letra && celdas[6].innerHTML == letra)
    ) {
        return letra
    }
    else {
        return null
    }
}