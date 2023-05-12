const body=document.querySelector('body');
const toggle=document.getElementById('toggle');

toggle.onclick=function(){
    toggle.classList.toggle('activo');
    body.classList.toggle('activo');
}




