/**
 * To delete person by name from address book array
 */
import {
    Contact
} from './contact.js';
var addressBookArr = [];

/**
 * Function to add contact to address book array
 * @param {*} contact 
 * @returns addressBookArr
 */
const addContactToAddressBook = (contact) => {
    addressBookArr.push(contact);
    return addressBookArr;
}

/**
 * Function to find contact by name
 * @param {*} firstName 
 * @returns result
 */
const findContactByName = (firstName) => {
    var result = addressBookArr.filter(contact => contact.firstName === firstName);
    return result;
}

/**
 * Dunction to delete contact ny name
 * @param {*} firstName 
 * @returns addressBookArr
 */
const deleteContactByName = (firstName) => {
    addressBookArr = addressBookArr.filter(contact => contact.firstName != firstName);
    return addressBookArr;
}
let contact = new Contact("1", "Ananya", "Gowda", "agrahara", "nrpura", "chikmagalur", "9876547643", "122343", "something@something.com");
let contact1 = new Contact("2", "Aksha", "Nishanth", "shettykoppa", "koppa", "shimoga", "9976547643", "198343", "aksha@something.com");
let contact2 = new Contact("3", "Anik", "Prabath", "simse", "goolu", "moolu", "9906547643", "199343", "anik@something.com");
console.log(addContactToAddressBook(contact));
console.log(addContactToAddressBook(contact1));
console.log(addContactToAddressBook(contact2));
console.log(findContactByName("Ananya"));
deleteContactByName("Aksha");
console.log("Array after delete", addressBookArr);