var detail = {
    name: 'xyz',
    roll: 45,
    school: 'sbc'
};
var print = function (val) {
    console.log(val.name);
    console.log(val.roll);
    console.log(val.school);
};
print(detail);
var show = function (val) {
    console.log(val.id);
    console.log(val.name);
    console.log(val.sal);
};
var sunil = {
    name: "Sunil",
    id: 1001,
    sal: 15000
};
show(sunil);
var disFull = function (val) {
    console.log(val.firstName, val.lastName);
};
disFull({ firstName: "palash", lastName: "kumar" });
