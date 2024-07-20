//cursor
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e){
    cursor.style.top = `${e.clientY - cursor.offsetHeight/2}px`;
    cursor.style.left = `${e.clientX - cursor.offsetWidth/2}px`;

})