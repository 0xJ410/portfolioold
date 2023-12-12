function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}


Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jhonlukequibeccutay@gmail.com",
    Password : "DFFF03B5143723435FA6F666B026B71A714A",
    To : 'jhonlukecutayyy@gmail.com',
    From : "jhonlukequibeccutay@gmail.com",
    Subject : "This is the subject/test",
    Body : "And this is the body/test"
}).then(
  message => alert(message)
);
