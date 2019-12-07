const boton = document.getElementById('boton');
const text = document.getElementById('text');
const resetButton = document.getElementById('reset');
const activityButton = document.getElementById('boton');
const activityContainer = document.getElementById('small');

const fetchNewActivity = () => {
	boton.remove();
	text.remove();	
	fetch('https://www.boredapi.com/api/activity?participants=1')
 		.then(result => result.json())
 		.then(({activity}) => {	
			activityContainer.innerHTML = `<p class="lead mt-sm-2 mt-md-5 mt-lg-5 actividad">${activity}</p>`;			
			resetButton.style.display = 'flex';
	 	})
		.catch(error => console.log(error));
}

activityButton.addEventListener("click", fetchNewActivity);
resetButton.addEventListener('click', fetchNewActivity);


