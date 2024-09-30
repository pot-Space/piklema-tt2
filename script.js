function getData(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })

    .then(data => {
      console.log('Ответ:', data);
    })

    .catch(error => {
      console.error('Ошибка:', error);
    });
}

getData('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');