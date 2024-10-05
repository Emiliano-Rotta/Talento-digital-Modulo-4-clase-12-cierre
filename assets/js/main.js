
$(document).ready(()=>{
    const urlApi = "https://rickandmortyapi.com/api/character";
    const crearCard = ({image, name, status})=>{
        return `
        <div class="card">
            <img src="${image}" alt="">
            <h2>${name}</h2>
            <p>Estado:${status === "Alive" ? "Vivo" : "Muerto"}</p>
        </div> 
            `
    }

    $.ajax({
        url: urlApi,
        method: "GET",
        dataType: "json",
        success: (data)=>{
            const personajes = data.results
            let contenidoHTML = ""
            personajes.forEach(p => {
                contenidoHTML += crearCard(p)
            });
            $("#caracter-container").html(contenidoHTML)
        },
        error: (error)=>{
            console.log(error)
        }
    })

})