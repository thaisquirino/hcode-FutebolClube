<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-5 text-center principal-news">
          <h2>Veja os últimos resultados do campeonato</h2>
        </div>

        <div class="col-5 offset-2 text-center principal-news">
          <h2>Marina Höher é a nova contratada do Fut-7 feminino do Mengão</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
section {
  margin-top: 25px;
}
.container .row {
  height: 350px;
}
.container .row .col-5:first-child {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../assets/fla.jpg");
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.container .row .col-5:nth-child(2) {
  background: url("../assets/mariafut.jpg") no-repeat;
  background-size: 100%;
  height: 300px;
}
h2 {
  margin: 25% 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
}
.principal-news {
  cursor: pointer;
}
</style>

