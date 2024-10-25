<template>
    <section id="contact">
        <div class="contact-wrap limit">
            <div v-if="isSended" id="form">
                <div class="form-col">
                    <h4><span>Vamos criar um</span><br>
                        projeto <i>incrível?</i></h4>
                </div>
                <div class="form-col">
                    <form class="form" @submit.prevent="sendEmail">
                        <label class="heading-uppercase">Nome</label>
                        <input class="heading-uppercase" type="text" id="name" name="name">
                        <label class="heading-uppercase">empresa</label>
                        <input class="heading-uppercase" type="text" id="company-name" name="company-name">
                        <label class="heading-uppercase">E-mail</label>
                        <input class="heading-uppercase" type="mail" id="mail" name="mail">
                        <label class="heading-uppercase">whatsapp</label>
                        <input class="heading-uppercase" type="tel" id="whatsapp" name="whatsapp">
                        <label class="heading-uppercase">Como podemos te ajudar?</label>
                        <textarea class="heading-uppercase" id="message" name="message"
                            placeholder="fale mais sobre sua empresa e o que ela precisa, por favor!"></textarea>
                        <button class="heading-uppercase" @click.prevent="sendEmail">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <div id="agradecimento" v-else>
                <h2>Obrigada!</h2>
                <p>Recebemos o seu pedido de orçamento e logo logo entraremos em contato para conversarmos com calma
                    sobre o
                    seu projeto!</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isSended: true
        }
    },
    mounted() {
        
    },
    methods: {
        sendEmail() {
            console.log('enviado');
            this.isSended = false
        }
    }
}
</script>


<style lang="scss">
#contact {
    background-color: var(--rose);
    color: var(--marrom-escuro);
    display: flex;
    flex-direction: column;
    justify-content: end;

    #form {
        display: flex;
        padding-bottom: 20vh;

        .form-col {
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            justify-content: end;

            h4 {
                color: var(--preto)
            }

            .form {
                display: flex;
                flex-direction: column;
                columns: 2;

                label {
                    margin-top: 20px;
                }

                button {
                    width: fit-content;
                    background-color: transparent;
                    box-shadow: none;
                    border: none;
                    color: var(--marrom-escuro);
                    cursor: pointer;
                    margin-left: auto;
                    margin-top: 40px;
                }

                input,
                textarea {
                    padding: 10px 0;
                    border: 0;
                    resize: none;
                    background-color: transparent;
                    border-bottom: 2px solid var(--marrom-escuro);
                    color: var(--marrom-escuro) !important;
                    caret-color: var(--marrom-escuro);
                    font-size: 16px !important;

                    &:focus,
                    :focus-visible {
                        outline: none;
                    }
                }

            }
        }
        .form-col:nth-of-type(2){
            display: flex;
            align-items: end;
        }
    }

    #agradecimento {
        color: var(--preto);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        p {
            padding-top: 30px;
        }
    }
}
</style>