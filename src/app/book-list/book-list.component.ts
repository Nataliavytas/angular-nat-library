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
    image: "https://www.nocturnaediciones.com/imagenes/biblioteca/147_alta.jpg",
    name : "Silverville",
    gender: "Contemporaneo",
    price: 900,
    stock: 4,
    clearence: false,
    quantity: 0,
  },
  {
    image:"https://images.cdn2.buscalibre.com/fit-in/360x360/47/68/47685b3b53731e51cb4e451e38fec6df.jpg",
    name : "Matilde debe morir",
    gender: "Contemporaneo",
    price: 700,
    stock: 2,
    clearence: true,
    quantity: 0,
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81Zlr4DW2BL._AC_UL600_SR432,600_.jpg",
    name : "Cazadores de Sombras",
    gender: "Fantasia",
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
