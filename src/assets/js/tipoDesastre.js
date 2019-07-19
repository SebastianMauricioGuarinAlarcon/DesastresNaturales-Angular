/**
 * Este JavaScript permite seleccionar el tipo de desastre natural
 * de forma aleatoria.
 */

//NOTA: este JavaScrip decidi ignorarlo porque en Angular me genero  conflicto
//      al momento de ejecutarse...
//      la solucion fue copiar este codigo a TypeScript dentro del archivo "app.component.ts"

    
var rand = Math.floor(Math.random() * 10);
var texto;
switch (rand) {
    case 1:
        texto = "INUNDACION";
        break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
    case 2:
        texto = "TERREMOTO";
        break;
    case 3:
        texto = "TSUNAMI";
        break;
    case 4:
        texto = "EPIDEMIA";
        break;
    case 5:
        texto = "INCENDIO FORESTAL";
        break;
    case 6:
        texto = "DESLIZAMIENTO";
        break;
    case 7:
        texto = "TORMENTA";
        break;
    case 8:
        texto = "INVACION ALIEN";
        break;
    case 9:
        texto = "HURACAN";
        break;
    default:
        texto = "DESLIZAMIENTO";
}

document.getElementById('desastre').innerHTML = texto;
console.log(rand);

