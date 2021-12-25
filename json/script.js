function postData(form) {
    form.addEvenListener('submit', (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);
        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });
        const json = JSON.stringify(object)
        request.send(json);
        request.addEvenListener('load', () => {
            if(request.status === 200) {
                console.log(request.response);
                form.reset();
            } else {
                console.log(request.response);
            }
        });
    });
}