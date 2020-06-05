var protoObj={x:5, y:7,z:9};
var myObj1=Object.create(protoObj);
console.log(myObj1.x);

var myObj2=Object.create(protoObj);
myObj2.x=0;
console.log(myObj2.x);
delete myObj1.y;
console.log(myObj2.y);
console.log(myObj1.y);
console.log(protoObj.y);

delete protoObj.z;
console.log(myObj2.z);
console.log(myObj1.z);
console.log(protoObj.z);


function Foo(bar) {
    this.count=0;
    this.bar=bar;
}
var obj1=new Foo(5);
console.log(obj1.count);
//obj1.increment();
Foo.prototype.increment=function(){
    this.count++;
};

obj1.increment();
console.log(obj1.count)
var obj2=new Foo(10);
console.log(obj2.count);

obj2.increment();
console.log(obj2.count);