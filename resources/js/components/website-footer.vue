<template>
    <div class="container">
        <footer>
            <div class="footer-text">
                <h3>Marius Krenevičius MKDfs-18 &copy; 2022</h3>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
footer {
    display: flex;
    height: 5vh;
    background: #0e1729;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    .footer-text {
        color: white;
        h3 {
            font-size: 1.3rem;
        }
    }
}
@media only screen and (max-width: 400px) {
    footer {
        .footer-text {
            h3 {
                font-size: 1.2rem;
            }
        }
    }
}
</style>

<script>
export default {
    name: "website-footer",
};
</script>
