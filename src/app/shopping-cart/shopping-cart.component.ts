import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Book } from '../book-list/Book';
import { BooksCartService } from '../books-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Book[]>;
  constructor(private cart: BooksCartService) {
   this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  addToCart(book): void {
    this.cart.addToCart(book);
  }


}
