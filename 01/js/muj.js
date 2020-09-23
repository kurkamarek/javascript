/* alert("Toto pochází z externího souboru"); */
// var nadpis - starší deklarace proměnné v JS
// proměnná v nových verzích JS
let nadpis = document.getElementById('nadpis');
let footer = document.querySelector('footer');
let img = document.querySelector('img')

img.addEventListener('mouseover', function () {
    img.src = 'manka.jpg';
})
img.addEventListener('mouseleave', function () {
    img.src = 'rumcajs.jpg';
})
nadpis.addEventListener('click', function () {
    nadpis.innerHTML = 'Ahoj <i>Karle</i>';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-right');
    nadpis.classList.add('text-info');
    nadpis.classList.remove('text-uppercase');
});


footer.addEventListener('mouseover', function () {
    footer.classList.add('jumbotron');
    footer.classList.add('bg-warning');
    footer.classList.add('text-danger');
    footer.classList.remove('bg-danger');
    footer.classList.add('text-center');
    nadpis.innerHTML = 'Myš je v zápatí';
});