
// promises

let promise = new Promise((resolve,reject) => {
    let CatLover = true;
        if (CatLover == true){
            resolve('You are a cat lover');
        } else {
            reject('You are not a cat lover');
        } CatLover
    })

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

// async

// CatLoverCheckAsync()
// async function CatLoverCheckAsync() {
//     try{
//         let CatLover = false;
//     }
//     catch(error){
//         console.log(error)
//     }
// }