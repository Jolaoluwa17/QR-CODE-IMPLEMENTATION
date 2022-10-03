const wrappers = document.querySelector('.background'),
form = wrappers.querySelector('.form'),
fileInp = form.querySelector('.attach_file');
// text = document.getElementById('text');

function fetchRequest(formData){
    fetch('http://api.qrserver.com/v1/read-qr-code/',{
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        wrapper.classList.add('active');
        console.log(result);
        result = result[0].symbol[0].data;
        console.log(result);
        // text.innerHTML = result;
        wrapper.querySelector('textarea').innerText = result;
    })
}

fileInp.addEventListener('change', e => {
    let file = e.target.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(formData);
})