//workout category with instruction
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bc8e36a21msh5562561682438c3p1ae5a5jsn9678eb0a4d8b',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};
document.querySelector('#biceps').addEventListener('click', getBiceps);
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
