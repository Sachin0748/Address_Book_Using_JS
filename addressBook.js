// Contact.js
class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
  }

  displayContact() {
      return this.firstName + " " + this.lastName + ", " + 
             this.address + ", " + this.city + ", " + 
             this.state + " - " + this.zip + ", Phone: " + 
             this.phoneNumber + ", Email: " + this.email;
  }
}

// AddressBook.js
class AddressBook {
  constructor() {
      this.contacts = [];
  }

  addContact(contact) {
      this.contacts.push(contact);
      console.log("Contact added successfully!");
  }

  displayContacts() {
      for (var i = 0; i < this.contacts.length; i++) {
          console.log((i + 1) + ". " + this.contacts[i].displayContact());
      }
  }
}

// Example Usage
var myAddressBook = new AddressBook();
var contact1 = new Contact("Raj", "Sharma", "Press Colony", "Bhopal", "MP", "462022", "8878285024", "rajsharma@example.com");

myAddressBook.addContact(contact1);
myAddressBook.displayContacts();