function wrapImagesWithFigure() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        const figure = document.createElement('figure');
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);
        if (img.alt) {
            const figcaption = document.createElement('figcaption');
            figcaption.innerText = img.alt;
            figure.appendChild(figcaption);
        }
    });
}

