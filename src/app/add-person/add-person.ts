import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonLs } from '../person-ls';

@Component({
  selector: 'app-add-person',
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
})
export class AddPerson {
  person: Person = {
    address: {}
  };

  constructor(
    private personLsService: PersonLs,
    private router: Router
  ) {}

  save(): void {
    this.personLsService.addPerson(this.person);
    this.router.navigate(['/list']);
  }
}
