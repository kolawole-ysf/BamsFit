//toggle nav
const toggleBtn=document.querySelector('#toggle');

toggleBtn.addEventListener('click', toggleOn);

function toggleOn(){
    document.querySelector('.collection').classList.toggle('active');
}
//image slider on showcase
let i=0,
    images=[];
    time=5000;

    images[0]='Desktop - 1.jpg';
    images[1]='Desktop - 2.jpg';
    images[2]='Desktop - 3.jpg';
    images[3]='Desktop - 4.jpg';
    images[4]='Desktop - 5.jpg';

    function showcase(){
        document.slide.src=images[i];
        if(i<images.length-1){
            i++;
        }else{
            i=0;
        }
      setTimeout(showcase,time);
    }
    window.onload=showcase;
//form validation

//UI variables
const Form=document.querySelector('.form');
const successMsg=document.querySelector('.success-msg');
const myForm=document.querySelector('.form form');   
const nameInput=document.querySelector('.text');
const emailInput=document.querySelector('.email');
const phoneInput=document.querySelector('.phone-number');
const messageInput=document.querySelector('.message');
const subjectInput=document.querySelector('.subject');
const msgAlert=document.querySelector('.notify');
const errorMsg=document.querySelector('.error');

myForm.addEventListener('submit',submitForm); 

//Function
function submitForm(e){
    e.preventDefault();
        nameInput.nextElementSibling.classList.add('hidden');
        nameInput.classList.remove('invalid');
  
    if(!(isNaN(nameInput.value)) || nameInput.value.length < 3 || nameInput.value===''){
        nameInput.nextElementSibling.classList.remove('hidden');
        nameInput.classList.add('invalid');
        return false;
        
    }
    if(emailInput.value.length < 10 || emailInput.value===''){
        emailInput.nextElementSibling.classList.remove('hidden');
        emailInput.classList.add('invalid');
        return false;
       
    }
    if(phoneInput.value.length<10 || phoneInput.value===''){
        phoneInput.nextElementSibling.classList.remove('hidden');
        phoneInput.classList.add('invalid');
        return false;
       
    }
    if(subjectInput.value.length<3 || subjectInput.value==='' || !(isNaN(subjectInput.value))){
        let msg='Enter not less than 5 words';
        msgAlert.innerHTML=msg;
        return false;
        
    }
    if(messageInput.value.length<2 || messageInput.value==='' || !(isNaN(messageInput.value))){
        messageInput.nextElementSibling.classList.remove('hidden');
        messageInput.classList.add('invalid');
        return false;
    }

    Form.classList.add('hidden');
    successMsg.classList.remove('hidden');

    setTimeout(()=>{
        successMsg.classList.add('hidden');
        Form.classList.remove('hidden');
    },10000);
    nameInput.value='';
    emailInput.value='';
    phoneInput.value='';
    subjectInput.value='';
    messageInput.value='';
}



