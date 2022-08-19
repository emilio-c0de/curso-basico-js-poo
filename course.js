export default class Course{
    #name; //Declaración propiedad privada 

    constructor({name, classes=[], isFree=false, lang='spanish'}){
        this.#name   = name;
        this.classes = classes;
        this.isFree  = isFree;
        this.lang    = lang;
    }

    get getName(){
        return this.#name
    }

    set setName(newName){
        this.#name = newName
    }
}