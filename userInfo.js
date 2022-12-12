const userInfo = () => {
    const userForm = document.querySelector('.user-form');
    const userInput = document.querySelector('.user-input');
    const user = document.querySelector('.user');

    const reception = () => {
        const userName = localStorage.getItem('user-name');
        userInput.classList.toggle('hidden');
        user.textContent = `Welcome ${userName}`;
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const userName = userInput.value;
        localStorage.setItem('user-name', userName);
        user.classList.toggle('hidden');
        reception();
    }

    if(localStorage.getItem('user-name') == null) {
        user.classList.toggle('hidden');
        userForm.addEventListener('submit', onSubmit);
        return;
    }
    
    reception();
}

userInfo();

