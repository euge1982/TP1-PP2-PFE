//Archivo que tiene la funcionalidad del Select dinamico

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('options');   //Capturo el select

    //Fetch JSON para llenar el select dinamicamente
    fetch('public/data.json')
        .then(response => response.json())   //Convierto la respuesta en formato JSON

        .then(data => {   //Agrego las opciones al select
            data.options.forEach(option => {   //Recorro las opciones
                let opt = document.createElement('option');   //Creo las opciones
                opt.value = option.value;   //Asigno los valores
                opt.textContent = option.text;   //Asigno los textos
                select.appendChild(opt);   //Agrego las opciones al select
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));   //Manejo de errores

    //Obtener el boton
    const submitButton = document.getElementById('submit-button');

    //Escuchar el evento click del boton
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();   //Prevenir que el formulario se envie y recargue la pagina

        //Crear objeto con los valores del formulario
        const formData = {   // Objeto con los datos del formulario
            nombre: document.getElementById('name').value,
            Email: document.getElementById('email').value,
            Contraseña: document.getElementById('password').value,
            opcionSeleccionada: document.getElementById('options').value   
        };

    //Imprimir el objeto en consola
    console.log(formData);

    document.getElementById('userForm').reset();   //Limpiar el formulario

    });

});
