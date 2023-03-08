const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.sign-up-link');
const loginLink = document.querySelector('.login-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign-up');
});