
function changeImage() {
    let suppDiv = document.getElementById('question');
    suppDiv.remove();
    var newDiv = document.createElement('div');
    newDiv.setAttribute('style','text-align: center');
    var newContent = document.createTextNode('MERCIIIIII BEAUCOUP MARIOOON <3');
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv,currentDiv);
    let imageElement = document.getElementById('image');
    imageElement.src = 'https://media.tenor.com/KQxUqpbH8GUAAAAi/peach-goma-kiss-peach-kiss-goma.gif'
}   

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function grandit() {
    var btn = document.getElementById("yesButton");
    var width = btn.clientWidth;
    if (width == 600 && height == 600) {
        alert("");
    } else {
        btn.style.width = (width + 50) + "px";
        btn.style.height = (width + 50) + "px";
    }
    let text = ['pk pas ? ;(','alleeeer stppp :(((', 'je vais pleurer snif :C', 'ca va être trop bien... promis !!', 'arretes tu vas me briser le coeur </3']
    let rep = document.getElementById('rep');
    rep.textContent = text[getRandomInt(5)] ;
}