
(function () {
"use strict";

    function BicyclePrototype() {
        this.speed = 0;
    }

    BicyclePrototype.prototype.applyBrake = function (value) {
        this.speed -= value;
    };
    BicyclePrototype.prototype.speedup = function (increment) {
        this.speed += increment;
    };

    function MountainBikeProtoype() {

        BicyclePrototype.call(this);
        this.gear = 1;
    }
    MountainBikeProtoype.prototype=Object.create(BicyclePrototype.prototype);
    MountainBikeProtoype.prototype.constructor=MountainBikeProtoype;

    MountainBikeProtoype.prototype.setGear = function (val) {
        this.gear = val;
    };


    let start = function () {

        let bicyclePrototype =new BicyclePrototype();

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

//not clear
   start();
})();