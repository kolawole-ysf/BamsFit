//workout category with instruction
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bc8e36a21msh5562561682438c3p1ae5a5jsn9678eb0a4d8b',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};
//create events for exercises
document.querySelector('#biceps').addEventListener('click', getBiceps);
document.querySelector('#triceps').addEventListener('click', getTriceps);
document.querySelector('#chest').addEventListener('click', getChest);
document.querySelector('#quads').addEventListener('click', getQuad);
document.querySelector('#glutes').addEventListener('click', getGlute);
document.querySelector('#abs').addEventListener('click', getAbdominal);
const workoutBtns=document.querySelectorAll('.category-btn');

//get biceps exercises
function getBiceps(){
fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
	.then(response => response.json())
	.then(data => {
        let output='';
        data.forEach(element => {
            console.log(element)
            output+=`
                <div class="card">
                <h2>Description: ${element.name}</h2>
                 <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                 </div>
         `;
            console.log(element.name)
        });
        document.querySelector('.description').innerHTML = output;
        })
	.catch(err => console.error(err));
}

//get triceps exercises
function getTriceps(){
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=triceps', options)
        .then(response => response.json())
        .then(data => {
            let output='';
            data.forEach(element => {
                console.log(element)
                output+=`
                    <div class="card">
                    <h2>Description: ${element.name}</h2>
                     <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                     </div>
             `;
                console.log(element.name)
            });
            document.querySelector('.description').innerHTML = output;
            })
        .catch(err => console.error(err));
    }
   
    //get chest exercises
function getChest(){
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=chest', options)
        .then(response => response.json())
        .then(data => {
            let output='';
            data.forEach(element => {
                console.log(element)
                output+=`
                    <div class="card">
                    <h2>Description: ${element.name}</h2>
                     <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                     </div>
             `;
                console.log(element.name)
            });
            document.querySelector('.description').innerHTML = output;
            })
        .catch(err => console.error(err));
    }
//get quadriceps exercises
function getQuad(){
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=quadriceps', options)
        .then(response => response.json())
        .then(data => {
            let output='';
            data.forEach(element => {
                console.log(element)
                output+=`
                    <div class="card">
                    <h2>Description: ${element.name}</h2>
                     <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                     </div>
             `;
                console.log(element.name)
            });
            document.querySelector('.description').innerHTML = output;
            })
        .catch(err => console.error(err));
    }
//get glute exercises
function getGlute(){
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=glutes', options)
        .then(response => response.json())
        .then(data => {
            let output='';
            data.forEach(element => {
                console.log(element)
                output+=`
                    <div class="card">
                    <h2>Description: ${element.name}</h2>
                     <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                     </div>
             `;
                console.log(element.name)
            });
            document.querySelector('.description').innerHTML = output;
            })
        .catch(err => console.error(err));
    }
    //get Abdominals exercises
function getAbdominal(){
    fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=abdominals', options)
        .then(response => response.json())
        .then(data => {
            let output='';
            data.forEach(element => {
                console.log(element)
                output+=`
                    <div class="card">
                    <h2>Description: ${element.name}</h2>
                     <p><b>Exercise Demo:</b> <br>${element.instructions}</p>
                     </div>
             `;
                console.log(element.name)
            });
            document.querySelector('.description').innerHTML = output;
            })
           
        .catch(err => console.error(err));
    }

function workoutBtn(){
    for(let i=0; i<workoutBtns.length; i++){
        workoutBtns[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.btn-active');
            currentBtn[0].className=currentBtn[0].className.replace('btn-active','');
            this.className+=' btn-active';
        })
    }
}
workoutBtn()
