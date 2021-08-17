let idInput = document.getElementById("id-input")
let nombreInput = document.getElementById("nombre-input")
let edadInput = document.getElementById("edad-input")
let guardarBtn = document.getElementById("guardar-btn")
let idEditInput = document.getElementById("idEdit-input")
let nombreEditInput = document.getElementById("nombreEdit-input")
let edadEditInput = document.getElementById("edadEdit-input")
let guardarEditBtn = document.getElementById("guardarEdit-btn")
let alumnosList = document.getElementById("alumnos-list")
let buscarInput = document.getElementById("buscar-input")
let buscarBtn = document.getElementById("buscar-btn")
let alumnoEncontradoContainer = document.getElementById("alumno-encontrado-container")

let alumnos
const obtenerAlumnos = () => {
    axios.get("http://localhost:8080/alumno")
    .then((res) => {
       
        alumnos = res.data
        console.log("Respuesta obtenida: ", alumnos)
        renderAlumnos()

    }).catch((err) => {
        
        console.error("Se produjo un error: ", err)

    });
}

obtenerAlumnos()

let alumno
const obetnerAlumnoId = async () => {
    let res = await axios.get(`http://localhost:8080/alumno/${buscarInput.value}`)
    alumno = res.data
    console.log("Alumno obtenido: ", alumno)
    await renderAlumno(alumnoEncontradoContainer, alumno)
    let editarIdBtn = await document.getElementById("editar-id-btn")
    let eliminarIdBtn = await document.getElementById("eliminar-id-btn")
    editarIdBtn.addEventListener("click",()=>{
        llenarFormularioAlumno()
    })
    eliminarIdBtn.addEventListener("click", () => {
        eliminarAlumno()
    })
}

buscarBtn.addEventListener("click", () => {
    obetnerAlumnoId()
})

const guardarAlumno = async () => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/alumno',
        data: {
            id: idInput.value,
            nombre: nombreInput.value,
            edad: edadInput.value
        }
    })
    await obtenerAlumnos()
}

guardarBtn.addEventListener("click", () => {
    guardarAlumno()
})

const editarAlumno = async () => {
    await axios({
        method: 'put',
        url: `http://localhost:8080/alumno/${idEditInput.value}`,
        data: {
            nombre:nombreEditInput.value,
            edad:edadEditInput.value
        }
    })
    
    await obtenerAlumnos()

    idInput.value = ""
    nombreInput.value = ""
    edadInput.value = ""

}

guardarEditBtn.addEventListener("click",()=>{
    editarAlumno()
})

const eliminarAlumnos = async (e) => {
    indiceAlumno = e.target.dataset.indice
    await axios.delete(`http://localhost:8080/alumno/${alumnos[indiceAlumno].id}`)
    obtenerAlumnos()
}

const eliminarAlumno = async () => {
    await axios.delete(`http://localhost:8080/alumno/${alumno.id}`)
    obtenerAlumnos()
    alumnoEncontradoContainer.innerHTML = ""
    buscarInput.value = ""
}

const renderAlumnos = () => {
    let alumnosRender = alumnos.map((alumno, indice)=>{
            return `
            <tr>
                <td>${alumno.id ? alumno.id : "Id vacio"}</td>
                <td>${alumno.nombre ? alumno.nombre : "Nombre vacio"}</td>
                <td>${alumno.edad ? alumno.edad : "Nombre vacio"}</td>
                <td><button class="editar-button" data-indice=${indice}>Editar</button></td>
                <td><button class="eliminar-button" data-indice=${indice}>Eliminar</button></td>
            </tr>
            `
        }).join("")

    alumnosList.innerHTML = alumnosRender

    botonesEditar = document.getElementsByClassName("editar-button")
    Array.from(botonesEditar).forEach(botonEditar => {
        botonEditar.onclick = llenarFormularioAlumnos
    })

    botonesEliminar = document.getElementsByClassName("eliminar-button")
    Array.from(botonesEliminar).forEach(botonEliminar => {
        botonEliminar.onclick = eliminarAlumnos
    })

}

const renderAlumno = (tag, obj) => {
    tag.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EDAD</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody id="alumnos-list">
                <tr>
                    <td>${obj.id ? obj.id : "Id vacio"}</td>
                    <td>${obj.nombre ? obj.nombre : "Nombre vacio"}</td>
                    <td>${obj.edad ? obj.edad : "Nombre vacio"}</td>
                    <td><button id="editar-id-btn">Editar</button></td>
                    <td><button id="eliminar-id-btn">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    `;
}

const llenarFormularioAlumnos = (e) => {
    if(e.target.dataset.indice){
        const alumnoEditar = alumnos[e.target.dataset.indice]
        idEditInput.value = alumnoEditar.id ? alumnoEditar.id : ""
        nombreEditInput.value = alumnoEditar.nombre ? alumnoEditar.nombre : ""
        edadEditInput.value = alumnoEditar.edad ? alumnoEditar.edad : ""
        indice.value = e.target.dataset.indice

        idEditInput.disabled = true;
    }
}

const llenarFormularioAlumno = (e) => {
    const alumnoEditar = alumno
    idEditInput.value = alumnoEditar.id ? alumnoEditar.id : ""
    nombreEditInput.value = alumnoEditar.nombre ? alumnoEditar.nombre : ""
    edadEditInput.value = alumnoEditar.edad ? alumnoEditar.edad : ""

    idEditInput.disabled = true;
}