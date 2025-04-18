<template>
    <div id="loading-screen">
        <div class="animated-logo">
            <img id="lb-gif" src="LBGif.gif" alt="Logo-LB" />
        </div>
    </div>
</template>

<script>
import { onBeforeUnmount } from 'vue'
export default {
    setup() {

        function restartGif() {
            document.getElementById('lb-gif').src = "LBGif.gif"
        }

        onBeforeUnmount(() => {
            window.removeEventListener('beforeunload', restartGif)
        });

        window.addEventListener('beforeunload', restartGif)
        
        return {}
    }
}
</script>

<style lang="scss">
#loading-screen {
    position: relative;
    display: flex;
    background-color: var(--rose);
    width: 100%;
    height: 100%;
    z-index: 10000;

    & .animated-logo {
        align-self: center;
        margin: 0 auto !important;
        transition: 0.5s;

        & img {
            max-width: 150px;
            image-rendering: smooth;
            moz-image-rendering: smooth;
            webkit-image-rendering: smooth;
        }
    }
}
</style>