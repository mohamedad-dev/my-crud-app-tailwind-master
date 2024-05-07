import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../classes/categorie';
import { CategoriesService } from '../../../services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  public categoriesService = inject(CategoriesService);

  categories = signal<Categorie[]>([]);

  ngOnInit(): void {
    this.loadCategories();
  }
  loadCategories() {
    this.categories = this.categoriesService.getCategories();
  }

  deleteCategory(categorie: Categorie): void {
    this.categoriesService.deleteCategory(categorie);
  }
}
