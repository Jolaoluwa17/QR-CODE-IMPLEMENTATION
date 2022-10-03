// function changebtn(){
    const x = document.getElementById('btn');
    x.addEventListener('click', function handleClick() {
        x.textContent = 'Generating QR-Code...';
    });
// } onclick="changebtn()"