import { Component, OnInit } from '@angular/core';
import { BooksCartService } from '../books-cart.service';
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
    quantity: 0,
  },
  {
    name : "Matilde debe morir",
    gender: "Contemporaneo",
    price: 221,
    stock: 2,
    clearence: true,
    quantity: 0,
  },
  {
    name : "Cazadores de Sombras",
    gender: "Contemporaneo",
    price: 20,
    stock: 0,
    clearence: false,
    quantity: 0,
  }
]
  constructor(private cart: BooksCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(book): void {
    this.cart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }

}
