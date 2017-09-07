import { Injectable } from '@angular/core';
import { Contact } from './contact'

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    { id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
    { id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', state: 'CA', country: 'USA' },
  ];
  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContacts(contact: Contact) {
    this.contacts.push(contact);
    return this.contacts;
  }

  deleteContact(contact: Contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts.slice(index, 1);
    return this.contacts;
  }

  updateContact(contact: Contact) {
    let oldContact = this.contacts.find(c => c.id === contact.id);
    let index = this.contacts.indexOf(oldContact);
    this.contacts[index] = contact;
    return this.contacts;
  }
}
