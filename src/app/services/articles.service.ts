import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Article } from '../classes/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private url = 'http://localhost:3001/api/articles';

  http = inject(HttpClient);

  articles = signal<Article[]>([]);

  constructor() {}

  getArticles() {
    this.http.get<Article[]>(this.url).subscribe((data) => {
      this.articles.set(data);
    });
    return this.articles;
  }

  deleteArticle(article: Article) {
    this.http
      .delete<Article>(`${this.url}/${article._id}`)
      .subscribe((data) => {
        return this.articles.update((articles) =>
          articles.filter((a) => a._id !== article._id)
        );
      });
  }
}
