export default {
    state: {
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
        getNews(state) {
            return state.news;
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            }); 
            return notice;
            
        }
    }
}