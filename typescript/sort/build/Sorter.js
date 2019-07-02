"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    //bubble sort
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var z = 0; z < length - i - 1; z++) {
                if (this.collection.compare(z, z + 1)) {
                    this.collection.swap(z, z + 1);
                }
            }
        }
        console.log("After sort:", this.collection);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
