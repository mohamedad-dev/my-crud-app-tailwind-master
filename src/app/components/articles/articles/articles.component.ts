import { Component, inject, signal } from '@angular/core';
import { Article } from '../../../classes/article';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  public articlesService = inject(ArticlesService);

  articles = signal<Article[]>([]);

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
  }

  deleteArticle(article: Article): void {
    this.articlesService.deleteArticle(article);
  }
}
