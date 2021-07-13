/**
 * To delete person by name from address book array
 */
import {
    Contact
} from './contact.js';
var addressBookArr = [];

/**
 * Function to add contact to address book array
 * @param {*} contact Function that accepts the contact as input
 * @returns addressBookArr
 */
const addContactToAddressBook = (contact) => {
    var result = addressBookArr.filter(c => c.firstName === contact.firstName);
    if (result.length == 0) {
        addressBookArr.push(contact);
    } else {
        throw 'Contact with the same name already exist in address book'
    }
    return addressBookArr;
}

/**
 * Function to find contact by name
 * @param {*} firstName accepts first name as input
 * @returns result
 */
const findContactByName = (firstName) => {
    var result = addressBookArr.filter(contact => contact.firstName === firstName);
    return result;
}

/**
 *  Function to find contact by city
 * @param {*} city accepts first name as city
 * @returns result
 */
const findContactByCity = (city) => {
    var result = addressBookArr.filter(contact => contact.city === city);
    return result;
}

/**
 * Dunction to delete contact ny name
 * @param {*} firstName accepts first name as input
 * @returns addressBookArr
 */
const deleteContactByName = (firstName) => {
    addressBookArr = addressBookArr.filter(contact => contact.firstName != firstName);
    return addressBookArr;
}

/**
 * Function to sort an array alphabetical order
 */
const sortByName = () => {
    addressBookArr.sort(function (a, b) {
        if (a.firstname < b.firstname) {
            return -1;
        }
        if (a.firstname > b.firstname) {
            return 1;
        }
        return 0;
    })
    return addressBookArr;
}

/**
 * Function to sort city in alphabetical order
 */
const sortByCity = () => {
    addressBookArr.sort(function (a, b) {
        if (a.city < b.city) {
            return -1;
        }
        if (a.city > b.city) {
            return 1;
        }
        return 0;
    })
    return addressBookArr;
}
let contact = new Contact("1", "Ananya", "Gowda", "agrahara", "nrpura", "chikmagalur", "9876547643", "122343", "something@something.com");
let contact1 = new Contact("2", "Aksha", "Nishanth", "shettykoppa", "koppa", "shimoga", "9976547643", "198343", "aksha@something.com");
let contact2 = new Contact("3", "Veena", "Prabath", "simse", "goolu", "moolu", "9906547643", "199343", "anik@something.com");
addContactToAddressBook(contact);
addContactToAddressBook(contact1);
addContactToAddressBook(contact2);
console.log("Sort array in alphabetical order", sortByName());
console.log("Sort city in alphabetical order", sortByCity());
console.log(findContactByName("Ananya"));
deleteContactByName("Aksha");
console.log("Contact in city is", findContactByCity("goolu"));
console.log("Array after delete", addressBookArr);
console.log("Number of contacts in address book", addressBookArr.length);