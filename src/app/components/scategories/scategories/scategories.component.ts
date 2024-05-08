import { Component, inject, signal } from '@angular/core';
import { Scategorie } from '../../../classes/scategorie';
import { ScategoriesService } from '../../../services/scategories.service';
import { CategoriesService } from '../../../services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scategories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './scategories.component.html',
  styleUrl: './scategories.component.css',
})
export class ScategoriesComponent {
  public serviceScategories = inject(ScategoriesService);
  public serviceCategories = inject(CategoriesService);

  scategories = signal<Scategorie[]>([]);

  ngOnInit(): void {
    this.scategories = this.serviceScategories.getScategories();
  }

  deleteScategorie(scategorie: Scategorie): void {
    this.serviceScategories.deleteScategorie(scategorie);
  }

  // getCategorieName(id: object | undefined) {
  //   let categorieName: string | undefined = '';
  //   this.serviceCategories
  //     .findCategoryById(id)
  //     .subscribe((data) => (categorieName = data.nomcategorie));
  //   return categorieName;
  // }
}
