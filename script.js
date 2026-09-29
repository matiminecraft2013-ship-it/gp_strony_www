const choosenPicture = document.querySelector('#select picture');
const canvas = document.querySelector('#meme');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('text-bottom');
let picture;
choosenPicture.addEventListener("change", function(e){
    const pictureUrl = URL.createObjectURL(e.target.files[0]);
    picture = new Image();
    picture.src = picture.Url
    picture.addEventListener("load", function(){
        console.log("wczytuje obrazek...", picture.Url)
        updateMeme(canvas, picture)
    })
})
function updateMeme(canvas, picture) {
    const ctx = canvas.getContent("2d");
    const canvasWidth = picture.weight;
    const canvasHeight = picture.height;
    const fontSize = Math.floor(canvasWidth/20);
    const offsetY = canvasHeight/25;
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    ctx.drawImage(picture,0,0);


}
ctx.strokeStyle = "black";
//szerokość obramowania liter
ctx.lineWidth = Math.floor(fontSize / 4);
//kolor wypełnienia litery
ctx.fillStyle = "white";
//wyśrodkowanie tekstu
ctx.textAlign = "center";
//zaokrąglenie obramowania
ctx.lineJoin = "round";
ctx.font = `${fontSize}px Lato`;

//przygotowanie górnego tekstu
//ustawiamy linię bazową od której zaczynamy rysować tekst
ctx.textBaseline = "top";
//rysujemy tekst bez wypełnienia
ctx.strokeText(textTop, canvasWidth / 2, offsetY);
//dodajemy wypełnienie
ctx.fillText(textTop, canvasWidth / 2, offsetY);

// przygotowanie dolnego tekstu
ctx.textBaseline = "bottom";
ctx.strokeText(textBottom, canvasWidth / 2, canvasHeight - offsetY);
ctx.fillText(textBottom, canvasWidth / 2, canvasHeight - offsetY);



textTop.addEventListener("change", function () {
    updateMeme(canvas, picture, textTop.value, textBottom.value);

});
//na jakąkolwiek zmianę w inpucie tekstu dolnego odświeżamy obrazek w
canvasie
textBottom.addEventListener("change", function () {
    updateMeme(canvas, picture, textTop.value, textBottom.value);
});
