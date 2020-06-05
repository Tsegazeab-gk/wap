let a =[1,2,3,4,5];
let b=a.map(function(el,i,a){
    return el+10;
});

let c=b.filter(function(e,i,b){
    return e%3!=0;
});
let d=c.findIndex(function(e){
    return e>13;
});
let e= c.reduce(function(pre,e,i,d){
    return pre+e;
});
console.log(b);
console.log(c);
console.log(d);
console.log(e);
for( let a of c){
    console.log(a)
}
for(let b of c.entries()){
    console.log(b)
}