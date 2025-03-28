// Promise.race()
document.getElementById('btn-race').addEventListener('click', () => {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "Primera"));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Segunda"));

    Promise.race([promise1, promise2])
        .then(result => {
            document.getElementById('race-example').textContent = `Resultado: ${result}`;
        })
        .catch(error => {
            document.getElementById('race-example').textContent = `Error: ${error}`;
        });
});

// Promise.any()
document.getElementById('btn-any').addEventListener('click', () => {
    const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Primera exitosa"));
    const promise4 = new Promise((_, reject) => setTimeout(reject, 200, "Segunda fallida"));

    Promise.any([promise3, promise4])
        .then(result => {
            document.getElementById('any-example').textContent = `Resultado: ${result}`;
        })
        .catch(error => {
            document.getElementById('any-example').textContent = `Error: ${error}`;
        });
});

// Promise.all()
document.getElementById('btn-all').addEventListener('click', () => {
    const promise5 = new Promise((resolve) => setTimeout(resolve, 100, "Primera"));
    const promise6 = new Promise((resolve) => setTimeout(resolve, 200, "Segunda"));

    Promise.all([promise5, promise6])
        .then(results => {
            document.getElementById('all-example').textContent = `Resultados: ${results.join(", ")}`;
        })
        .catch(error => {
            document.getElementById('all-example').textContent = `Error: ${error}`;
        });
});

// Función para manejar la calificación
document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    const userName = document.getElementById('user-name').value;
    const rating = document.getElementById('rating').value;

    // Verificar si ya existe una calificación de este nombre
    const existingRatings = JSON.parse(localStorage.getItem('ratings')) || [];

    // Verificar si el usuario ya calificó
    const userRating = existingRatings.find(rating => rating.userName === userName);

    if (userRating) {
        document.getElementById('rating-feedback').textContent = `El nombre "${userName}" ya ha calificado. Intenta con otro nombre.`;
    } else {
        // Si no ha calificado, guardamos la calificación
        existingRatings.push({ userName, rating });
        localStorage.setItem('ratings', JSON.stringify(existingRatings));

        // Mostrar el mensaje de calificación recibida
        document.getElementById('rating-feedback').textContent = `¡Gracias ${userName}! Has calificado esta página con un ${rating} estrella(s).`;
    }
});
