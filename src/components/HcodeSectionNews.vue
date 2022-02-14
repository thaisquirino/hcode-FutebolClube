<template>
  <section>
    <div class="container">

      <HcodeSectionNewsIndividual
        v-for="notice in news"
        :key="notice.id"
        :img-name="notice.img"
        :img-info="notice.imgInfo"
        :news-date="notice.date"
        
      >
       <template v-slot:title>
         <h2>{{notice.title}}</h2>
       </template>    

        <p>{{notice.content| truncate(200)}}</p>
      </HcodeSectionNewsIndividual>


    </div>
  </section>
</template>
<script>
import HcodeSectionNewsIndividual from "./HcodeSectionNewsIndividual";
export default {
  components: {
    HcodeSectionNewsIndividual,
  },
  data(){
    return{
      news:[]

    }
  },
  created(){
    this.news=[{
      id:1,
      title:"Começaram os treinos para a  nova temporada",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
        date:"2022-01-22",
        img:"news1.jpg",
        imgInfo:"Noticia 1"
    }, {
      id:2,
      title:"Futebol Feminino faz coletiva no ninho  do urubu",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
        date:"2022-01-22",
        img:"news2.jpg",
        imgInfo:"Noticia 2"
    }, {
      id:3,
      title:"E quando vamos pro campo ele fica pequeno",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
        date:"2022-01-22",
        img:"news3.jpg",
        imgInfo:"Noticia 3"
    
    }]
  }
}
</script>

<style  scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: rgb(141, 12, 12);
}
</style>
