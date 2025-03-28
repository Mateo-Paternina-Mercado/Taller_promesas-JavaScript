# Proyecto: Taller Promesas en JavaScript

Este proyecto tiene como objetivo explorar tres métodos clave de las promesas en JavaScript: `Promise.race()`, `Promise.any()` y `Promise.all()`. A través de ejemplos prácticos, este recurso también permite a los usuarios calificar la página, guardando su calificación de manera persistente utilizando `localStorage`. Además, se verifica que cada usuario califique solo una vez.

## 🌟 Propósito del Proyecto

En este proyecto, el enfoque principal es explicar y demostrar tres métodos fundamentales de las promesas en JavaScript. Las promesas son una forma de manejar operaciones asíncronas, y estos tres métodos permiten controlar la resolución y el rechazo de múltiples promesas de maneras específicas. Los métodos son:

- **`Promise.race()`**: Devuelve una promesa que se resuelve o se rechaza cuando la primera promesa del iterable se resuelve o se rechaza.
- **`Promise.any()`**: Devuelve una promesa que se resuelve con el valor de la primera promesa que se resuelva correctamente de un conjunto de promesas, o se rechaza si todas las promesas fallan.
- **`Promise.all()`**: Devuelve una promesa que se resuelve cuando todas las promesas en un iterable se resuelven correctamente. Si alguna promesa se rechaza, `Promise.all()` se rechazará inmediatamente.

Además de estas funcionalidades, el proyecto incluye una **sección de calificación interactiva** que permite a los usuarios calificar la página, asegurando que cada persona solo pueda calificar una vez.

---

## 🚀 Funcionalidades

### 1. **`Promise.race()`**
Este método devuelve una promesa que se resuelve o se rechaza cuando la primera promesa del iterable se resuelve o se rechaza.

**Ejemplo de Código:**
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "Primera promesa resuelta"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Segunda promesa resuelta rápidamente"));

Promise.race([promise1, promise2])
    .then(result => console.log(result))  // Salida: "Segunda promesa resuelta rápidamente"
    .catch(error => console.error(error));
```

### 2. **`Promise.any()`**
Este método devuelve una promesa que se resuelve con el valor de la primera promesa exitosa de un conjunto de promesas. Si todas las promesas se rechazan, la promesa devuelta será rechazada.

**Ejemplo de Código:**
```javascript
const promise3 = new Promise((_, reject) => setTimeout(reject, 200, "Falló"));
const promise4 = new Promise((resolve) => setTimeout(resolve, 100, "Primera promesa exitosa"));

Promise.any([promise3, promise4])
    .then(result => console.log(result))  // Salida: "Primera promesa exitosa"
    .catch(error => console.error(error));
```

### 3. **`Promise.all()`**
Este método devuelve una promesa que se resuelve cuando todas las promesas del iterable se resuelven correctamente, o se rechaza si alguna promesa se rechaza.
**Ejemplo de Código:**
```javascript
const promise5 = new Promise((resolve) => setTimeout(resolve, 300, "Primera"));
const promise6 = new Promise((resolve) => setTimeout(resolve, 200, "Segunda"));

Promise.all([promise5, promise6])
    .then(results => console.log(results))  // Salida: ["Primera", "Segunda"]
    .catch(error => console.error(error));
```
### 💻 Sistema de Calificación Interactivo

En este proyecto, los usuarios pueden calificar la página con un puntaje entre 1 y 5. Si un usuario ya ha calificado, el sistema no permite nuevas calificaciones de ese nombre.

**Funcionamiento del Sistema de Calificación:**

1. Los usuarios ingresan su **nombre** y **calificación** (de 1 a 5).

2. Si el nombre ya ha calificado, el sistema muestra un mensaje de error diciendo "El nombre ya ha calificado. Intenta con otro nombre."

3. Si el nombre es nuevo, el sistema guarda la calificación en `localStorage`, asegurando que no se repita.

4. La calificación se visualiza inmediatamente con un mensaje de agradecimiento.

**Ejemplo del Código de la Calificación:**
```javascript
document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    const userName = document.getElementById('user-name').value;
    const rating = document.getElementById('rating').value;

    const existingRatings = JSON.parse(localStorage.getItem('ratings')) || [];

    const userRating = existingRatings.find(rating => rating.userName === userName);

    if (userRating) {
        document.getElementById('rating-feedback').textContent = `El nombre "${userName}" ya ha calificado. Intenta con otro nombre.`;
    } else {
        existingRatings.push({ userName, rating });
        localStorage.setItem('ratings', JSON.stringify(existingRatings));

        document.getElementById('rating-feedback').textContent = `¡Gracias ${userName}! Has calificado esta página con un ${rating} estrella(s).`;
    }
});
```

### 📑 Archivos del Proyecto

Este proyecto consta de tres archivos principales:

1. `index.html`: Contiene la estructura de la página, los ejemplos de las promesas y el formulario para la calificación.

2. `styles.css`: Contiene los estilos para la página, con un diseño visualmente atractivo y responsive.

3. `scripts.js`: Implementa la lógica de las promesas y la funcionalidad de calificación interactiva.

### 🎨 Estilos Visuales

El diseño de la página está enfocado en ser **limpio y funcional**, con colores agradables para una mejor experiencia visual. El formulario es claro y las secciones están bien separadas para facilitar la interacción con el usuario.

**Código de Estilos (CSS):**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #333;
}

h1 {
    color: #4CAF50;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
    margin-top: 20px;
}

input, select {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
    width: 50%;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#rating-feedback {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

#rating-feedback.success {
    color: green;
}

#rating-feedback.error {
    color: red;
}
```

### 📜 Tecnologías Utilizadas
- **HTML5**: Para la estructura básica de la página.

- **CSS3**: Para los estilos de la página, proporcionando un diseño limpio y atractivo.

- **JavaScript**: Para implementar la lógica de las promesas y la funcionalidad de calificación interactiva.

- `localStorage`: Para almacenar las calificaciones de los usuarios de forma persistente en el navegador.

## 📝 Licencia MIT

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### Licencia MIT

MIT License

Copyright (c) [2025] [Mateo paternina]

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para usar el Software sin restricciones, incluyendo sin limitación los derechos para usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y para permitir a las personas a las que se les proporcione el Software hacer lo mismo, bajo las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso deben incluirse en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITÁNDOSE A LAS GARANTÍAS DE COMERCIABILIDAD, APTITUD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O LOS TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES POR CUALQUIER RECLAMO, DAÑO O OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRA ACCIÓN QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO O CUALQUIER OTRO TIPO DE INTERACCIONES CON EL SOFTWARE.
