const envelope = document.getElementById("envelope");

const openBtn = document.getElementById("openBtn");

const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");

const hearts = document.querySelector(".hearts");


/* =========================
   MENSAJE
   ========================= */

const text = `Dios me la guíe siempre por el buen camino,
la bendiga en cada paso que dé
y le conceda todos los deseos
y anhelos de su corazón.

Deseo poder seguir compartiendo
toda una vida con usted,
acompañándola en cada etapa,
celebrar sus logros,
apoyarle cuando lo necesite
y estar presente en todos esos
momentos que todavía nos quedan
por vivir.

Espero que siempre recuerde
lo importante que es para mí.

La adoro con toda mi alma. ❤️

Con mucho cariño,
Alessandro.`;


/* =========================
   VARIABLES
   ========================= */

let index = 0;

let typing;


/* =========================
   EFECTO ESCRITURA
   ========================= */

function typeWriter() {

    if (index < text.length) {

        message.textContent += text.charAt(index);

        index++;

        typing = setTimeout(typeWriter, 35);
    }
}


/* =========================
   ABRIR
   ========================= */

openBtn.addEventListener("click", () => {

    clearTimeout(typing);

    envelope.classList.add("open");

    /* OCULTAR CORAZONES */

    hearts.style.opacity = "0";

    index = 0;

    message.textContent = "";


    setTimeout(() => {

        typeWriter();

    }, 900);

});


/* =========================
   RESET
   ========================= */

resetBtn.addEventListener("click", () => {

    clearTimeout(typing);

    envelope.classList.remove("open");

    /* MOSTRAR CORAZONES */

    hearts.style.opacity = "1";

    message.textContent = "";

    index = 0;

});