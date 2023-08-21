export function valida(input) {
	const tipoDeInput = input.dataset.tipo;
	
	if (input.validity.valid && input.checkValidity()) {
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
	// Validación sección Contacto
	nombre: {
		valueMissing: "El campo nombre no puede estar vacío",
	},
	mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    },
	// Validación sección Login
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

function mostrarMensajeDeError(tipoDeInput, input) {
	let mensaje = "";
	tipoDeErrores.forEach( error => {
		if(input.validity[error]){
			console.log(tipoDeInput, error);
			console.log(input.validity[error]);
			console.log(mensajesDeError[tipoDeInput][error]);
			mensaje = mensajesDeError[tipoDeInput][error];
		}
		else if (!input.checkValidity() && input.type == "textarea" && input.value != "") {
            mensaje = `El mensaje debe contener entre ${input.minLength} a 120 caracteres`;
        }
	});
	return mensaje;
}