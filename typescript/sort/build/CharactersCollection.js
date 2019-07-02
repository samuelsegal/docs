"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        console.log(leftIndex);
        console.log(rightIndex);
        console.log(this.data);
        console.log(this.data[leftIndex]);
        console.log(this.data[rightIndex]);
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        var tmp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = tmp;
        this.data = chars.join('');
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
