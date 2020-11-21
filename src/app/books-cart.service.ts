import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';


/**
 * Maneja la logica del carrito
*/
@Injectable({
  providedIn: 'root'
})
export class BooksCartService {

  private _cartList: Book[] = [];
  cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(book: Book) {
    if(book.quantity != 0){
    let item: Book = this._cartList.find((v1) => v1.name == book.name)
    if(!item){
      this._cartList.push({... book});
    } else { 
      item.quantity += book.quantity; 
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
  }
}
