<template>
    <div>
        <p class="home-text">
            <span class="homepage-bullet">Multimedija</span>, kitaip tariant,
            įvairialypė informacija, yra informacijos pateikimas įvairiais
            pavidalais: tekstu, vaizdu, garsu, animacija pasitelkiant techninę
            bei programinę įranga.
        </p>
        <p class="home-text">
            <span class="homepage-bullet"
                >Multimedijos ir kompiuterinio dizaino</span
            >
            studijų programa suteikia žinių apie tinklalapių, vaizdo – net
            trimačio ir dvimačio – bei garso kūrimą, redagavimą, montažą,
            kompiuterinę grafiką. <br />
        </p>
        <p class="home-text">
            <span class="homepage-bullet">Šioje svetainėje</span> galite ne tik
            sužinoti daugiau apie „Multimedijos ir kompiuterinio dizaino“
            studijų programą, bet taip pat ir atlikti asmenybės testą, kuris
            parodytų, kokia profesija iš siūlomų studijų programoje jums tiktų.
        </p>
    </div>
</template>
<style lang="scss" scoped>
div {
    text-align: justify;
    line-height: 1.5;
    width: 80%;
    .homepage-bullet {
        color: #244e9c;
        font-weight: 800;
    }
    p {
        font-size: 1.2rem;
    }
}
//---MEDIA QUERIES---
@media only screen and (max-width: 1050px) {
    div {
        margin-top: 0rem;
    }
}
@media only screen and (max-width: 650px) {
    div {
        width: 100%;
        padding: 1rem;
    }
}
</style>
<script>
export default {
    name: "homepage-description",
};
</script>
