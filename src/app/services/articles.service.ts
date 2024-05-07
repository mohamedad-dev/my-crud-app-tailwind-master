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

  // delete
  deleteArticle(article: Article) {
    this.http
      .delete(`${this.url}/${article._id}`)
      .subscribe((data) => {
        return this.articles.update((articles) =>
          articles.filter((a) => a._id !== article._id)
        );
      });
  }

  // create
  createArticle(article: Article) {
    // <Article> t3oud 3ala data
    this.http.post<Article>(this.url, article).subscribe(data => {
      this.articles.set([data, ...this.articles()])
    })
  }

  // update
  updateArticle(article: Article) {
    this.http.put(`${this.url}/${article._id}`, article).subscribe(data => {
      this.articles.update((articles) => {
        return articles.map((art) =>
          art._id === article._id ? article : art
        );
      });
    })
  }

  // get a specific article findArticle
  getArticle(id: object) {
    return this.http.get(`${this.url}/${id}`)
  }

  
}
