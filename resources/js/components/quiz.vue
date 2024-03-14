<template>
    <div>
        <section class="quiz-section">
            <div class="quiz-body">
                <div
                    v-if="!show && receivedAnswers === null"
                    class="description"
                >
                    <p>
                        Prieš pradėdami testą įveskite savo
                        <span>vardą</span> arba <span>slapyvardį</span>, kuris
                        bus prirašomas prie jūsų rezultatų. Teste pateikti jūsų
                        duomenys bus naudojami <span>tik</span> interpretuoti
                        galutiniams rezultatams ir <span>nebus</span> perduodami
                        jokioms trečiosioms šalims. Teste yra 42 klausimai, į
                        kuriuos reikia atsakyti <span>taip</span> arba
                        <span>ne</span>, priklausomai nuo to, ar pateiktas
                        teiginys jums tinka.
                    </p>
                </div>
                <div class="quiz-container">
                    <Survey
                        v-if="!show && receivedAnswers === null"
                        :survey="survey"
                    />
                    <CompletionScreen
                        v-if="show || receivedAnswers !== null"
                        :name="name"
                        :quizAnswer="answer || null"
                        :receivedData="receivedAnswers || null"
                    />
                    <div v-if="receivedAnswers !== null" class="delete">
                        <button class="delete-button" @click="deleteResults()">
                            Panaikinti išsaugotus rezultatus
                        </button>
                    </div>
                    <p class="name-error"></p>
                    <p class="error"></p>
                </div>
            </div>
            <div v-if="!show" class="back">
                <a href="/">
                    <button class="back-button">Grįžti į pradžią</button>
                </a>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
import "survey-vue/modern.min.css";
import "survey-vue/survey.min.css";
import {
    Survey,
    StylesManager,
    Model,
    QuestionBooleanModel,
    SurveyModel,
    ItemValue,
    Question,
    DragDropSurveyElements,
    SurveyElement,
} from "survey-vue";
import { surveyModel } from "../../../public/js/questions.js";
import CompletionScreen from "./completionScreen.vue";
import axios from "axios";

StylesManager.applyTheme("modern");

