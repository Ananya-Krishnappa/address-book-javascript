/**
 * To find person by name from address book array
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
let contact = new Contact("1", "Ananya", "Gowda", "agrahara", "nrpura", "chikmagalur", "9876547643", "122343", "something@something.com");
let contact1 = new Contact("2", "Aksha", "Nishanth", "shettykoppa", "koppa", "shimoga", "9976547643", "198343", "aksha@something.com");
console.log(addContactToAddressBook(contact));
console.log(addContactToAddressBook(contact1));
console.log(findContactByName("Ananya"));