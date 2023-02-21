interface IsPerson{
    name :string ;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

let akki:IsPerson = {
    name : 'akki',
    age :45,
    speak(a) {
        return a
    },
    spend(a) {
        return a
    }
}

console.log(akki.speak("sdjhfvbjavh"));
console.log(akki.spend(4500));
 
let nay :IsPerson;
nay ={
    name: 'nayan',
age:45,
speak(a){},
spend(b){
    return b
}
}

nay.name= 'nayan';
nay.age=45
nay.speak('engllish')
nay.spend(44)
console.log(nay.name);
