import { Component, inject, signal } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Article } from '../../../classes/article';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Scategorie } from '../../../classes/scategorie';
import { ScategoriesService } from '../../../services/scategories.service';

@Component({
  selector: 'app-addarticle',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './addarticle.component.html',
  styleUrl: './addarticle.component.css'
})
export class AddarticleComponent {
  newArticle = signal<Article>({})
  scategories = signal<Scategorie[]>([])

  private articlesService = inject(ArticlesService)
  private scategoriesService = inject(ScategoriesService)
  private router = inject(Router)

  ngOnInit() {
    this.loadScategories()
  }
  loadScategories() {
    this.scategories = this.scategoriesService.getScategories()
  }

  addArticle() {
    this.articlesService.createArticle(this.newArticle())
    this.router.navigate(["/articles"])
  }
}
