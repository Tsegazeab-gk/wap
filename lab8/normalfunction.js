
(function () {
    "use strict";

    let createBicyclePrototype = function () {
        return {
            speed : 0,
            applyBrake: function (value) {
                this.speed -= value;
            },
            speedup: function (increment) {
                this.speed += increment;
            }
        };
    };

    let createMountainBikeProtoype = function (proto) {

        var protoObj=Object.create(proto);
        protoObj.gear=1;
        protoObj.setGear = function (val) {
            this.gear = val;
        };
        return protoObj;
    };


    let start = function () {
        let bicyclePrototype = createBicyclePrototype();

        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);

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
    window.onload=start();
})();