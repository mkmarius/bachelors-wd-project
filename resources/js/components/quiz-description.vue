<template>
    <div class="quiz-description">
        <h1>
            <span class="questionnaire-author">Johno Lewiso Hollando</span>
            profesinių asmenybių modelių testas
        </h1>
        <p class="quiz-text">
            Karjeros kelio pasirinkimas niekam nebūna lengvas. Iš moksleivių jau
            11-oje klasėje yra tikimasi apsisprendimo, kuo jie norėtų būti ir
            kokioje srityje norėtų dirbti. Jiems tenka rinktis mokomuosius
            dalykus, juos skirstyti į A ir B lygius, galvoti kokių egzaminų
            reikės, kad įstotų į norimą studijas universitete ar kolegijoje.
        </p>
        <p class="quiz-text">
            Kolegijos ir universitetai šiuo klausimu gali padėti užtikrindami,
            kad jų pateikiama informacija apie studijų programas bus suprantama,
            prieinama ir siejama su realiomis profesijomis. Studentui
            susidomėjus tokia įvairiapusiška studijų programa kaip Multimedija
            ir kompiuterinis dizainas, gali tapti dar sunkiau apsispręsti dėl
            pasirinkimo įvairovės. Būti fotografu ar interneto puslapių
            programuotoju, o gal garso inžinieriumi? Visas šias profesijas ši
            studijų programa gali pasiūlyti, tačiau, kaip pasirinkti?
        </p>
        <p class="quiz-text">
            Šiai problemai spręsti siūlome atrasti savo profesinę asmenybę
            atliekant pagal profesoriaus Johno Lewiso Hollando profesinių
            asmenybių modelį parengtą testą. Gavę rezultatus galėsite daugiau
            pasiskaityti apie jums siūlomas profesijas.
        </p>
    </div>
</template>

<style lang="scss" scoped>
.quiz-description {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    line-height: 1.5;
    width: 80%;
    margin-bottom: 2rem;
    h1 {
        text-align: center;
        font-weight: 600;
    }
    .questionnaire-author {
        margin-top: 2rem;
        color: #244e9c;
        font-style: italic;
    }
    .quiz-text {
        margin: 1rem 0rem;
    }
}
@media only screen and (max-width: 800px) {
    .quiz-description {
        width: 100%;
        margin-bottom: 1rem;
    }
}
</style>
<script>
export default {
    name: "quiz-description",
};
</script>
