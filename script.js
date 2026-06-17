const lista = [
    "0e81a825-e785-425f-b429-36b33106d6ed_D57B6FF6-02B8-410B-8B02-72DE423509CC.jpeg",
    "2d257820-5ac2-4903-be74-2fba35cb2950_7047839B-3204-4A8E-BD92-6E4F4CE43F07.jpeg",
    "089a9419-a14e-44c7-983e-fc58e795b0ca_D12419D2-67F4-458F-B0F8-900329B64D99.jpeg",
    "8f2153ed-41fb-4a42-8043-af7374d121f2.jpeg",
    "6503a254-67db-4ef3-9839-d8cffc6f9fa9.jpeg",
    "oferta4.png"
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
