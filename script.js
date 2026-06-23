const lista = [
    "0e81a825-e785-425f-b429-36b33106d6ed_D57B6FF6-02B8-410B-8B02-72DE423509CC.jpeg",
    "3275127b-affd-49a3-a425-734cc2de5291.jpeg",
    "91ade62b-9774-496b-8d35-e50d2149ad33.jpeg",
    "b98dcbd3-8978-4126-b4fb-311190617444.jpeg",
    "bff8cbdf-fde3-450f-a03f-c078990cad4d.jpeg",
    "ecda9e4a-21a2-47b9-88f5-fd497788fdf9.jpeg"
    
    ];

let indice = 0;

const img = document.getElementById("imagem");
const video = document.getElementById("video");

function mostrarMidia() {

    const arquivo = lista[indice];

    if (
        arquivo.endsWith(".jpg") ||
        arquivo.endsWith(".png") ||
        arquivo.endsWith(".jpeg")
    ) {

        video.style.display = "none";
        video.pause();

        img.src = arquivo;
        img.style.display = "block";

        setTimeout(() => {
            proximo();
        }, 10000);

    } else {

        img.style.display = "none";

        video.src = arquivo;
        video.style.display = "block";

        video.play();

        video.onended = () => {
            proximo();
        };
    }
}

function proximo() {

    indice++;

    if (indice >= lista.length) {
        indice = 0;
    }

    mostrarMidia();
}

mostrarMidia();
