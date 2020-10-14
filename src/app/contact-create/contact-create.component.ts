import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent {
  constructor(private contactsService: ContactsService, private router: Router) {}

  createContact(): void {
    this.router.navigate(['/contacts']);
  }
}