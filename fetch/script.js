fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log(json))