let user = {
    name: [],
    get length(){
        return this.name.map((elem)=>elem = [elem,elem.length]);
    },
    set length(value){
        return this.name = value.split(', ');
    }
}
user.length = "Hovhannes, Sona";
console.log(user.length);