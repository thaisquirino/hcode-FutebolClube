import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: "Campeonato Brasileiro",
        clubName: "Flamengo ",
        news: [{ 
                    id: 1,
                    title: "Começaram os treinos para a  nova temporada",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
                    date: "2022-01-22",
                    img: "news1.jpg",
                    imgInfo: "Noticia 1"
                }, {
                    id: 2,
                    title: "Futebol Feminino faz coletiva no ninho  do urubu",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
                    date: "2022-01-22",
                    img: "news2.jpg",
                    imgInfo: "Noticia 2"
                }, {
                    id: 3,
                    title: "E quando vamos pro campo ele fica pequeno",
                    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitiaamet, perspiciatis sit quia laudantium ipsam at nesciunt Sit magnameveniet, ad asperiores temporibus architecto excepturi accusamusdoloribus magni esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos aliquam maiores dolore repudiandae fugit vel evenietsoluta corporis cum officia sint assumenda quis eligendi, praesentiumrepellat, possimus id nulla.",
                    date: "2022-01-22",
                    img: "news3.jpg",
                    imgInfo: "Noticia 3"

                }]   
    },
    getters: {
        getChampionship(state) {
            return state.championship;
            
        },
        getClubName(state) {
            return state.clubName
        },
        getNews(state) {
            return state.news;
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue;
        },
        setClubName(state, newName) {
            state.clubName = newName;
        }
    },
    actions: {
        changeChampionship(context, value) {
            context.commit('setChampionship', value); 
        },
        updateClubeName(context, value) {
            context.commit('setClubName', value);
        }
    }
})