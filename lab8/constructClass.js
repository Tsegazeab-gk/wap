
class BicyclePrototype {

    constructor() {
        this.speed=0;
    }

    applyBrake(val){
        this.speed -=val;
    }

    speedup(val){
        this.speed +=val;
    }

}

class MountainBikeProtoype  extends BicyclePrototype {

    constructor() {
        super();
        this.gear=1;
    }
    setGear(val) {
        this.gear = val;
    }
}

let start = function () {
    "use strict";

    let bicyclePrototype = new BicyclePrototype();

    let mountainBikePrototype =new MountainBikeProtoype();

    console.log(bicyclePrototype.speed);

    console.log(mountainBikePrototype.speed);
    bicyclePrototype.speedup(10);
    console.log(bicyclePrototype.speed);
    bicyclePrototype.applyBrake(5);
    console.log(bicyclePrototype.speed);
    console.log(mountainBikePrototype.gear);

    mountainBikePrototype.setGear(2);
    console.log(mountainBikePrototype.gear);
    console.log(mountainBikePrototype.speed);
};
start();