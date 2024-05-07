import { Component, inject, signal } from '@angular/core';
import { Article } from '../../../classes/article';
import { ArticlesService } from '../../../services/articles.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  private articlesService = inject(ArticlesService);

  articles = signal<Article[]>([]);

  ngOnInit() {
    this.loadArticles();
  }
  loadArticles() {
    this.articles = this.articlesService.getArticles();
  }

  deleteArticle(article: Article): void {
    this.articlesService.deleteArticle(article);
  }
}
