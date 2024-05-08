import { Component, inject, signal } from '@angular/core';
import { Scategorie } from '../../../classes/scategorie';
import { Categorie } from '../../../classes/categorie';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ScategoriesService } from '../../../services/scategories.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-updatescategorie',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './updatescategorie.component.html',
  styleUrl: './updatescategorie.component.css'
})
export class UpdatescategorieComponent {
  updatedSousCategorie = signal<Scategorie>({})
  categories = signal<Categorie[]>([])

  route = inject(ActivatedRoute)
  router = inject(Router)
  scategoriesService = inject(ScategoriesService)
  categoriesService = inject(CategoriesService)

  scategorieId: object;

  ngOnInit() {
    this.categories = this.categoriesService.getCategories()
    this.scategorieId = this.route.snapshot.params["id"]
    this.scategoriesService.getScategorie(this.scategorieId).subscribe(data => this.updatedSousCategorie.set(data))
  }

  updateScategorie() {
    this.scategoriesService.updateScategorie(this.updatedSousCategorie())
    this.router.navigate(["/scategories"])
  }
}
