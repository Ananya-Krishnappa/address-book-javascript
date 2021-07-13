/**
 * To create a
New Address Book
array and add new
Contacts to it
 */
import {
    Contact
} from './contact.js';
var addressBookArr = [];
const addContactToAddressBook = (contact) => {
    addressBookArr.push(contact);
    console.log(addressBookArr);
}
let contact = new Contact("1", "Ananya", "Gowda", "agrahara", "nrpura", "chikmagalur", "9876547643", "122343", "something@something.com");
addContactToAddressBook(contact);