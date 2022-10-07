async function sync() {
    console.log("start");
    var p = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("in progress 1")
        }, 4000)
    })
    await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})

    var p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("in progress 2")
            reject("rejected")
        }, 4000)
    })
    await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
    console.log("end");
}


sync()