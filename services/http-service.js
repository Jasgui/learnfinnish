class HttpService {
    getProducts = () => {
        console.log("this works");
    }
}


//
//class HttpService {
//    getProducts = () => {
//
//        fetch('http://learnfinnish.xyz:3000/product')
//            .then(res => {
//                console.log(res.json());
//            })
//    }
//}

export default HttpService;
