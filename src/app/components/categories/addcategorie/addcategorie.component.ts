import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../classes/categorie';
import { CategoriesService } from '../../../services/categories.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-addcategorie',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './addcategorie.component.html',
  styleUrl: './addcategorie.component.css',
})
export class AddcategorieComponent {
  newCategorie = signal<Categorie>({});

  // tejem thotha fil constructor wala hna bel inject
  private categoriesService = inject(CategoriesService);
  private router = inject(Router);

  constructor() {}

  addCategory() {
    if (
      !this.newCategorie().nomcategorie ||
      !this.newCategorie().imagecategorie
    ) {
      alert('Name and/or image is missing');
      return;
    }
    this.categoriesService.addCategory(this.newCategorie());
    this.router.navigate(['/categories']);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
