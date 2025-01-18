import { createApp, onBeforeMount, onBeforeUpdate, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import PT from './locale/pt.json'
import EN from './locale/en.json'

const messages = {
    PT,
    EN
};

const getLocaleFromCookie = () => {
    const match = document.cookie.match(new RegExp('(^| )locale=([^;]+)'));
    return match ? match[2]: ' EN';
}

const i18n = createI18n({
    legacy: false,
    locale: getLocaleFromCookie() || 'EN',
    fallbackLocale: 'EN',
    messages,
});

createApp(App).use(router).use(i18n).mount('#app')


