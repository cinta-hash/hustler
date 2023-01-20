window.addEventListener('load', () => {
    const form = document.getElementById('goal-form');
    const input = document.getElementById('new-goal-input');
    const goalsContainer =document.getElementById('goalsContainer')
    //console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       const goal = input.value;

       if (!goal) {
        alert('please add your goal');
        return;
       }

       let paragraph = document.createElement('p')
       paragraph.innerText = input.value
       goalsContainer.appendChild(paragraph)
       input.value = "";
       paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
       })
       
    })
})



const baseUrl = "http://localhost:3000/users"




const form = document.querySelector('.form')
form.addEventListener('submit', e =>{
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    }
)
   
