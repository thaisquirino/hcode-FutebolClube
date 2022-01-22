<template>
  <section>
    <div class="container">
      <HcodeSectionNewsIndividual
        img-name="news1.jpg"
        img-info="Noticia 1"
        news-title="Começaram os treinos para a  nova temporada"
        news-content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia
        amet, perspiciatis sit quia laudantium ipsam at nesciunt? Sit magnam
        eveniet, ad asperiores temporibus architecto excepturi accusamus
        doloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel eveniet
        soluta corporis cum officia sint assumenda quis eligendi, praesentium
        repellat, possimus id nulla."
        news-date="19/01/2022"
      />
      <HcodeSectionNewsIndividual
        img-name="news2.jpg"
        img-info="Noticia 1"
        news-title="Aqui treinos a todo  tempo"
        news-content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia
        amet, perspiciatis sit quia laudantium ipsam at nesciunt? Sit magnam
        eveniet, ad asperiores temporibus architecto excepturi accusamus
        doloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel eveniet
        soluta corporis cum officia sint assumenda quis eligendi, praesentium
        repellat, possimus id nulla."
        news-date="19/01/2022"
      />
      <HcodeSectionNewsIndividual
        img-name="news3.jpg"
        img-info="Noticia 1"
        news-title="E quando vamos pro campo ele fica pequeno"
        news-content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia
        amet, perspiciatis sit quia laudantium ipsam at nesciunt? Sit magnam
        eveniet, ad asperiores temporibus architecto excepturi accusamus
        doloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel eveniet
        soluta corporis cum officia sint assumenda quis eligendi, praesentium
        repellat, possimus id nulla."
        news-date="19/01/2022"
      />
    </div>
  </section>
</template>
<script>
import HcodeSectionNewsIndividual from "./HcodeSectionNewsIndividual.vue";
export default {
  components: {
    HcodeSectionNewsIndividual,
  },
};
</script>

<style  scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>
