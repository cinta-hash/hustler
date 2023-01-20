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


let users = [];
const addUser = (e)=>{
    e.preventDefault();
    const form = e.target;
    let user = {
        name: document.querySelector('#names').value,
        email: document.querySelector('#mail').value,
        password: document.querySelector('#password').value,
        loan: document.querySelector('#amount').value,
        date: document.querySelector('#date').value,
        dateDue: document.querySelector('#dateDue').value,
    }
    users.push(user);
}





    document.addEventListener('DOMContentLoaded', addUser);


    function amountDue(){
        loan = document.querySelector('#amount').value;
        due = loan*0.10
        alert(`Your due amount is  ${due}`);
    }