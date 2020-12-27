const input = document.querySelectorAll('input');
const btn = document.querySelector('.btn');


const expresiones = {
	firstName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

btn.addEventListener('click', validation)

function validation(){
    input.forEach(index => {
        switch(index.name){
            case "first-name":
                message(index, expresiones.firstName)

            break;
            
            case "last-name":
                message(index, expresiones.lastName)

            break

            case "email":
                message(index, expresiones.email)

            break

            case "pass":
                message(index, expresiones.password);

            break
        }
    
    })
}

function message(campo, expresion){
    let input = '.'+campo.name;
    let img = '.img-'+campo.name;
    let text = '.text-'+campo.name;
    
    if(expresion.test(campo.value)){
        document.querySelector(input).classList.remove('error');
        document.querySelector(img).classList.add('oculto');
        document.querySelector(text).classList.add('oculto');

    }else{
        document.querySelector(input).classList.add('error');
        document.querySelector(img).classList.remove('oculto');
        document.querySelector(text).classList.remove('oculto');
    }
}



