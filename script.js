const counter = document.querySelector('.counter')
const lbtn = document.querySelector('.lower')
const ubtn = document.querySelector('.upper')
let count = 0
ubtn.addEventListener('click',add)
lbtn.addEventListener('click',redu)
function add(){
    count++;
    counter.innerHTML=count;
    if(counter.innerHTML>'0'){
        counter.style.color= 'green'
    }
    else if(counter.innerHTML=='0'){
        counter.style.color = 'white'
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{
        duration:500,fill:"forwards"
    })
}
function redu(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<'0'){
        counter.style.color= 'red'
    }
    else if(counter.innerHTML=='0'){
        counter.style.color = 'white'
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{
        duration:500,fill:"forwards"
    })
}