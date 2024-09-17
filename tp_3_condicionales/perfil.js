let perfil = 'ADMINistrador';
let mensaje = ''

perfil = perfil.toLowerCase();
switch (perfil) {
    case 'administrador':
        mensaje = "Usted tiene todos los privilegios de uso del sistema";
        break;
    case 'asistente':
        mensaje = "Usted sólo tiene permisos de registrar, modificar y consultar datos";
        break;
    case 'invitado':
        mensaje = "Usted sólo tiene permisos de consultar datos";
        break;
    case '':
        mensaje = "Debe especificar el perfil del usuario";
        break;
    default:
        mensaje = "Debe especificar un perfil válido";
        break;
}

console.log(mensaje);
