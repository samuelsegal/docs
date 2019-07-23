"use strict";
exports.__esModule = true;
var Direction;
(function (Direction) {
    Direction["ASC"] = "ASC";
    Direction["DESC"] = "DESC";
})(Direction = exports.Direction || (exports.Direction = {}));
var Comparator = /** @class */ (function () {
    function Comparator() {
    }
    Comparator.gtrThen = function (leftVal, rightVal) {
        return leftVal > rightVal;
    };
    Comparator.lessThen = function (leftVal, rightVal) {
        return leftVal < rightVal;
    };
    return Comparator;
}());
exports.Comparator = Comparator;
