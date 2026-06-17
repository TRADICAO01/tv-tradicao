const lista = [
    "0e81a825-e785-425f-b429-36b33106d6ed_D57B6FF6-02B8-410B-8B02-72DE423509CC.jpeg",
    "2b1ec8ad-6ccf-4d5f-bd66-a56a8b12f96e_06817D15-0924-4211-BBFB-9188E522017D.jpeg",
    "089a9419-a14e-44c7-983e-fc58e795b0ca_D12419D2-67F4-458F-B0F8-900329B64D99.jpeg",
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
