const SUPABASE_URL = "https://bdlzvjksuutaebeqophb.supabase.co";
const SUPABASE_KEY = "sb_publishable_I1g-Cg1CtQO_O4q-9PzsVw_bfKj-avn";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

let lista = [];
let indice = 0;

const img = document.getElementById("imagem");
const video = document.getElementById("video");

async function carregarLista() {
    console.log("Entrou na carregarLista");

    const { data, error } = await supabaseClient
        .from("midias2")
        .select("*")
        .order("id", { ascending: true });
        console.log("DATA:", data);
console.log("ERROR:", error);

    if (error) {
        console.error("Erro:", error);
        return;
    }

    lista = data.map(item => ({
        arquivo: supabaseClient.storage
            .from("midias")
            .getPublicUrl(item.arquivo)
            .data.publicUrl,

        duracao: item.duracao || 10
    }));

window.lista = lista;
console.log(lista);

    if (lista.length === 0) {
        console.log("Nenhuma mídia cadastrada.");
        return;
    }

    mostrarMidia();
}

function mostrarMidia() {

    const item = lista[indice];
    const arquivo = item.arquivo;

    if (
        arquivo.endsWith(".jpg") ||
        arquivo.endsWith(".jpeg") ||
        arquivo.endsWith(".png") ||
        arquivo.endsWith(".webp")
    ) {

        video.pause();
        video.style.display = "none";

        img.src = arquivo;
        img.style.display = "block";

        setTimeout(() => {
            proximo();
        }, item.duracao * 1000);

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

carregarLista();