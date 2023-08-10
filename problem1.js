function dealy(i){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(i);
        },i*1000)
    })
}


async function timer(n){
    console.log("start timer");
    for(let i=0;i<=n;i++){
        const result = await dealy(i);
        console.log(result);
    }
    console.log("end timer");
}

timer(3);