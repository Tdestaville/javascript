let entrada = prompt ("Ingresá tu equipo de fútbol");
while (entrada !="ESC") {
    switch (entrada) {
        case "Boca Juniors":
            alert ("Hola Bostero");
            for (let i = 1; i <=6; i ++){
                alert(i + "Copa Libertadores");
            }
            break; 
            case "River Plate":
                alert ("Hola Gallina");
                for (let i = 1; i <=4; i ++){
                    alert(i + "Copa Libertadores");
                }
                break;
                case "San Lorenzo":
                    alert ("Hola Cuervo ");
                    for (let i = 1; i <=1; i ++){
                        alert(i + "Copa Libertadores");
                    }
                    break;
                    case "Independiente":
                        alert ("Hola Diablo");
                        for (let i = 1; i <=7; i ++){
                            alert(i + "Copa Libertadores");
                        }
                        break;

    }
}





