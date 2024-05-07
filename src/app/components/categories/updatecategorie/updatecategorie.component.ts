import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../classes/categorie';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-updatecategorie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatecategorie.component.html',
  styleUrl: './updatecategorie.component.css',
})
export class UpdatecategorieComponent {
  private categoriesService = inject(CategoriesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  Id: object;

  updatedCategorie = signal<Categorie>({});

  constructor() {}

  // get the id  from the url
  ngOnInit() {
    // my work
    // this.route.params.subscribe((params) => {
    //   this.Id = params['id'];
    //   // console.log(this.Id);
    // });
    // course
    this.Id = this.route.snapshot.params["id"];
    // my work
    // this.updatedCategorie = this.categoriesService.getCategorie(this.Id);
    // course
    this.categoriesService.findCategory(this.Id).subscribe(data => {
      this.updatedCategorie.set(data)
    })
  }

  updateCategorie(categorie: Categorie) {
    this.categoriesService.updateCategory(categorie);
    this.router.navigate(['/categories']);
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
