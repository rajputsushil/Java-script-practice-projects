const Add =document.querySelector('.add');

Add.addEventListener('click',()=>{
   let inputvalue =document.getElementById('inputfield').value;
      if(inputvalue===""){
         alert('Please Enter The Text')
      }else{
         let listcontainer =document.querySelector('.list_container');
         
         listcontainer.innerHTML +=`
         <li>${inputvalue} <button class="remove">Remove</button></li>
         `
         const remove =document.querySelector('.remove');
         remove.addEventListener('click',()=>{
            listcontainer.remove()
         })
      }
   })
   
   