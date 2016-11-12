const serverBaseUrl = 'http://localhost:3500';
//const serverBaseUrl = 'http://139.162.162.59:3500';

class AnimalsService {
	static getAllAnimals() {
		var request = new XMLHttpRequest();
		request.open('GET', serverBaseUrl + '/animals', false);
		request.send(null);

		const response = JSON.parse(request.responseText);
		response.animals.forEach((animal) => {
			animal.url = serverBaseUrl + animal.url;
			return animal;
		});

		return response
	}

	static vote(winner) {
		var request = new XMLHttpRequest();
		request.open('POST', serverBaseUrl + '/vote/' + winner.image, false);
		request.send(null);

		return JSON.parse(request.responseText);
	}

	static getAnimalPair() {
		var request = new XMLHttpRequest();
		request.open('GET', serverBaseUrl + '/animalpair', false);
		request.send(null);

		const response = JSON.parse(request.responseText);
		if(response) {
			if (response.animal1) {
				response.animal1.url = serverBaseUrl + response.animal1.url;
			}
			if (response.animal2) {
				response.animal2.url = serverBaseUrl + response.animal2.url;
			}
		}

		return response;
	}
}

export default AnimalsService;