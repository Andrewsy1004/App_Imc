import Swal from 'sweetalert2';

export const validaciones = (peso, altura) => {
  // Validar que peso y altura no sean NaN y estén dentro de los rangos permitidos
  if ((isNaN(altura) && isNaN(peso)) || (altura < 0.55 || altura > 3) && (peso < 20 || peso > 400)){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Los valores de peso y/o altura no son válidos.',
    });
    return false;
  }

  // Si sólo el peso es inválido
  if (isNaN(peso) || peso < 20 || peso > 400) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Peso inválido. Asegúrate de que el peso esté entre 20 y 400 kg.',
    });
    return false;
  }

  // Si sólo la altura es inválida
  if (isNaN(altura) || altura < 0.55 || altura > 3) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Altura inválida. Asegúrate de que la altura esté entre 0.55 y 3 metros.',
    })
    return false;
  }

  // Si todo es válido
  return true;
}
