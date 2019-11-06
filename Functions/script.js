let pictureToDisplay = '';

const dogImage = 'https://picsum.photos/id/237/200/300';
const dogImageTwo = 'https://picsum.photos/id/1025/4951/3301';
const lionImage = 'https://picsum.photos/id/1074/5472/3648';

const button = '';

function changeImage(name) {
	console.log('THE RECEIVED NAME IS', name);
	const imageElement = document.getElementById('renderer');
	if (name === 'lion') {
		imageElement.src = lionImage;
	} else if (name === 'cute-dog') {
		imageElement.src = dogImageTwo;
	} else {
		imageElement.src = dogImage;
	}
}
