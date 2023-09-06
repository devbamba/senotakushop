let commandButton = document.getElementsByClassName('command-button')

commandButton.addEventListener('click', function(){
    let num = "+221771577231"
    let addressEmail = "bambadieng.94@gmail.com"
    
    let lienEmail = "mailto:" + addressEmail;
    let lienTel = "tel:" + num;

    
    window.location.href = lienEmail;
    window.location.href = lienTel;
})