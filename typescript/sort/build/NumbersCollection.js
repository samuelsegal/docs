"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var tmp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = tmp;
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        //get acts accessor however users of NumbersCollection can simply call length rather than  getLength()
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
