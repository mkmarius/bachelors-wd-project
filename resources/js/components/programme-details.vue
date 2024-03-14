<template>
    <div>
        <nav class="programme-nav">
            <ul class="menu-ul">
                <div class="list-item">
                    <li
                        @click="
                            description = true;
                            admission = false;
                            subject = false;
                        "
                        :class="{ active_link: description }"
                        class="menu-item"
                    >
                        Aprašymas
                    </li>
                </div>
                <div class="list-item">
                    <li
                        @click="
                            description = false;
                            admission = true;
                            subject = false;
                        "
                        :class="{ active_link: admission }"
                        class="menu-item"
                    >
                        Stojimo reikalavimai
                    </li>
                </div>
                <div class="list-item">
                    <li
                        @click="
                            description = false;
                            admission = false;
                            subject = true;
                        "
                        :class="{ active_link: subject }"
                        class="menu-item"
                    >
                        Studijų dalykai
                    </li>
                </div>
            </ul>
        </nav>
        <div class="container">
            <ProgrammeDescription v-if="description"></ProgrammeDescription>
            <AdmissionSection v-if="admission"></AdmissionSection>
            <SubjectSection v-if="subject"></SubjectSection>
            <div class="back">
                <a href="/"
                    ><button class="back-button">Grįžti į pradžią</button></a
                >
            </div>
        </div>
    </div>
</template>

<script>
import AdmissionSection from "./admission-section.vue";
export default {
    name: "programme-details",
    data() {
        return {
            description: true,
            admission: false,
            subject: false,
        };
    },
    components: { AdmissionSection },
};
</script>

<style lang="scss">
@import "~/app.scss";
.programme-nav {
    margin-top: 2rem;
    max-width: 100%;
}
.menu-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.menu-item {
    font-size: 1.5rem;
    list-style: none;
}

.active_link {
    background: #244e9c !important;
    color: white !important;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: auto;
}
.list-item {
    text-align: center;
    .menu-item {
        margin: 1rem 2rem;
        width: 250px;
        height: 50px;
        padding: 0.3rem 0rem;
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
.back {
    margin-top: 2rem;
}
</style>
