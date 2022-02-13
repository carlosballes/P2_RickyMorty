let url = "https://rickandmortyapi.com/api/character/?page="
        let operacion = "PorDefecto";
        let pagina = 0;
        function personaje(op) {
            if (op === "PorDefecto") {
                fetch(url + pagina)
                    .then(response => response.json())
                    .then(data => {

                        if (data.info.next === null) {
                            document.getElementById("f").style.visibility = "hidden";

                        }
                        if (data.info.prev === null) {
                            document.getElementById("p").style.visibility = "hidden";

                        }
                        if (data.info.prev !== null && data.info.next !== null) {
                            document.getElementById("f").style.visibility = "visible"
                            document.getElementById("p").style.visibility = "visible"

                        }
                        buscar(data);

                    })
            } else {
                if (op === "buscador") {
                    document.getElementById("f").style.visibility = "visible"
                    document.getElementById("p").style.visibility = "visible"
                    operacion = "buscador";
                }
                let nombre = document.getElementById("buscador").value;
                fetch(url + pagina + "&name=" + nombre)
                    .then(response => response.json())
                    .then(data => {

                        if (data.info.next === null) {
                            document.getElementById("f").style.visibility = "hidden";

                        }
                        if (data.info.prev === null) {
                            document.getElementById("p").style.visibility = "hidden";

                        }
                        if (data.info.prev !== null && data.info.next !== null) {
                            document.getElementById("f").style.visibility = "visible"
                            document.getElementById("p").style.visibility = "visible"

                        }
                        buscar(data);


                    })
            }
        }
        function mostrar(personaje, i) {
            let aux = document.getElementById("Lista_de_Personajes")
            let a = document.createElement("div") //juntar todos los divs
            let img = document.createElement("img")
            let nom = document.createElement("div")
            let stat = document.createElement("div") 
            let spe = document.createElement("div")
            let locat = document.createElement("div")
            let epi = document.createElement("div")
            let atributos = document.createElement("div")
            let divimg = document.createElement("div")
            atributos.className = "atrib"
            img.src = personaje.image
            img.className = "imagen"
            a.className = "personaje"
            a.id = i
            nom.className = "nombre"
            stat.className = "status"
            spe.className = "specie"
            locat.className = "Location"
            epi.className = "Episodio"
            nom.innerHTML = personaje.name
            stat.innerHTML = personaje.status
            spe.innerHTML = personaje.species
            locat.innerHTML = personaje.location.name
            epi.innerHTML = personaje.episode[0];
            aux.appendChild(a)
            document.getElementById(i).appendChild(img);
            document.getElementById(i).appendChild(atributos);
            document.getElementsByClassName("atrib")[i].appendChild(nom);
            document.getElementsByClassName("atrib")[i].appendChild(stat);
            document.getElementsByClassName("atrib")[i].appendChild(spe);
            document.getElementsByClassName("atrib")[i].appendChild(locat);
            document.getElementsByClassName("atrib")[i].appendChild(epi);


        }


        function buscar(data) {

            for (let i = 0; i < data.results.length; i++) {
                console.log(data.results[i]);
                mostrar(data.results[i], i);

            }
        }
        function removeClass() {
            const elements = document.getElementsByClassName("personaje");
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);

            }
        }
