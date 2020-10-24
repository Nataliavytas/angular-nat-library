import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book = {
    "name" : "Silverville",
    "gender": "Contemporaneo",
    "price": 21,
    "stock": 4
  }
  constructor() { }

  ngOnInit(): void {
  }

}
