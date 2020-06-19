const celdas = document.getElementsByClassName('celdas');
const equis = document.getElementsByClassName('equis');
const circle = document.getElementsByClassName('circle');
const xoxo = [
    [equis[0], equis[1], circle[0]],
    [equis[2], equis[3], circle[1]],
    [equis[4], equis[5], circle[2]],
    [equis[6], equis[7], circle[3]],
    [equis[8], equis[9], circle[4]],
    [equis[10], equis[11], circle[5]],
    [equis[12], equis[13], circle[6]],
    [equis[14], equis[15], circle[7]],
    [equis[16], equis[17], circle[8]]
];
var ganador = null;
var turno = 1;
var quien = document.getElementById('quien');
var titulo = document.getElementById('turno');

for (let i = 0; i < celdas.length; i++) {

    celdas[i].addEventListener('click', function () {

        //compruebo si el cuadrado esta vacio o no

        if (celdas[i].id == "" && ganador == null) {

            //Si son turnos impares poner X

            if (turno == 1 || turno == 3 || turno == 5 || turno == 7 || turno == 9) {

                celdas[i].id = 'X'
                xoxo[i][0].style.strokeDashoffset = '0'
                xoxo[i][1].style.strokeDashoffset = '0'
                quien.innerHTML = 'O'
                quien.style.color = '#f000ff'
                turno++

                ganador = detganador('X')
            }

            //Si son turnos pares poner O

            else if (turno == 2 || turno == 4 || turno == 6 || turno == 8) {

                celdas[i].id = 'O'
                xoxo[i][2].style.strokeDashoffset = '0'
                quien.innerHTML = 'X'
                quien.style.color = '#4deeea'
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
        (celdas[0].id == letra && celdas[1].id == letra && celdas[2].id == letra) ||
        (celdas[3].id == letra && celdas[4].id == letra && celdas[5].id == letra) ||
        (celdas[6].id == letra && celdas[7].id == letra && celdas[8].id == letra) ||
        (celdas[0].id == letra && celdas[3].id == letra && celdas[6].id == letra) ||
        (celdas[1].id == letra && celdas[4].id == letra && celdas[7].id == letra) ||
        (celdas[2].id == letra && celdas[5].id == letra && celdas[8].id == letra) ||
        (celdas[0].id == letra && celdas[4].id == letra && celdas[8].id == letra) ||
        (celdas[2].id == letra && celdas[4].id == letra && celdas[6].id == letra)
    ) {
        return letra
    }
    else {
        return null
    }
}

