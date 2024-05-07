import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private url = 'http://localhost:3001/api/categories';

  http = inject(HttpClient);

  categories = signal<Categorie[]>([]);

  getCategories() {
    this.http.get<Categorie[]>(this.url).subscribe((data) => {
      this.categories.set(data);
    });
    return this.categories;
  }

  deleteCategory(categorie: Categorie) {
    this.http
      .delete<Categorie>(`${this.url}/${categorie._id}`)
      .subscribe((data) => {
        this.categories.update((categories) =>
          categories.filter((c) => c._id !== categorie._id)
        );
      });
  }

  addCategory(categorie: Categorie) {
    this.http.post<Categorie>(this.url, categorie).subscribe((data) => {
      // this.categories.set([data, ...this.categories()]);
      this.categories.update((categories) => [data, ...categories]);
    });
  }

  categorie = signal<Categorie>({});

  findCategoryById(id: object) {
    return this.http.get<Categorie>(`${this.url}/${id}`);
  }

  getCategorie(id: object) {
    this.findCategoryById(id).subscribe((data) => {
      this.categorie.set(data);
    });
    return this.categorie;
  }
  // getCategorie(id: object) {
  //   this.http.get<Categorie>(`${this.url}/${id}`).subscribe((data) => {
  //     this.categorie.set(data);
  //   });
  //   return this.categorie;
  // }

  updateCategory(categorie: Categorie) {
    this.http
      .put<Categorie>(`${this.url}/${categorie._id}`, categorie)
      .subscribe((data) => {
        // console.log(data);
        this.categories.update((categories) => {
          return categories.map((cat) =>
            cat._id === categorie._id ? categorie : cat
          );
        });
      });
  }

  // fil couur
  findCategory(id: object | undefined) {
    return this.http.get(`${this.url}/${id}`)
  }
}
