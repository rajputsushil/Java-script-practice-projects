let Stranger =document.getElementById('Stranger')
let Add =document.getElementById('Add');
let Remove =document.getElementById('remove');

Add.addEventListener('click',()=>{
    Stranger.innerHTML='Freinds';
    Stranger.style.color='green'
})
Remove.addEventListener('click',()=>{
    Stranger.innerHTML='Strangers';
    Stranger.style.color='Red'
})

let Strangers =document.getElementById('Strangers');
let Addbtn =document.getElementById('Addbtn');
let check =0;
Addbtn.addEventListener('click',addfriend);
function addfriend(){
    if(check ===0){
        Strangers.innerHTML='Freinds';
        Strangers.style.color ='green';
        Addbtn.innerHTML='Remove'
        check=1;
    }else{
        Strangers.innerHTML='Strangers';
        Strangers.style.color ='red';
        Addbtn.innerHTML='Add-Freind'
        check=0;
    }
}

