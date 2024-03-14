<template>
    <div class="jobs-section">
        <h1 v-if="!noData">
            Testą atliko {{ name || playerName }}. Sveikiname pabaigus testą!
        </h1>
        <p v-if="!noData">
            Žemiau pateiktos profesijos, kurias Jums būtų galima rinktis. Ant
            nuotraukos užvedę pelytę, galėsite pamatyti profesijos aprašymą. Jei
            norite įgyti reikalingų šioms profesijoms įgūdžių, kviečiame
            studijuoti Multimedijos ir kompiuterinio dizaino studijų
            <a
                href="https://vilniustech.lt/stojantiesiems/bakalauro-ir-vientisosios-studijos/studiju-programos/317451?element_id=317452&sp_id=353&f_id=4&qualification=a%3A2%3A%7Bi%3A0%3Bs%3A1%3A%22B%22%3Bi%3A1%3Bs%3A1%3A%22A%22%3B%7D"
                target="_blank"
            >programą</a
            >.
        </p>
        <p v-if="noData" class="error">Neįvedėte savo vardo ar kitų duomenų!</p>
        <div
            v-if="quizAnswer || receivedData || noData === false"
            class="answers-container"
        >
            <div v-for="job in jobs" :key="job.id" class="jobs-container">
                <div v-if="job.riasec_type === type" class="job">
                    <div class="title">
                        <h1>{{ job.job_title }}</h1>
                    </div>
                    <div class="job-contents">
                        <img
                            :src="'images/' + job.job_picture"
                            alt=""
                            class="job-picture"
                        />
                        <p class="hide job-description">
                            {{ job.job_description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showBtn" id="ignorePDF" class="buttons">
            <form
                v-if="receivedData == null && noData === false && output === ''"
                @submit="formSubmit"
            >
                <button>Išsaugokite savo rezultatus!</button>
            </form>
            <div v-if="receivedData == null" class="back">
                <a href="/quiz"
                >
                    <button class="back-button">Grįžti į pradžią</button>
                </a
                >
            </div>
            <div v-if="noData === false && output === ''" class="save-to-pdf">
                <button
                    class="save-pdf"
                    @click="
                        showBtn = false;
                        saveToPDF();
                    "
                >
                    Išsaugoti kaip PDF
                </button>
            </div>
        </div>
        <p class="output">{{ output }}</p>
    </div>
</template>

<script>
import axios from "axios";
import {jsPDF} from "jspdf";

export default {
    name: "CompletionScreen",
    props: {
        quizAnswer: [Array, Object],
        receivedData: [Array, Object],
        name: String,
    },
    data() {
        return {
            jobs: [],
            type: null,
            output: "",
            answer: [],
            hover: false,
            showBtn: true,
            noData: false,
            saved: false,
            playerName: null,
        };
    },
    created() {
        fetch("http://127.0.0.1:8000/jobs-json")
            .then((response) => response.json())
            .then((data) => {
                this.jobs = data;
                console.log(data);
            })
            .catch((err) => console.log(err.message));
        this.parseAnswer();
    },
    methods: {
        parseAnswer() {
            let answers = [];
            if (this.quizAnswer) {
                answers = this.quizAnswer;
            } else if (this.receivedData !== null) {
                answers = this.receivedData;
            }
            if (
                (answers.length > 0 && this.name !== null) ||
                this.receivedData !== null
            ) {
                this.playerName = answers[0].player_name;
                switch (answers[0].type) {
                    case "r":
                        this.type = "R";
                        break;
                    case "i":
                        this.type = "I";
                        break;
                    case "a":
                        this.type = "A";
                        break;
                    case "s":
                        this.output =
                            "Šiam asmenybės tipui Multimedijos ir kompiuterinio dizaino studijų programa, negali pasiūlyti profesijos. Pasidomėkite kitomis studijų programomis, susijusiomis su socialiniais mokslais https://vilniustech.lt/ svetainėje.";
                        break;
                    case "e":
                        this.type = "E";
                        break;
                    case "c":
                        this.type = "C";
                        break;
                    default:
                        this.type = "R";
                }
            } else {
                console.log("no data");
                this.noData = true;
            }
        },
        formSubmit(e) {
            e.preventDefault();
            let sendingData = {
                name: this.name,
                answer: this.quizAnswer,
            };
            if (confirm("Ar tikrai norite išsaugoti savo rezultatus?")) {
                axios
                    .post("http://127.0.0.1:8000/formSubmit", {
                        sendingData,
                    })
                    .then((response) => {
                        console.log(response);
                        alert("Išsaugota");
                    })
                    .catch((error) => console.log(error));
            } else {
                console.log("Nebuvo išsaugota.");
            }
        },
        saveToPDF() {
            const doc = document.querySelector(".jobs-section");

            html2canvas(doc, {
                logging: true,
                letterRendering: 1,
                useCORS: true,
            }).then((canvas) => {
                const imgWidth = 208;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const imgData = canvas.toDataURL("img/png");
                const pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save("new.pdf");
                this.showBtn = true;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/app.scss";

.jobs-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.job {
    z-index: 1;
}

p {
    font-size: 1.3rem;
    width: 80%;
    text-align: center;
}

.answers-container {
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-column-gap: 5rem;
    padding: 2rem 0;
}

img {
    max-width: 500px;
    border-radius: 1%;

    &:hover {
        filter: blur(10px) brightness(30%);
    }
}

.jobs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
}

.jobs-container:empty {
    display: none;
}

.job-contents {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
}

.title {
    height: 100px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}

h1 {
    margin: 1rem 0;
    text-align: center;
}

.hide {
    display: none;
}

.job-description {
    text-align: justify;
    width: 500px;
    padding: 0 2rem;
    font-size: 1.1rem;
    pointer-events: none;
}

.job-picture:hover + .hide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    max-width: 500px;
    top: 20px;
    color: white;
}

.output {
    text-align: center;
    width: 60%;
    color: rgb(255, 74, 74);
}

@keyframes fillColor {
    from {
        background: white;
        color: black;
    }
    to {
        background: #244e9c;
        color: white;
    }
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: auto;
}

form,
.back {
    a:hover {
        background: none !important;
    }

    button {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 0;
        width: 300px;
        height: 90px;
        padding: 1rem 0;
        background: none;
        border: 5px solid #244e9c;
        color: #244e9c;
        font-size: 1.3rem;
    }

    :hover {
        cursor: pointer;
        animation: fillColor 0.5s forwards;
    }
}

.save-to-pdf {
    .save-pdf {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 0;
        width: 300px;
        height: 90px;
        padding: 1rem 0;
        background: none;
        border: 5px solid #244e9c;
        color: #244e9c;
        font-size: 1.3rem;
    }

    :hover {
        cursor: pointer;
        animation: fillColor 0.5s forwards;
    }
}

a {
    color: #244e9c;
    text-decoration-color: #244e9c;
    text-decoration-thickness: 0.1rem;
}

@media only screen and (max-width: 1350px) {
    .answers-container {
        grid-template-columns: 1fr;
    }
}

@media only screen and (max-width: 750px) {
    .job-picture {
        width: 400px;
    }
    .job-description {
        width: 400px;
        font-size: 1rem;
    }
}

@media only screen and (max-width: 600px) {
    .job-picture {
        width: 350px;
    }
    .job-description {
        width: 370px;
        font-size: 0.8rem;
    }
}

@media only screen and (max-width: 500px) {
    .job-picture {
        width: 300px;
    }
    .job-description {
        width: 320px;
        font-size: 0.7rem;
    }
}
</style>
