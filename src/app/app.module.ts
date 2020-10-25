import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryBooksComponent } from './library-books/library-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ShoppingCartComponent,
    LibraryAboutComponent,
    LibraryBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
