

var First = /** @class */ (function () {
    function First() {
    }
    First.prototype.great = function () {
        console.log("Hi there");
    };
    return First;
}());
var obj = new First();
obj.great();
