// UC1 and UC2: Create a Address Book and Contact, and validate details

// Contact.js
class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      if (!this.validateName(firstName) || !this.validateName(lastName)) {
          throw new Error("First and Last Name should start with a capital letter and have at least 3 characters.");
      }
      if (!this.validateAddress(address) || !this.validateAddress(city) || !this.validateAddress(state)) {
          throw new Error("Address, City, and State should have at least 4 characters.");
      }
      if (!this.validateZip(zip)) {
          throw new Error("Invalid Zip Code! It should be a 6-digit number.");
      }
      if (!this.validatePhone(phoneNumber)) {
          throw new Error("Invalid Phone Number! It should be a 10-digit number.");
      }
      if (!this.validateEmail(email)) {
          throw new Error("Invalid Email Format!");
      }

      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
  }

  validateName(name) {
      return /^[A-Z][a-zA-Z]{2,}$/.test(name);
  }

  validateAddress(value) {
      return /^[a-zA-Z0-9\s]{4,}$/.test(value);
  }

  validateZip(zip) {
      return /^[1-9][0-9]{5}$/.test(zip);
  }

  validatePhone(phone) {
      return /^[6-9][0-9]{9}$/.test(phone);
  }

  validateEmail(email) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
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

// Example Usage with Valid Data
try {
  var myAddressBook = new AddressBook();
  var contact1 = new Contact("Raj", "Sharma", "123 Street", "Bhopal", "MP", "123456", "9876543210", "rajsharma@example.com");

  myAddressBook.addContact(contact1);
  myAddressBook.displayContacts();
} catch (error) {
  console.error("Error:", error.message);
}

//Example Usage with Invalid Data 
try {
  var contact2 = new Contact("ra", "ua", "12 St", "NY", "CA", "12345", "98765432", "invalidemail.com");
  myAddressBook.addContact(contact2);
} catch (error) {
  console.error("Error:", error.message);
}


// UC3: Manage Multiple Address Books
class AddressBookManager {
  constructor() {
      this.addressBooks = [];
  }

  // Create a new Address Book
  createAddressBook(name) {
      var newBook = new AddressBook(name);
      this.addressBooks.push(newBook);
      console.log("New Address Book '" + name + "' created.");
  }

  // Get an Address Book by name
  getAddressBook(name) {
      return this.addressBooks.find(book => book.name === name);
  }

  // Display all existing Address Books
  displayAllAddressBooks() {
      console.log("Existing Address Books:");
      for (var i = 0; i < this.addressBooks.length; i++) {
          console.log((i + 1) + ". " + this.addressBooks[i].name);
      }
  }
}


//UC4: Find and Edit a Contact in Address Book
class AddressBookWithEdit extends AddressBook {
  constructor(name) {
      super(name);
  }

  // Find Contact by First & Last Name
  findContact(firstName, lastName) {
      return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
  }

  // Edit an existing contact
  editContact(firstName, lastName, newDetails) {
      var contact = this.findContact(firstName, lastName);
      if (contact) {
          for (var key in newDetails) {
              if (contact.hasOwnProperty(key)) {
                  contact[key] = newDetails[key];
              }
          }
          console.log("Contact updated successfully!");
      } else {
          console.log("Contact not found!");
      }
  }
}