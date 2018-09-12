import addToDom from './add_to_dom';

class Person {
    constructor(name) {
        this.name = name;
    }

    talk(msg){
        addToDom('h1', `${this.name} says: ${msg}`);
    }

    greet() {
        this.talk(`Hi my name is ${this.name}`);
    }
    
}

class SuperPerson extends Person {
    constructor (name, superPower) {
        super(name); //super is a keyword, this calls the parent's constructor
        //pass in whatever parent is expecting
        //name above is called the props
        this.superPower = superPower;
    }
    //do not have to have a constructor
    //unless u have to pass in something and need to do something
    
    saySuperPower() {
        this.talk(`My super power is ${this.superPower}`);
    }
}

export default SuperPerson;