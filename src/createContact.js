/**
 * Create a Address Book
Contact with first and last names,
address, city, state, zip, phone number
and email
 */
class Contact {
    id;
    firstName;
    lastName;
    address;
    city;
    state;
    phoneNumber;
    zip;
    email;

    constructor(...params) {
        this.id = params[0];
        this.firstName = params[1];
        this.lastName = params[2];
        this.address = params[3];
        this.city = params[4];
        this.state = params[5];
        this.phoneNumber = params[6];
        this.zip = params[7];
        this.email = params[8];
    }
    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }
    get firstName() {
        return this.firstName;
    }
    set firstName(firstName) {
        this.firstName = firstName;
    }
    get lastName() {
        return this.lastName;
    }
    set lastName(lastName) {
        this.lastName = lastName;
    }
    get address() {
        return this.address;
    }
    set address(address) {
        this.address = address;
    }
    get city() {
        return this.city;
    }
    set city(city) {
        this.city = city;
    }
    get state() {
        return this.state;
    }
    set state(state) {
        this.state = state;
    }
    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    get zip() {
        return this.zip;
    }
    set zip(zip) {
        this.zip = zip;
    }
    get email() {
        return this.email;
    }
    set email(email) {
        this.email = email;
    }
    toString() {
        return "id=" + this.id + ",firstName=" + this.firstName + ",lastName=" + this.lastName + ",address=" + this.address + ",city=" + this.city + ",state=" + this.state + ",phoneNumber=" + this.phoneNumber + ",zip=" + this.zip + ",email=" + this.email;
    }
}
let contact = new Contact("1", "ananya", "gowda", "agrahara", "nrpura", "chikmagalur", "987643", "123", "ananya@gmail.com");
console.log(contact.toString());