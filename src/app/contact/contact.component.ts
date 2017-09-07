import { Component, OnInit } from '@angular/core';
import { ContactService } from './contactservice/contact.service';
import { Contact } from './contactservice/contact';
import { AuthenticateService } from '../login/loginservice/authenticate.service';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [AuthenticateService, ContactService]
})
export class ContactComponent implements OnInit {

  selectedContact: Contact;

  isAdmin: boolean;
  contactList: Contact[];
  constructor(private contactService: ContactService, private authService: AuthenticateService) { }

  ngOnInit() {
    this.contactList = this.contactService.getContacts();
    let username = this.authService.getLoginUser();
    if (username === 'admin') {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact
  }

  deleteContact(contact) {

    this.contactList = this.contactService.deleteContact(contact);
     return this.contactList;
  }

  updateContact(contact) {

    this.contactList = this.contactService.updateContact(contact);
    return this.contactList;
  }

  addContact(contact) {
    this.contactList = this.contactService.addContacts(contact);
    return this.contactList;
  }

  createNewContact() {
    let contact: Contact = { id: 0, name: '', email: '', phone: '', state: '', country: '' };
    this.selectContact(contact);

  }
  

}
