import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Scategorie } from '../classes/scategorie';

@Injectable({
  providedIn: 'root',
})
export class ScategoriesService {
  private url = 'http://localhost:3001/api/scategories';

  http = inject(HttpClient);

  scategories = signal<Scategorie[]>([]);

  constructor() {}

  getScategories() {
    this.http.get<Scategorie[]>(this.url).subscribe((data) => {
      this.scategories.set(data);
    });
    return this.scategories;
  }

  deleteScategorie(scategorie: Scategorie) {
    this.http.delete(`${this.url}/${scategorie._id}`).subscribe((data) => {
      return this.scategories.update((scategories) =>
        scategories.filter((sc) => sc._id !== scategorie._id)
      );
    });
  }
}
