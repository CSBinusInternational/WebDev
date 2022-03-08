
// promises

function CatLoverCheck (){
    return new Promise((resolve, reject) => {
        let CatLover = true;
        if (CatLover == true){
            resolve('You are a cat lover');
        } else {
            reject('You are not a cat lover');
        }
    })
}

// async

async function CatLoverCheckAsync(){
    let catPromise = new Promise(function(resolve, reject) {
        let CatLover = true;
        if (CatLover == true){
            resolve('You are a cat lover');
        } else {
            reject('You are not a cat lover');
        }
    });
    console.log('are you a cat lover?') = await catPromise;
}

CatLoverCheckAsync()