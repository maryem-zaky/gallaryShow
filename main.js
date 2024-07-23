// script.js
var popupWindow = null;

document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.image-thumbnails img');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            showImage(thumbnail);
        });
    });

    document.getElementById('openButton').addEventListener('click', openPopup);
    document.getElementById('closeButton').addEventListener('click', closePopup);
});

function showImage(imgElement) {
    var mainImage = document.getElementById('mainImage');
    var imageDescription = document.getElementById('imageDescription');

    mainImage.src = imgElement.src;
    imageDescription.innerText = imgElement.alt;
}

function openPopup() {
    if (popupWindow && !popupWindow.closed) {
        popupWindow.focus();
        return;
    }

    var mainImage = document.getElementById('mainImage');
    var imageDescription = document.getElementById('imageDescription').innerText;

    popupWindow = window.open("", "PopupWindow", "width=400,height=400");
    popupWindow.document.write(`
        <html>
        <head>
            <title>Popup Image</title>
            <style>
                body { text-align: center; font-family: Arial, sans-serif; }
                img { width: 300px; height: 300px; }
                p { color: #333; }
            </style>
        </head>
        <body>
            <img src="${mainImage.src}" alt="Popup Image">
            <p>${imageDescription}</p>
        </body>
        </html>
    `);
}

function closePopup() {
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    }
}