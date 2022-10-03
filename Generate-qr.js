const wrapper = document.querySelector('.background'),
qrinput = wrapper.querySelector('.form input'),
qrImg = wrapper.querySelector('.QR-code img'),
generatebtn = wrapper.querySelector('.btn');

generatebtn.addEventListener('click', ()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return; // to return nothing when the text input is blank
    //To change the button text
    generatebtn.innerHTML = 'Generating QR Code...';
    // To generate the qrcode using an online api
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    console.log(qrValue); // to console log the text
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generatebtn.innerHTML = 'Generate QR Code';
    })
    
})

