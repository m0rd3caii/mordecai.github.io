const elementsToResetCursor = document.querySelectorAll('.reset-cursor');

// Agrega un evento de escucha para restablecer el cursor al predeterminado
elementsToResetCursor.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'auto';
    });
});
