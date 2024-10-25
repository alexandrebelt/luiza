<template>
  <SideMenu />

  <router-view />
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import SideMenu from './components/SideMenu';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SideMenu
  },
  mounted(){
    // eslint-disable-next-line
    const locomotiveScroll = new LocomotiveScroll();

  }

})
</script>
<style lang="scss">
@import url("https://use.typekit.net/wrn0djw.css");

* {
  margin: 0;
  padding: 0;
}

:root {
  --transition: .5s;
  --preto: #000;
  --branco: #FBF9F5;
  --rose: #EFE5DF;
  --marrom-claro: #A49688;
  --marrom-escuro: #7E756C;
  --cinza-escuro: #3D3D3D;

  //Font-sizes
  --h1: 152px;
  --h2: 128px;
  --h3: 96px;
  --h4: 64px;
  --h5: 48px;
  --h6: 20px;

  --ivy: "ivyjournal", sans-serif;
  --neue: "neue-haas-grotesk-display", sans-serif;
  --comm: "commuters-sans", sans-serif;
  --eb: "eb-garamond", serif;
}
html, body{
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--branco)
}

body {
  background: var(--preto);
}

section {
  height: 100vh;
}
.container{
  padding: 120px 30px;
}
.limit{
  padding: 0 50px;
  max-width: 2000px;
  margin: 0 auto;
}
.center-content {
  display: flex;
  justify-content: center;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: var(--ivy);
  font-weight: 200;
  margin: 0;
  span{
    font-family: var(--neue)
  }
}

p {
  font-family: var(--neue);
  font-size: 20px;
  line-height: 1.5em;
}

a {
  text-decoration: none;
  color: var(--branco);
}

h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
  line-height: 1.1em;
}

h3 {
  font-size: var(--h3);
  line-height: 1.1em;
}

h4 {
  font-size: var(--h4);
  line-height: 1.1em;
}

h5 {
  font-size: var(--h5);
  line-height: 1.1em;
}

h6 {
  font-family: var(--eb);
  font-weight: 200;
  font-style: italic;
  font-size: var(--h6);
}


.heading-uppercase {
  font-size: 18px;
  text-transform: uppercase;
  font-family: var(--comm);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-top: 10px;
  font-style: initial;
}


</style>
