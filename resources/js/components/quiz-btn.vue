<template>
    <div class="quiz-button">
        <div class="button">
            <a href="/quiz">
                <button>Atlikti asmenybės testą</button>
            </a>
            <a href="/">
                <button>Grįžti į pradžią</button>
            </a>
        </div>
    </div>
</template>

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
.quiz-button {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
.button {
    a:hover {
        background: none !important;
    }
    button {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 2rem;
        width: 300px;
        height: 90px;
        padding: 1rem;
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
@media only screen and (max-width: 930px) {
    .button {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>

<script>
export default {
    name: "quiz-btn",
};
</script>
