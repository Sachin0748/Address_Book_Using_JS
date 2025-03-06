// UC1: Create Contact Class with Validations
class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      if (!this.validateName(firstName) || !this.validateName(lastName)) {
          throw new Error("First and Last Name should start with a capital letter and have at least 3 characters.");
      }
      if (!this.validateAddress(address) || !this.validateAddress(city) || !this.validateAddress(state)) {
          throw new Error("Address, City, and State should have at least 4 characters.");
      }
      if (!this.validateZip(zip)) {
          throw new Error("Invalid Zip Code. It should be a 6-digit number.");
      }
      if (!this.validatePhone(phoneNumber)) {
          throw new Error("Invalid Phone Number. It should be a 10-digit number.");
      }
      if (!this.validateEmail(email)) {
          throw new Error("Invalid Email Format.");
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
      return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
  }
}

// UC2: Create AddressBook Class to Store Multiple Contacts
class AddressBook {
  constructor() {
      this.contacts = [];
  }

  // UC3: Add Multiple Contacts
  addContact(contact) {
      this.contacts.push(contact);
  }

  // UC4: Find and Edit a Contact by Name
  findContact(firstName, lastName) {
      return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
  }

  editContact(firstName, lastName, newDetails) {
      let contact = this.findContact(firstName, lastName);
      if (contact) {
          Object.keys(newDetails).forEach(key => {
              if (contact.hasOwnProperty(key)) {
                  contact[key] = newDetails[key];
              }
          });
      }
  }

  // UC5: Delete a Contact by Name
  deleteContact(firstName, lastName) {
      let index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
      if (index !== -1) {
          this.contacts.splice(index, 1);
      }
  }

  // UC6: Count Contacts in the Address Book
  countContacts() {
      return this.contacts.length;
  }

  // UC7: Prevent Duplicate Entries Based on First & Last Name
  addContactWithDuplicateCheck(contact) {
      const isDuplicate = this.contacts.some(
          (c) => c.firstName === contact.firstName && c.lastName === contact.lastName
      );

      if (!isDuplicate) {
          this.contacts.push(contact);
      }
  }

  // UC8: Search Person by City or State
  searchPersonByCityOrState(name, location) {
      return this.contacts.filter(contact =>
          (contact.firstName === name || contact.lastName === name) &&
          (contact.city === location || contact.state === location)
      );
  }

  // UC9: View Persons by City or State
  viewPersonsByCityOrState(location) {
      return this.contacts
          .filter(contact => contact.city === location || contact.state === location)
          .map(contact => contact.displayContact());
  }

  displayContacts() {
      this.contacts.forEach((contact, index) => {
          console.log(`${index + 1}. ${contact.displayContact()}`);
      });
  }
}