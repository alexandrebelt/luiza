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
                            <form ref="form" class="form" @submit.prevent="sendEmail">
                                <label class="heading-uppercase">{{ $t('contact.input1') }}</label>
                                <input class="" type="text" id="name" name="name">
                                <label class="heading-uppercase">{{ $t('contact.input2') }}</label>
                                <input class="" type="text" id="company-name" name="company_name">
                                <label class="heading-uppercase">{{ $t('contact.input3') }}</label>
                                <input class="" type="mail" id="mail" name="mail">
                                <label class="heading-uppercase">{{ $t('contact.input4') }}</label>
                                <input class="whatsapp" type="tel" id="whatsapp" name="whatsapp">
                                <label class="heading-uppercase">{{ $t('contact.input5') }}</label>
                                <textarea class="" id="message" name="message"
                                    :placeholder="$t('contact.input5PH')"></textarea>
                                <a id="send-form" class="heading-uppercase" @click.prevent="sendEmail">
                                    {{ $t('contact.send') }}
                                </a>
                            </form>
                        </div>
                    </div>
                    <div class="langs" id="agradecimento" v-else>
                        <h2>{{ $t('contact.thankyou') }}</h2>
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
        this.updateInputMask(this.$i18n.locale);
    },
    watch: {
        '$i18n.locale'(newLocale) {
            this.updateInputMask(newLocale);
        },

        'isFormSended'(newValue) {
            if (newValue) {
                this.$nextTick(() => {
                    gsap.set('#agradecimento', {
                        filter: 'blur(30px)',
                        opacity: 0
                    })
                    gsap.to('#agradecimento', {
                        filter: 'blur(0px)',
                        opacity: 1,
                        duration: 1
                    })
                })
            }
        }
    },
    methods: {
        updateInputMask(locale) {
            const formatPattern = locale == 'PT'
                ? /(\d{0,2})(\d{0,5})(\d{0,4})/
                : /(\d{0,3})(\d{0,3})(\d{0,4})/;

            let whatsappInput = document.querySelector(".whatsapp");
            if (whatsappInput) {
                whatsappInput.removeEventListener('input', this.formatWhatsappInput);

                this.formatWhatsappInput = function (e) {
                    const x = e.target.value.replace(/\D/g, '').match(formatPattern);
                    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
                }

                whatsappInput.addEventListener('input', this.formatWhatsappInput);
            }

        },

        validateForm() {
            const form = this.$refs.form;
            if (!form.name.value || !form.mail.value || !form.message.value) {
                alert(this.$t('contact.error2'));
                return false;
            }
            return true;
        },
        sendEmail() {

            if (!this.validateForm()) return;

            emailjs
                .sendForm('service_t05vohy', 'template_01uwlfk', this.$refs.form, {
                    publicKey: 'PZZ1JqgNe-zgEggnJ',
                })
                .then(
                    () => {
                        if (!this.isFormSended) {
                            window.scrollTo(0, 0);
                            gsap.to('#contact .container-maior',
                                {
                                    filter: 'blur(30px)',
                                    opacity: 0,
                                    duration: 1
                                }
                            )
                            setTimeout(() => {
                                this.isFormSended = true
                                document.querySelector('#contact .container-maior').classList.add('enviado')
                                gsap.to('#contact .container-maior',
                                    {
                                        filter: 'blur(0px)',
                                        opacity: 0,
                                        duration: 1
                                    }
                                )
                            }, 1000);
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
    color: var(--preto);
    display: flex;
    flex-direction: column;
    justify-content: end;

    #form {
        display: flex;
        padding-bottom: clamp(30px, 5vw, 100px);
        width: 100%;

        h4 {
            margin-bottom: 17px;
        }

        .form-col {
            //flex-basis: 50%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            flex-basis: 50%;

            h4 {
                font-size: clamp(40px, 5.5vw, 63px) !important;
                color: var(--preto);
                max-width: clamp(300px, 50vw, 500px);
            }

            .form {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-left: 80px;

                label {
                    margin-top: 20px;
                    font-size: clamp(12px, 2vw, 13px);
                }

                a {
                    color: var(--preto);
                    transition: 0.5s;
                    display: inline-flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: 20px;
                    align-items: center;
                    width: fit-content;

                    cursor: pointer;

                    &:hover {
                        span {
                            width: 100%;
                        }
                    }

                    span {
                        transition: .5s;
                        width: 0px;
                        height: 5px;
                        background-color: var(--marrom-escuro);
                        justify-self: center;
                    }
                }

                input,
                textarea {
                    padding: 10px 0;
                    font-family: var(--neue);
                    font-weight: 500;
                    border: 0;
                    resize: none;
                    background-color: transparent;
                    border-bottom: 1px solid var(--marrom-claro);
                    color: var(--marrom-escuro) !important;
                    caret-color: var(--marrom-escuro);
                    font-size: clamp(13px, 2vw, 14px);
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
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-style: italic;

        @media(max-width: 700px) {
            padding: 20px;

            h2 {
                min-width: 320px;
            }
        }
    }
}

.enviado {
    display: contents !important;
}

@media(max-width:700px) {
    #contact {
        justify-content: center;

        .form {
            padding-left: 0px !important;
        }

        #form {
            flex-direction: column;
            padding-bottom: initial;


            .form-col {

                h4 {
                    margin-bottom: 30px;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 220px;
                }

                label {
                    margin-top: 5px !important;
                    font-size: 13px;
                }

                button {
                    font-size: 11px;
                }

                input,
                textarea {
                    padding: 10px 0 !important;
                    margin-bottom: 10px;
                    font-size: 12px !important;
                }
            }
        }
    }
}
</style>