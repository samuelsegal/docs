/**
 * Fibonacci - Sequence of whole numbers starting at 1,1 and is followed by the
 * addition of 2 previous numbers. 1,1,2,3,5,8,13.
 * Write a function called fib which accepts a number and returns the nth
 * number in Fibonacci sequence.
 * fib(4) // 3
 * fib(10) //55
 * Time Complexity: O(n)
 */
(function () {
    /**
     * First attempt using helper recursive. Ironically at the end of this
     * class this approach turns out to be simliar to the tabulated solution.
     * Which of course turns out to be the best in performance. Only real
     * difference is this is the tabulated version also using recursion. Which
     * basically means my natural solution was the best and nice enough to
     * include the point of discussion [recursion]. wooohahhaha, jk. Though it
     * it is indeed the best in performance and nicest in compromise.
     * Ok, ill stop, but really I'm just sayin.
     * @param num
     */
    var fib = function (num) {
        if (num <= 1) {
            return 1;
        }
        var counter = 1;
        var fibs = [1];
        var thumbsUp = '👍';
        var thumbArr = [];
        var helper = function (seq) {
            thumbArr.push(thumbsUp);
            console.log("seq: " + seq + " " + thumbArr.join());
            fibs[counter] = seq;
            if (++counter === num) {
                return seq;
            }
            return helper(fibs[counter - 2] + seq);
        };
        return helper(1);
    };
    console.log(fib(10));
    /**
     * tabulated answer
     */
    var fibTabulated = function (num) {
        if (num <= 2) {
            return 1;
        }
        var fibNums = [0, 1, 1];
        for (var i = 3; i <= num; i++) {
            fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
        }
        return fibNums[num];
    };
    console.log(fibTabulated(10));
    /**
     * Less code - pure recursion, much worse on performance.
     * None the less, a good to demonstrate excursion. Displays the insanity
     * findining sanity when ther is nothing else to find.
     * Time complexity:  O(2 to the power of n) or techincally
     * O(1.6 to the power of n or something like that)
     * either way very bad.
     * @param n
     */
    var c = 0;
    var face = '🤔';
    var faceArr = [];
    var fibPureRecursive = function (n) {
        faceArr.push(face);
        console.log(c++ + " " + faceArr.join(''));
        if (n <= 2) {
            return 1;
        }
        return fibPureRecursive(n - 1) + fibPureRecursive(n - 2);
    };
    console.log(fibPureRecursive(10));
    faceArr = [];
    c = 0;
    /**
     * memoized version of the recursive version from above.
     */
    var fibMemoizedRecursive = function (n, memo) {
        if (memo === void 0) { memo = []; }
        faceArr.push(face);
        console.log(c++ + " " + faceArr.join(''));
        if (memo[n] !== undefined) {
            return memo[n];
        }
        if (n <= 2) {
            return 1;
        }
        var res = fibMemoizedRecursive(n - 1, memo) + fibMemoizedRecursive(n - 2, memo);
        memo[n] = res;
        return res;
    };
    console.log(fibMemoizedRecursive(10));
})();
