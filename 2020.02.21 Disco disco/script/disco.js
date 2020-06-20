
<!--Author Rostislav Dolbilov-->

let container = document.querySelector('.container');

let nSquare = 2500;

for (let i = 0; i < nSquare; i++){
    let sq = document.createElement('div');
    sq.classList.add('sq');
    sq.style.backgroundColor = getRandomColor();
    container.appendChild(sq);
}

function getRandomColor() {
    return 'rgb(' +
        (~~(Math.random() * 256)) + ',' +
        (~~(Math.random() * 256)) + ',' +
        (~~(Math.random() * 256)) + ')';
}

function setColor() {
    let squares = document.querySelectorAll(".sq");
    [].forEach.call(squares, function (item) {
        item.style.backgroundColor = getRandomColor();
    });
}

window.onload = function(){
    window.setInterval(
        function(){
            setColor();
        },10);
};

<!--Author Rostislav Dolbilov-->
