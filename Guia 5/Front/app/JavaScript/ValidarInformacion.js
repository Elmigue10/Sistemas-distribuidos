(function () {
    var tem;
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            actualizarInformacion();
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

  $(function(){
    $('.button').click(function(){
      alert($(this).parent().find('.data').text());
    });
  });

  function vaciarCampos(){
    document.querySelector('#numeroDocumento').value="";
    document.querySelector('#nombre').value="";
    document.querySelector('#edad').value="";
  }

  function agregarDatos(){
    
    document.querySelector('#numeroDocumento').value=$(this).find("td:eq(0)").text();
    document.querySelector('#numeroDocumento').disabled = true;
    document.querySelector('#nombre').value=$(this).find("td:eq(1)").text();
    document.querySelector('#edad').value=$(this).find("td:eq(2)").text();
    $('#exampleModal').modal('show')
    document.getElementById('guardarBtn').innerHTML="Actualizar";
    document.getElementById('eliminarBtn').hidden=false;
    document.getElementById('modal-title').innerHTML="Consultar usuario";
 }
 
 window.onload=getUsuarios();
 
 function cambiarValorBoton(){
    vaciarCampos();
    document.getElementById('eliminarBtn').hidden=true;
    document.getElementById('guardarBtn').innerHTML="Guardar";
    document.getElementById('modal-title').innerHTML="Crear usuario";
    document.querySelector('#numeroDocumento').disabled = false;
 }

 function actualizarInformacion(){
  if(document.getElementById('guardarBtn').innerHTML=="Guardar"){
     crearUsuario();
     alert("Se creó el usuario...");
  }else{
     editarUsuario();
     alert("Se actualizó el usuario...");
  }
}