document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
    } else if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
