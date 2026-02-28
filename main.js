document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('on');

        if (body.classList.contains('on')) {
            toggleButton.textContent = 'Turn Off';
        } else {
            toggleButton.textContent = 'Turn On';
        }
    });
});
