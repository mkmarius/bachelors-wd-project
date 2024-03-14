<template>
    <div>
        <section class="subject-section">
            <div class="container">
                <div class="semester">
                    <h3>1 semestras 30 kreditų +</h3>
                </div>
                <div class="semestre-1">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16101</div>
                            <div class="column">
                                Operacinių sistemų pagrindai
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB22101</div>
                            <div class="column">Medijų gamyba</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">KIFSB17108</div>
                            <div class="column">Filosofija</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">FMSAB16126</div>
                            <div class="column">Matematika 1</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMITB16160</div>
                            <div class="column">Procedūrinis programavimas</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row last-column">
                            <div class="column choose-one">
                                Pasirinkti vieną
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17101</div>
                            <div class="column">Anglų kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17105</div>
                            <div class="column">Prancūzų kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17103</div>
                            <div class="column">Vokiečių kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester2 = !showSemester2">
                        2 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester2" class="semestre-2">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMITB16264</div>
                            <div class="column">Objektinis programavimas</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMSAB16227</div>
                            <div class="column">Matematika 2</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19203</div>
                            <div class="column">Žaidimų fizika</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMMMB16207</div>
                            <div class="column">Diskrečioji matematika</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB22201</div>
                            <div class="column">
                                Žmogaus ir kompiuterio sąveika
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">KIPIB17061</div>
                            <div class="column">Kino projektai</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row last-column">
                            <div class="column choose-one">
                                Pasirinkti vieną
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17123</div>
                            <div class="column">Specialybės anglų kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17124</div>
                            <div class="column">Specialybės vokiečių kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">KIUSB17125</div>
                            <div class="column">Specialybės prancūzų kalba</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester3 = !showSemester3">
                        3 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester3" class="semestre-3">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16302</div>
                            <div class="column">Grafinio dizaino pagrindai</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">FMSAB17328</div>
                            <div class="column">
                                Tikimybių teorija ir matematinė statistika
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">KILSB19001</div>
                            <div class="column">Specialybės kalbos kultūra</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">FMMMB16405</div>
                            <div class="column">
                                Algoritmai ir duomenų struktūros
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16307</div>
                            <div class="column">
                                Interneto puslapių programavimas (su kursiniu
                                projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB17316</div>
                            <div class="column">Geometrinis modeliavimas</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester4 = !showSemester4">
                        4 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester4" class="semestre-4">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16409</div>
                            <div class="column">Kompiuterinė grafika</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">ELESB16412</div>
                            <div class="column">
                                Skaitmeninis signalų apdorojimas
                            </div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">KIKOB17068</div>
                            <div class="column">
                                Reklamos pagrindai (su kursiniu darbu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">VVTEB16401</div>
                            <div class="column">Autorinė teisė</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">VVEIB17194</div>
                            <div class="column">Ekonomika</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19410</div>
                            <div class="column">
                                Multimedijos elementų dizainas (su kursiniu
                                projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row last-column">
                            <div class="column choose-one">
                                Pasirinkti vieną
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMFIB22402</div>
                            <div class="column">Šviesa ir akustika</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">ELESB16407</div>
                            <div class="column">
                                Multimedijos techninė įranga
                            </div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">ELESB16400</div>
                            <div class="column">Elektronikos įtaisai</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester5 = !showSemester5">
                        5 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester5" class="semestre-5">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19508</div>
                            <div class="column">
                                Interneto puslapių dizainas
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16512</div>
                            <div class="column">
                                Programų sistemų inžinerija (su kursiniu
                                projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMITB16536</div>
                            <div class="column">Duomenų bazių valdymas</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB17501</div>
                            <div class="column">
                                Kompiuterinių žaidimų dizainas
                            </div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16511</div>
                            <div class="column">
                                E-paslaugų technologijos (su kursiniu projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">-</div>
                            <div class="column">Laisvas pasirinkimas</div>
                            <div class="column">3</div>
                            <div class="column last-column">-</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester6 = !showSemester6">
                        6 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester6" class="semestre-6">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16612</div>
                            <div class="column">Vizualizavimo sistemos</div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB22601</div>
                            <div class="column">
                                Kompiuterinių žaidimų kūrimo pagrindai (su
                                kursiniu projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16613</div>
                            <div class="column">Interneto 3D grafika</div>
                            <div class="column">3</div>
                            <div class="column last-column">E1</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB16610</div>
                            <div class="column">
                                Vaizdų analizės metodai (su kursiniu projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMISB19601</div>
                            <div class="column">
                                Kompiuterių ir kompiuterinių tinklų architektūra
                            </div>
                            <div class="column">3</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB17601</div>
                            <div class="column">Audio technologijos</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">-</div>
                            <div class="column">Laisvas pasirinkimas</div>
                            <div class="column">3</div>
                            <div class="column last-column">-</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester7 = !showSemester7">
                        7 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester7" class="semestre-7">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB22701</div>
                            <div class="column">
                                Geografinių informacinių sistemų pagrindai
                            </div>
                            <div class="column">9</div>
                            <div class="column last-column">KS</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19710</div>
                            <div class="column">
                                Mobiliųjų prietaisų multimedija
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19705</div>
                            <div class="column">
                                Bakalauro baigiamasis darbas 1
                            </div>
                            <div class="column">3</div>
                            <div class="column last-column">Į</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19702</div>
                            <div class="column">
                                Video technologijos (su kursiniu projektu)
                            </div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19715</div>
                            <div class="column">Animacijos pagrindai</div>
                            <div class="column">6</div>
                            <div class="column last-column">E</div>
                        </div>
                    </div>
                </div>
                <div class="semester">
                    <h3 @click="showSemester8 = !showSemester8">
                        8 semestras 30 kreditų +
                    </h3>
                </div>
                <div v-if="showSemester8" class="semestre-8">
                    <div class="table">
                        <div class="row first-row">
                            <div class="column">Kodas</div>
                            <div class="column">Pavadinimas</div>
                            <div class="column">Kreditai</div>
                            <div class="column last-column">
                                Vertinimas (E - Egzaminas, E1 - egzaminas iki
                                sesijos, A - ataskaita, Į - įskaita, KS -
                                kompleksinis modulis, BD - baigiamasis darbas)
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19801</div>
                            <div class="column">
                                Bakalauro baigiamasis darbas
                            </div>
                            <div class="column">15</div>
                            <div class="column last-column">BD</div>
                        </div>
                        <div class="row">
                            <div class="column">FMGSB19811</div>
                            <div class="column">
                                Profesinės veiklos praktika
                            </div>
                            <div class="column">15</div>
                            <div class="column last-column">A</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "SubjectSection",
    data() {
        return {
            showSemester2: true,
            showSemester3: false,
            showSemester4: false,
            showSemester5: false,
            showSemester6: false,
            showSemester7: false,
            showSemester8: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.subject-section {
    margin: 1rem 0rem;
    min-height: 67vh;
}
.subject-container {
    width: 100%;
    div {
        display: flex;
        justify-content: center;
    }
}
.container {
    margin: auto;
}
.choose-one {
    color: #244e9c;
    text-align: center;
    width: 100%;
    font-weight: bold;
}
.table {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
    min-width: 580px;
}
P {
    font-size: 1.1rem;
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
.semester {
    display: flex;
    justify-content: center;
}
.semester h3 {
    min-width: 580px;
    margin-bottom: 0.5rem;
}
h3 {
    text-align: center;
    background: #244e9c;
    color: white;
    width: 70%;
    border: 1px solid;
}
.first-row > .column {
    color: #244e9c;
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.semester {
    cursor: pointer;
}
@media only screen and (max-width: 1200px) {
    .row,
    .semester h3 {
        width: 90%;
    }
}
@media only screen and (max-width: 600px) {
    .semestre-1,
    .semestre-2,
    .semestre-3,
    .semestre-4,
    .semestre-5,
    .semestre-6,
    .semestre-7,
    .semestre-8 {
        overflow-x: scroll;
        margin-bottom: 1rem;
    }
    .row,
    .semester h3 {
        width: 95%;
    }
    .semester {
        overflow: hidden;
    }
    div {
        font-size: 0.85rem;
    }
    .first-row > .column {
        font-size: 0.85rem;
    }
}
</style>
