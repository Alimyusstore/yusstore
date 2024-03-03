//Varibles
const corridion = document.getElementsByClassName('content-container');

for (let i = 0; i < corridion.length; i++){
    corridion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};