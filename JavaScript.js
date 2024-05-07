const image = document.getElementById('image');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    if (image.src.includes('smiley.png')) {
        image.src = 'sad.jpeg';
        document.body.style.backgroundColor = 'lightcoral';
    } else {
        image.src = 'smiley.png';
        document.body.style.backgroundColor = 'lightblue';
    }
});


