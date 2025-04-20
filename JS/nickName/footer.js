fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const footer = document.createElement('footer');
        footer.style.background = config.footer.background;
        footer.style.color = config.footer.color;
        footer.style.textAlign = 'center';
        footer.style.padding = '10px';
        footer.style.left = '0';
        footer.textContent = config.footer.text;
        document.body.appendChild(footer);
    });