const form=document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);
function onSubmit(evt){
    evt.preventDefault();
    const {email, password}=evt.currentTarget.elements;
//const data={
        //email:email.value,
        //password:password.value
//}

if(email.value===""||password.value===""){
    return console.log('всі поля повинні бути заповнені');
}
console.log(`email:${email.value} password:${password.value}`);
evt.currentTarget.reset();
}