const lista = [
    "0e81a825-e785-425f-b429-36b33106d6ed_D57B6FF6-02B8-410B-8B02-72DE423509CC.jpeg",
    "2cb5343f-ca80-42e3-b4ef-9134dcb3b003.jpeg"
    "f0d48fd3-0616-4f6d-8c5b-83342e1cd672.jpeg"
    
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
