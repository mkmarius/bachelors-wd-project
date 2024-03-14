<template>
    <div class="header-container">
        <div class="logo">
            <a href="/"><img src="/images/logo.png" alt="vgtu logo" /></a>
        </div>
        <div class="header-text">
            <h1>VILNIUS TECH</h1>
            <h2 class="programme-title">
                <em>Multimedija ir kompiuterinis dizainas</em>
            </h2>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header-container {
    height: 15vh;
    background: #244e9c;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    font-family: "Ubuntu", sans-serif;
}
.logo {
    display: flex;
    align-items: center;
    max-height: 10vh;
    margin-top: 1rem;
    margin-bottom: 1rem;

    img {
        width: 70px;
        z-index: 1;
    }
}
.header-text {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-top: 0;
    margin-left: 1rem;

    h1 {
        font-size: 2rem;
        margin-top: -15px;
        padding: 0;
    }

    .programme-title {
        font-size: 1.5rem;
        .study-programme {
            color: white;
            font-size: 1.5rem;
        }
    }
}
@media only screen and (max-width: 740px) {
    .header-text {
        .programme-title {
            display: flex;
            flex-wrap: wrap;
        }
    }
}

@media only screen and (max-width: 534px) {
    .header-text {
        .programme-title {
            font-size: 1.1rem;
        }
    }
}
</style>
<script>
export default {
    name: "website-header",
};
</script>
