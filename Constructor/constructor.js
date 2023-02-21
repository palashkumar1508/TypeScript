var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'Jaipur';
        this.email = email;
        this.name = name;
    }
    return User;
}());
var Ankit = new User('ankit.com', 'Ankit');
console.log(Ankit.name); // Ankit
// Ankit.city = " Delhi" This will give an error becuz we are chnging the readonly value
console.log(Ankit.city);
// we can wrte the above code in this way also
var Car = /** @class */ (function () {
    function Car(brand, model, yearOfPurchase) {
        this.brand = brand;
        this.model = model;
    }
    return Car;
}());
var Amaze = new Car('HONDA', 'Amaze', 2023);
console.log(Amaze.brand);
console.log(Amaze.model);
// console.log(Amaze.yearOfPurchase);  We can not access yearofpurchase becuz it is not public if we want to access we have to make it public or we have to pass it in  class and make it like this.property
//GETTER SETTER
var Login = /** @class */ (function () {
    function Login(name, email) {
        this.name = name;
        this.email = email;
        this.pass = 12345;
    }
    Object.defineProperty(Login.prototype, "getPass", {
        get: function () {
            return this.pass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Login.prototype, "setPass", {
        set: function (val) {
            this.pass = val;
        },
        enumerable: true,
        configurable: true
    });
    return Login;
}());
var ankit = new Login('Ankit', 'akki.conmm');
console.log(ankit.name);
ankit.setPass = 49;
console.log(ankit.getPass);
function doSomething(x) {
    if (x === null) {
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
doSomething('Shubham');
//   doSomething();
var Instagram = /** @class */ (function () {
    function Instagram(name, username) {
        this.name = name;
        this.username = username;
    }
    Instagram.prototype.upload = function () {
    };
    return Instagram;
}());
var Facebook = /** @class */ (function () {
    function Facebook(userid, pass) {
        this.userid = userid;
        this.pass = pass;
    }
    return Facebook;
}());
var Fb = /** @class */ (function (_super) {
    __extends(Fb, _super);
    function Fb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fb;
}(Facebook));
var userInsta = new Instagram('palash', 'palash1508');
// let userFb = new Facebook('pk1508', 1999999)  we can not create object from the abstract class.
var userFb = new Fb('pal', 4555);
