import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Scategorie } from '../../../classes/scategorie';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../../../classes/categorie';
import { CategoriesService } from '../../../services/categories.service';
import { ScategoriesService } from '../../../services/scategories.service';

@Component({
  selector: 'app-addscategorie',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './addscategorie.component.html',
  styleUrl: './addscategorie.component.css',
})
export class AddscategorieComponent {
  newSousCategorie = signal<Scategorie>({});
  categories = signal<Categorie[]>([]);

  private  categoriesService = inject(CategoriesService)
  private  scategoriesService = inject(ScategoriesService)
  private router = inject(Router)
  
  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  addScategorie() {
    this.scategoriesService.createScategorie(this.newSousCategorie())
    this.router.navigate(["/scategories"])
  }
}
