document.body.style.background = "#333";

const body  = document.querySelector("body")
const X = document.getElementById('X');
const Y = document.getElementById('Y');
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function getRandomColor() {
    var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function pos(e) {
    X.innerText = e.pageX
    Y.innerText = e.pageY
}
const buildHeart = () => {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart snowflake";
    heart.style.left = `${X.textContent}px`;
    heart.style.top = `${Y.textContent}px`;
    const size = getRandomInt(25, 60);
    heart.style.fontSize = `${size}px`;
    heart.style.color = getRandomColor();
    heart.style.opacity = Math.min(Math.random() + 0.2, 1);
    const duration = getRandomInt(2, 5);
    heart.style.animationDuration = `${duration}s`;
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
    return heart;
};
function renderHeart() {
    const heart = buildHeart();
    document.body.append(heart);
}
addEventListener('mousemove', pos, false);//в элемент вставляется координата и после берется из него для обозначения местоположения курсора(иначе сделать не получалось)
body.addEventListener("mousemove", renderHeart)
