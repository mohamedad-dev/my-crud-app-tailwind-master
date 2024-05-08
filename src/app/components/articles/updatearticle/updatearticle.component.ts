import { Component, inject, signal } from '@angular/core';
import { Article } from '../../../classes/article';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScategoriesService } from '../../../services/scategories.service';
import { Scategorie } from '../../../classes/scategorie';

@Component({
  selector: 'app-updatearticle',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './updatearticle.component.html',
  styleUrl: './updatearticle.component.css'
})
export class UpdatearticleComponent {
  updatedArticle = signal<Article>({})
  scategories = signal<Scategorie[]>([])

  private articleService = inject(ArticlesService)
  private scategorieService = inject(ScategoriesService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  private articleId: object ;

  ngOnInit() {
    this.articleId = this.route.snapshot.params["id"];
    this.articleService.getArticle(this.articleId).subscribe(data => this.updatedArticle.set(data))
    this.scategories = this.scategorieService.getScategories()
  }

  updateArticle() {
    this.articleService.updateArticle(this.updatedArticle())
    this.router.navigate(["/articles"])
  }
}
