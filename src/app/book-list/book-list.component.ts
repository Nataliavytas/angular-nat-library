import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{
    name : "Silverville",
    gender: "Contemporaneo",
    price: 321,
    stock: 4,
    clearence: false,
  },
  {
    name : "Matilde debe morir",
    gender: "Contemporaneo",
    price: 221,
    stock: 2,
    clearence: true,
  },
  {
    name : "Cazadores de Sombras",
    gender: "Contemporaneo",
    price: 20,
    stock: 0,
    clearence: false,
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
