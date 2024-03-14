<template>
    <section class="admission-section">
        <div class="container">
            <div class="table">
                <div class="row first-row">
                    <div class="column first-column">
                        <h3>Dalykas</h3>
                    </div>
                    <div class="column first-column">
                        <h3>Svertinis koeficientas</h3>
                    </div>
                    <div class="column first-column">
                        <h3>2022 m.</h3>
                    </div>
                    <div class="column first-column last-column">
                        <h3>2023 m. / 2024 m.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="entry">I</p>
                    </div>
                    <div class="column">
                        <p class="entry">0,4</p>
                    </div>
                    <div class="column">
                        <p class="entry">matematika</p>
                    </div>
                    <div class="column last-column">
                        <p class="entry">matematika</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="entry">II</p>
                    </div>
                    <div class="column">
                        <p class="entry">0,2</p>
                    </div>
                    <div class="column">
                        <p class="entry">
                            chemija / fizika / biologija / informacinės
                            technologijos / geografija
                        </p>
                    </div>
                    <div class="column last-column">
                        <p class="entry">
                            chemija / fizika / biologija / informacinės
                            technologijos / geografija
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="entry">III</p>
                    </div>
                    <div class="column">
                        <p class="entry">0,2</p>
                    </div>
                    <div class="column">
                        <p class="entry">
                            bet kuris dalykas, nesutampantis su kitais
                            konkursiniais dalykais
                        </p>
                    </div>
                    <div class="column last-column">
                        <p class="entry">
                            bet kuris dalykas, nesutampantis su kitais
                            konkursiniais dalykais
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <p class="entry">IV</p>
                    </div>
                    <div class="column">
                        <p class="entry">0,2</p>
                    </div>
                    <div class="column">
                        <p class="entry">lietuvių kalba ir literatūra</p>
                    </div>
                    <div class="column last-column">
                        <p class="entry">lietuvių kalba ir literatūra</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column bigger-column">
                        <p class="entry">
                            Pagrindiniai kriterijai konkursinei eilei į
                            valstybės finansuojamą vietą sudaryti:
                        </p>
                    </div>
                    <div class="column last-column bigger-column">
                        <li>I-ojo dalyko brandos egzamino įvertinimas;</li>
                        <li>
                            II-ojo dalyko brandos egzamino įvertinimas arba
                            metinis pažymys (A lygiu);
                        </li>
                        <li>
                            III-ojo dalyko brandos egzamino įvertinimas arba
                            metinis pažymys (A lygiu);
                        </li>
                        <li>
                            lietuvių kalbos ir literatūros valstybinio brandos
                            egzamino įvertinimas.
                        </li>
                    </div>
                </div>
                <div class="row">
                    <div class="column bigger-column">
                        <p class="entry">
                            2022 m. minimalūs rodikliai stojant į valstybės
                            finansuojamas bei valstybės nefinansuojamas vietas:
                        </p>
                    </div>
                    <div class="column last-column bigger-column">
                        <li>
                            minimalus konkursinis balas į stojant į valstybės
                            <span>finansuojamą</span> vietą – dar nepatvirtintas
                            (2021 m. buvo <span>5,4</span>)
                        </li>
                        <li>
                            minimalus konkursinis balas į stojant į valstybės
                            <span>nefinansuojamą</span> vietą – dar
                            nepatvirtintas (2021 m. buvo <span>5,4</span>);
                        </li>
                        <li>
                            daugiau informacijos
                            <a
                                href="https://vilniustech.lt/stojantiesiems/bakalauro-ir-vientisosios-studijos/konkursinio-balo-sandara/348?"
                                >čia.</a
                            >
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AdmissionSection",
};
</script>

<style lang="scss" scoped>
@import "~/app.scss";
.admission-section {
    min-height: 67vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.table {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0rem;
    max-width: 1600px;
    min-width: 580px;
}
P,
li {
    font-size: 1.1rem;
}
li {
    margin-left: 1rem;
}
.row {
    display: flex;
    border-bottom: 2px solid #244e9c;
    display: flex;
    justify-content: space-between;
    width: 70%;
}
.first-row {
    border-top: 2px solid #244e9c;
    text-align: center;
}
.column {
    border-left: 2px solid #244e9c;
    width: 25%;
    padding: 0.5rem;
}
.last-column {
    border-right: 2px solid #244e9c;
}
.first-column {
    background: #244e9c;
    color: white;
}
.bigger-column {
    width: 51%;
}

span {
    color: #244e9c;
    font-weight: bold;
}

@media only screen and (max-width: 1200px) {
    .row {
        width: 90%;
    }
}
@media only screen and (max-width: 600px) {
    .container {
        overflow-x: scroll;
    }
    .row {
        width: 95%;
    }
    p,
    li {
        font-size: 0.9rem;
    }
}
</style>
