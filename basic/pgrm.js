var a=10 //global 
let b=20 // script 
const c=30 //script

function demo(e,f) {
   var g=e+f //local
    var x=40 //local
    let y=50 //local
    const z=60 //local
}
demo(20,50)

function demo1(aa) {
    c1()
    function c1() {
        var bb=52 //local
        {
            var ff=551//local
            let gg=62 //block
            const jj=552 //block
        }
    }
    
}

{
    var m=70 //global
    let n=80 //block
    const o=90 //block
}

{
    function test(h) {
        var aa=55 //local
        let bb=75 //local
        const cc=65 //local
    }

}
test(56)
demo1(896)















