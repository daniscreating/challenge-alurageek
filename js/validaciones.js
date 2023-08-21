export function valida(input) {
	const tipoDeInput = input.dataset.tipo;

	// if (validadores[tipoDeInput]) {
	//   validadores[tipoDeInput](input);
	// }
	
	if (input.validity.valid) {
		input.parentElement.classList.remove("input__container--invalid");
		input.parentElement.querySelector(".input__message-error").innerHTML = " ";
	} else {
		input.parentElement.classList.add("input__container--invalid");
		input.parentElement.querySelector(".input__message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
	}
  }

const tipoDeErrores = [
	'valueMissing',
	'typeMismatch',
	'patternMismatch'
];

const mensajesDeError = {
	nombre: {
		valueMissing: "El campo nombre no puede estar vacío",
	},
	email: {
		valueMissing: "El campo correo no puede estar vacío",
		typeMismatch: "El correo no es válido"
	},
	password: {
		valueMissing: "El campo contraseña no puede estar vacío",
		typeMismatch: "El correo no es válido",
		patternMismatch: "Al menos 8 caracteres, debe contener una letra minuscula, una letra mayuscula, un numero y un caracter especial",
	}
};



const validadores = {
	// nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
	let mensaje = "";
	tipoDeErrores.forEach( error => {
		if(input.validity[error]){
			console.log(tipoDeInput, error);
			console.log(input.validity[error]);
			console.log(mensajesDeError[tipoDeInput][error]);
			mensaje = mensajesDeError[tipoDeInput][error];
		}
	});
	return mensaje;
}