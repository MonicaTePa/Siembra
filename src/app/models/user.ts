export class User {
    _id?: any;
    name: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    cel: string;
    address: string;

    constructor(nameUser: string, lastNameUser: string, ageUser: number, emailUser: string, passUser: string, celUser: string, addressUser: string) {
        this.name = nameUser;
        this.lastName = lastNameUser;
        this.age = ageUser;
        this.email = emailUser;
        this.password = passUser;
        this.cel = celUser;
        this.address = addressUser;
    }
}
