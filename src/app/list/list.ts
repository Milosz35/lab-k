import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PersonLs} from '../person-ls';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List implements OnInit {
  people!: Person[];

  constructor(
    private personLsService: PersonLs,
  ) {
  }

  ngOnInit(): void {
    this.people = this.personLsService.getAll();
  }


  delete(index: number): void {
    if (confirm("Are you sure?")) {
      this.personLsService.deletePerson(index);
      this.people = this.personLsService.getAll();
    }
  }
}
