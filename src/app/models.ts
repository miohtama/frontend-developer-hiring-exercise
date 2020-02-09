
export class User {

    // User id, available after the user construction has been completed
    id?: number;

    // Email
    email: string;

    // Phone number in an international format, normalised with no spaces or other characters, starting with +
    phoneNumber: string;

    password: string;

    // User real name
    name: string;

    // Password field is never stored on the client side

    constructor(email: string, name: string, pw: string, phone: string) {
        this.email = email;
        this.name = name;
        this.phoneNumber = phone;
        this.password = pw;
    }
}