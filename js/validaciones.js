export function valida(input) {
	const tipoDeInput = input.dataset.tipo;
	if (validadores[tipoDeInput]) {
	  validadores[tipoDeInput](input);
	}
	
	if (input.validity.valid) {
		input.parentElement.classList.remove("input__container--invalid");
	} else {
		input.parentElement.classList.add("input__container--invalid");
	}
  }


const validadores = {
	// nacimiento: (input) => validarNacimiento(input),
};