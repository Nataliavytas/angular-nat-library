import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryBooksComponent } from './library-books/library-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books', component: LibraryBooksComponent 
  },
  {
    path: 'about', component: LibraryAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
