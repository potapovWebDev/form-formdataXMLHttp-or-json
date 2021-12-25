function postData(form) {
    form.addEvenListener('submit', (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        const formData = new FormData(form);
        request.send(formData);
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