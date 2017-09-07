import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contactservice/contact.service';
import { Contact } from '../contactservice/contact';

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {

  @Input() contact: Contact;
  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  createContact(contact) {
    this.createHandler(contact);
  }

  updateContact(contact) {
    this.updateHandler(contact);
  }

  deleteContact(contact) {
    this.deleteHandler(contact);
  }

}
