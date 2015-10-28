// http://channel9.msdn.com/events/Build/2015/3-644
var Person = (function () {
    function Person(name) {
        this.name = name;
        this._employer = 'self';
    }
    Object.defineProperty(Person.prototype, "employer", {
        get: function () {
            return this._employer;
        },
        set: function (value) {
            this._employer = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
})();
function sortByName(a) {
    var result = a.slice(0);
    return result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
}
var pa = 'andrea,vito,lorenzo'.split(',').map(function (x) { return new Person(x); });
pa[0].employer = 'A';
var sorted = sortByName(pa);
sorted.forEach(function (x) {
    console.log(x.name + " works at " + x.employer);
});
//# sourceMappingURL=index.js.map