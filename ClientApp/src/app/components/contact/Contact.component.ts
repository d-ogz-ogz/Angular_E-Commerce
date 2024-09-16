import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactInfo } from './Contact';
import { ContactService } from './Contact.service';



@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css'],

})
export class ContactComponent implements OnInit {
  ContactModel?: ContactInfo;
  exampleNo!: string;

  constructor(private contactService: ContactService) {
    this.getContactInfo();


  }

  ngOnInit(): void {



  }
  getContactInfo() {
    this.contactService.getContactInfo().then(a =>this.ContactModel= a as ContactInfo);

  }

  
}