export default {
    name: "quiz",
    components: {
        Survey,
        CompletionScreen,
    },
    data() {
        const survey = new Model(surveyModel);
        survey.focusFirstQuestionAutomatic = true;
        survey.onComplete.add((survey) => {
            this.show = true;
            const data = survey.data;
            console.log(data);
            let playerName;
            let name = Object.entries(data).slice(0, 1);
            if (name.length !== 0 && typeof name[0][1] === "string") {
                playerName = name[0][1];
                this.name = playerName;
            } else {
                const nameError = document.querySelector(".name-error");
                const error = new Error("Neįrašėte savo vardo!");
                nameError.innerText = error;
            }
            let slicedData = Object.entries(data).slice(1, 43);
            let positiveAnswers = [];
            for (let i = 0; i < slicedData.length; i++) {
                if (slicedData[i][1] === true)
                    positiveAnswers.push(slicedData[i]);
            }
            let quizAnswer = this.findPersonalityType(positiveAnswers);
            this.answer = quizAnswer;
            return slicedData;
        });

        return {
            survey,
            show: false,
            name: null,
            answer: null,
            receivedAnswers: null,
        };
    },
    created() {
        this.survey.cssValue.navigation.next = "button-next";
        this.survey.cssValue.navigation.next += " nextBtn";
        this.survey.cssValue.navigation.prev = "button-next";
        this.survey.cssValue.navigation.prev += " prevBtn";
        this.survey.cssValue.navigation.complete = "button-next";
        this.survey.cssValue.navigation.complete += " completeBtn";
        this.survey.pagePrevText = "Grįžti";
        this.survey.pageNextText = "Kitas";
        this.survey.completeText = "Pabaigti";

        this.getResults();
    },
    methods: {
        alertResults(sender) {
            const results = JSON.stringify(sender.data);
            alert(results);
        },
        findPersonalityType(positiveAnswers) {
            let personalityTypes = [];
            for (let i = 0; i < positiveAnswers.length; i++) {
                personalityTypes.push(positiveAnswers[i][0].slice(-1));
            }

            function Type(type, count) {
                this.type = type;
                this.count = count;
            }

            let rCount = 0,
                iCount = 0,
                aCount = 0,
                sCount = 0,
                eCount = 0,
                cCount = 0;
            personalityTypes.forEach((type) => {
                switch (type) {
                    case "r":
                        rCount++;
                        break;
                    case "i":
                        iCount++;
                        break;
                    case "a":
                        aCount++;
                        break;
                    case "s":
                        sCount++;
                        break;
                    case "e":
                        eCount++;
                        break;
                    case "c":
                        cCount++;
                        break;
                    default:
                        rCount++;
                }
            });

            let rType = new Type("r", rCount);
            let iType = new Type("i", iCount);
            let aType = new Type("a", aCount);
            let sType = new Type("s", sCount);
            let eType = new Type("e", eCount);
            let cType = new Type("c", cCount);

            let riasecTypes = [];
            riasecTypes.push(rType, iType, aType, sType, eType, cType);
            let sortedArray = riasecTypes.sort((a, b) => {
                return b.count - a.count;
            });
            let riasecCode = [];
            const quizErr = document.querySelector(".error");
            riasecCode.push(sortedArray[0], sortedArray[1], sortedArray[2]);
            riasecCode.forEach((letter, key) => {
                if (letter.count === 0) {
                    riasecCode.splice(key);
                }
            });
            if (riasecCode.length === 0) {
                const err = new Error(
                    "Pasirinkote per mažai jums tinkamų teiginių. Bandykite iš naujo."
                );
                quizErr.innerText = err;
            }

            return riasecCode;
        },
        getResults() {
            fetch("http://127.0.0.1:8000/formSubmit")
                .then((response) => response.json())
                .then((data) => {
                    if (data.length === 0) this.receivedAnswers = null;
                    else this.receivedAnswers = data;
                })
                .catch((err) => console.log(err.message));
        },
        deleteResults() {
            if (confirm("Ar tikrai norite ištrinti savo rezultatus?")) {
                axios
                    .delete("http://127.0.0.1:8000/formSubmit")
                    .then((response) => console.log(response))
                    .catch((err) => console.log(err.message));
                alert("Ištrinta");
                document.location.reload();
            } else {
                console.log("Neištrinta.");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/app.scss";

.quiz-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 10px #244e9c;
    opacity: 100%;
    margin: 2rem;
    border-radius: 0.5rem;
    min-height: 60vh;
}

.none {
    display: none;
}

.quiz-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
    min-height: 80vh;
    margin: auto;
    color: black;
    overflow-x: hidden;
}

.description {
    font-size: 1.3rem;
    width: 90%;
    margin: 1rem auto;
    text-align: justify;
    line-height: 1.5;
}

span {
    color: #244e9c;
    font-weight: bold;
}
</style>
<style lang="scss">
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

.button-next {
    width: 200px;
    height: 50px;
    padding: 0.5rem;
    background: none;
    border: 5px solid #244e9c;
    color: #244e9c;
    font-size: 1.3rem;
    font-family: "Ubuntu", sans-serif;
}

.button-next:hover {
    cursor: pointer;
    animation: fillColor 0.5s forwards;
}

.txt-input {
    input {
        display: none;
    }
}

.sv-title {
    padding: 0;
}

.sv-question__content {
    background: none;
    overflow-x: hidden;
    margin: 0;
}

.sv-question__content input {
    border-top: 0px;
    border-right: 0px;
    border-bottom: 2px solid #244e9c;
    border-left: 0px;
    max-width: 100%;
    margin: 0.5rem;
    font-family: "Ubuntu", sans-serif;
    overflow-x: hidden;
}

.sv-root-modern ::-webkit-scrollbar-thumb {
    display: none;
}

.sv-root-modern ::-webkit-scrollbar {
    opacity: 0;
}

.sv-root-modern ::-webkit-scrollbar-track {
    display: none;
}

.sv-question__content input:focus {
    border-bottom: 2px solid #244e9c !important;
    background: rgb(238, 238, 238);
}

.sv-question__title--answer {
    background: none !important;
    text-decoration: line-through #244e9c;
}

.sv-boolean__switch {
    background: #244e9c !important;
}

.sv-string-viewer {
    font-size: 1.3rem;
    color: #244e9c;
    font-weight: bold;
}

.sv-footer {
    display: flex;
}

.sv-footer.sv-body__footer.sv-clearfix {
    margin-right: 5% !important;
    margin-left: 5% !important;
}

.sv-clearfix::after {
    display: none;
}

.sv-body__footer {
    display: flex;
    justify-content: space-between;
}

.sv-text {
    margin: 0 !important;
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
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: 1rem;
}

.buttons .back {
    margin-top: 0 !important;
}

.back {
    display: flex;
    justify-content: center;

    a:hover {
        background: none !important;
    }

    button {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 2rem;
        width: 200px;
        height: 50px;
        padding: 0.5rem 0rem;
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

.delete {
    display: flex;
    justify-content: center;

    .delete-button {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 2rem;
        width: 400px;
        height: 80px;
        padding: 0.5rem 0rem;
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

.error,
.name-error {
    text-align: center;
    font-size: 1.3rem;
    width: 100%;
    color: rgb(255, 74, 74);
}

@media only screen and (max-width: 1000px) {
    .sv-body__page {
        margin-right: 5% !important;
        margin-left: 5% !important;
    }
}

@media only screen and (max-width: 787px) {
    .quiz-body {
        margin: 2rem 0 !important;
    }
}

@media only screen and (max-width: 590px) {
    .quiz-section {
        min-width: 80% !important;
    }
    .buttons {
        flex-wrap: nowrap;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center;
    }
    .buttons button {
        width: 250px !important;
    }
    .back {
        margin: 1rem 0 !important;
    }
    .sv-footer {
        flex-direction: column-reverse;
        align-items: center;
    }

    .button-next {
        margin: 0.5rem 0;
    }

    .description p {
        font-size: 1.1rem;
    }
}
</style>
