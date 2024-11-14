<template>
    <section id="contact">
        <div class="container-maior">
            <div class="limit">
                <div class="contact-wrap">
                    <div v-if="!isFormSended" id="form">
                        <div class="form-col langs">
                            <div v-html="$t('contact.heading')"></div>
                        </div>
                        <div class="form-col langs">
                            <form class="form" @submit.prevent="sendEmail">
                                <label class="heading-uppercase">{{$t('contact.input1')}}</label>
                                <input class="" type="text" id="name" name="name">
                                <label class="heading-uppercase">{{$t('contact.input2')}}</label>
                                <input class="" type="text" id="company-name" name="company-name">
                                <label class="heading-uppercase">{{ $t('contact.input3') }}</label>
                                <input class="" type="mail" id="mail" name="mail">
                                <label class="heading-uppercase">{{$t('contact.input4')}}</label>
                                <input class="whatsapp" type="tel" id="whatsapp" name="whatsapp">
                                <label class="heading-uppercase">{{$t('contact.input5')}}</label>
                                <textarea class="" id="message" name="message"
                                    :placeholder="$t('contact.input5PH')"></textarea>
                                <button class="heading-uppercase" @click.prevent="sendEmail">
                                    {{$t('contact.send')}}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="langs" id="agradecimento" v-else>
                        <h2>{{$t('contact.thankyou')}}</h2>
                        <p>{{$t('contact.thankyouSub')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

export default {
    data() {
        return {
            isFormSended: false
        }
    },
    mounted() {
        let whats = document.querySelector(".whatsapp");

        if (whats) {
            document.querySelector('.whatsapp').addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });
        }
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm('Service', 'Template', this.$refs.form, {
                    publicKey: 'Public',
                })
                .then(
                    () => {
                        if (!this.isFormSended) {
                            window.scrollTo(0, 0);

                            setTimeout(() => {
                                setTimeout(() => {
                                    this.isFormSended = true

                                }, 500);
                                const formulario = document.querySelector("#orcamento")
                                gsap.from(formulario, {
                                    opacity: 1,
                                    height: "100vh"
                                })
                                gsap.to(formulario, {
                                    opacity: 0,
                                    height: "0px"
                                })
                            }, 1500);
                        }
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
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
        padding-bottom: clamp(30px, 5vw, 100px);
        width: 100%;


        .form-col {
            //flex-basis: 50%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            flex-basis: 50%;

            h4 {
                font-size: clamp(35px, 5.5vw, 64px);
                color: var(--preto);
            }

            .form {
                display: flex;
                flex-direction: column;
                width: 100%;

                label {
                    margin-top: 20px;
                    font-size: clamp(13px, 2vw, 20px);
                }

                button {
                    width: fit-content;
                    background-color: transparent;
                    box-shadow: none;
                    border: none;
                    color: var(--marrom-escuro);
                    margin-left: auto;
                    cursor: pointer;
                    margin-top: 40px;
                }

                input,
                textarea {
                    padding: 10px 0;
                    font-family: var(--neue);
                    font-weight: 500;
                    border: 0;
                    resize: none;
                    background-color: transparent;
                    border-bottom: 2px solid var(--marrom-escuro);
                    color: var(--marrom-escuro) !important;
                    caret-color: var(--marrom-escuro);
                    font-size: clamp(13px, 2vw, 20px);
                    letter-spacing: 0.05em;


                    &:focus,
                    :focus-visible {
                        outline: none;
                    }
                }

                textarea {
                    min-height: 100px;
                }

            }
        }

        .form-col:nth-of-type(2) {
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

@media(max-width:700px) {
    #contact {
        justify-content: center;

        #form {
            flex-direction: column;
            padding-bottom: initial;

            .form-col {

                h4 {
                    margin-bottom: 30px;
                }

                label {
                    margin-top: 5px !important;
                    font-size: 13px;
                }

                button {
                    font-size: 13px;
                }

                input,
                textarea {
                    padding: 5px !important;
                    font-size: 13px !important;
                }
            }
        }
    }
}
</style>