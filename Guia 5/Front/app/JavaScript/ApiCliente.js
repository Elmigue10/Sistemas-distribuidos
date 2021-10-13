//Variables globales...
const numeroDocumento=document.querySelector('#numeroDocumento');
const nombre=document.querySelector('#nombre');
const edad=document.querySelector('#edad');
let datos_usuarios=[];


function crearUsuario(){
   axios({
      method: 'post',
      url: 'http://localhost:18090/api/v1/alumno',
      data: {
         id: numeroDocumento.value,
         nombre: nombre.value,
         edad: edad.value
      }
    }).then(function (response) {
      console.log(response);
     }).catch(function (error) {
      console.log(error);
     })
}

function editarUsuario(){
   axios({
      method:'put',
      url:'http://localhost:18090/api/v1/alumno',
      data:{
         id: numeroDocumento.value,
         nombre: nombre.value,
         edad: edad.value
      }
      
   }).then(function(response){
      console.log(response);
      
   }).catch(function(error){
      console.log(error);
   })
}

function eliminarUsuario(valor){
   axios({
      method:'delete',
      url:`http://localhost:18090/api/v1/alumno/${valor}`,
      data:null
   }).then(function(response){
      alert("Se eliminó el registro...");
      $("#tabla_div").load(" #tabla_div");
      getUsuarios();
      $('#exampleModal').modal('hide')
      console.log(response);
   }).catch(function(error){
      console.log(error);
   })
}

const getUsuarios = () => {
   axios.get('http://localhost:18090/api/v1/alumno')
   .then(response => {
      datos_usuarios = response.data;
      const tbody = document.querySelector('#usuarios_td tbody');
      if(datos_usuarios.length==0){
         let fila = tbody.insertRow().innerHTML='<td colspan="3" id="filaSinDatos" class="filaSinDatos">NO SE ENCONTRARON REGISTROS</td>';
      }else{
         tbody.innerHTML = '';
         for (let i = 0; i < datos_usuarios.length; i++) {
            let fila = tbody.insertRow();
            fila.className="filaDinamica";
            fila.id="filaDinamica";
            fila.addEventListener("click", agregarDatos, false);
            fila.insertCell().innerHTML = datos_usuarios[i]['id'];
            fila.insertCell().innerHTML = datos_usuarios[i]['nombre'];
            fila.insertCell().innerHTML = datos_usuarios[i]['edad'];   
         }
      }
      
   }).catch(error => console.error(error)) 
};

