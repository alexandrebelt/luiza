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
                                <a class="heading-uppercase" @click.prevent="sendEmail">
                                    {{ $t('contact.send') }}
                                    <span></span>
                                </a>
                            </form>
                        </div>
                    </div>
                    <div class="langs" id="agradecimento" v-else>
                        <h2>{{ $t('contact.thankyou') }}</h2>
                        <p>{{ $t('contact.thankyouSub') }}</p>
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
        gsap.set('#agradecimento', {
            filter: 'blur(30px)',
            opacity: 0
        })

        if (whats) {
            document.querySelector('.whatsapp').addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });
        }

    },
    methods: {
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
                                setTimeout(() => {
                                    this.isFormSended = true
                                    document.querySelector('#contact .container-maior').classList.add('enviado')
                                    gsap.to('#contact .container-maior',
                                        {
                                            filter: 'blur(0px)',
                                            opacity: 1,
                                            duration: 1
                                        }
                                    )
                                    setTimeout(() => {

                                        gsap.to('#agradecimento',
                                            {
                                                filter: 'blur(0px)',
                                                opacity: 1,
                                                duration: 1
                                            }
                                        )
                                    }, 1000)

                                }, 500);

                            }, 700);
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
                font-size: clamp(28px, 5.5vw, 63px);
                color: var(--preto);
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
                    color: var(--marrom-escuro);
                    transition: 0.5s;
                    display: inline-flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: 40px;
                    align-items: center;
                    width: fit-content;
                    margin-left: auto;
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
                    border-bottom: 1px solid var(--marrom-escuro);
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

        p {
            padding-top: 30px;
        }

        @media(max-width: 700px) {
            padding: 20px;

            h2 {
                font-size: 44px;
            }

            p {
                min-width: 250px;
                padding-top: 15px;
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
                    padding: 5px !important;
                    font-size: 12px !important;
                }
            }
        }
    }
}
</style>