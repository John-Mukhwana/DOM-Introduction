document.addEventListener('DOMContentLoaded', ()=>{
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;
    const addform=forms['add-movie'];

       //delete movies
     list.addEventListener('click',(e)=>{
            if(e.target.className=="delete"){
                const li=e.target.parentElement;
                li.parentNode.removeChild(li);
            }
       })
    //add movies
    addform.addEventListener('submit', (e) =>{e.preventDefault()
        //create element
        const value=addform.querySelector('input[type="text"]').value;
        const li=document.createElement('li');
        const movieName=document.createElement('span');
        const deletebtn=document.createElement('span');
        
        //add text content
        movieName.textContent=value;
        deletebtn.textContent='delete';

        //add classes
        movieName.classList.add('name');
        deletebtn.classList.add('delete');

        //append DOM
        li.appendChild(movieName);
        li.appendChild(deletebtn);
        list.appendChild(li);

        //clear inputs
        addform.querySelector('input[type="text"]').value='';


    })

}
)
