<template>
    <section id="cta" class="center-content">
        <div>

        </div>
        <div id="cta-block1">
            <h3>
            Vamos criar um <span>projeto <i>incrível</i>?</span>
        </h3>
        <a href="#">
            <h6 class="heading-uppercase">
                Solicite um orçamento
            </h6>
        </a>
        </div>
        <div id="footer">
            <div id="social" class="footer-col">
                <a href="#">
                    <h6>Instagram</h6>
                </a>
                <a href="#">
                    <h6>Behance</h6>
                </a>
                <a href="#">
                    <h6>Threads</h6>
                </a>
            </div>
            <div id="credits" class="footer-col">
                <h6>© 2024 Luiza Bola Design</h6>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
#cta {
    position:relative;
    background-color: var(--rose);
    color: var(--preto);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    a {
        color: var(--preto);

    }

    h3 {
        font-family: var(--neue);
        max-width: 900px;

        span {
            font-family: var(--ivy);
        }
    }

    #footer {
        display: flex;
        justify-content: space-between;
        position:absolute;
        width: 100%;
        
        bottom: 0px;
        left: 50%;
        transform: translatex(-50%);

        .footer-col {
            display: flex;
            gap: 30px;
            padding: 30px;
        }
    }
}
</style>