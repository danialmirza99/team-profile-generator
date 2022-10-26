class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return Employee;
    }
}

//const Employee1 = new Employee("Danial", 123, "danialmirza99@gmail.com");

module.exports = Employee;