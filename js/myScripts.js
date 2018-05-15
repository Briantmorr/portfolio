$(document).ready(initializeApp);

function initializeApp(){
    let myEmail = $('<a target=/"_top/" href=\"mailto:brianmorris.tech@gmail.com\">').text('brianmorris.tech@gmail.com');
    $('.email').append(myEmail);
}