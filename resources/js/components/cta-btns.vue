<template>
    <div class="cta-btns">
        <div class="button">
            <a href="/programme-details">
                <button>Sužinoti daugiau apie studijų programą</button>
            </a>
        </div>
        <div class="button">
            <a href="/quiz-intro"><button>Atlikti asmenybės testą</button></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
.cta-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    .button {
        button {
            margin: 1rem 0rem;
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
}
@media only screen and (max-width: 1475px) {
    .cta-btns {
        margin-top: 1rem;
    }
}
@media only screen and (max-width: 1050px) {
    .cta-btns {
        margin-bottom: 2rem;
    }
}
</style>

<script>
export default {
    name: "cta-btns",
};
</script>
