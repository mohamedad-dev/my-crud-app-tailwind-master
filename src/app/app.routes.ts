import { Routes } from '@angular/router';

import { CategoriesComponent } from './components/categories/categories/categories.component';
import { AddcategorieComponent } from './components/categories/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/categories/updatecategorie/updatecategorie.component';

import { ScategoriesComponent } from './components/scategories/scategories/scategories.component';
import { AddscategorieComponent } from './components/scategories/addscategorie/addscategorie.component';
import { UpdatescategorieComponent } from './components/scategories/updatescategorie/updatescategorie.component';

import { ArticlesComponent } from './components/articles/articles/articles.component';
import { AddarticleComponent } from './components/articles/addarticle/addarticle.component';
import { UpdatearticleComponent } from './components/articles/updatearticle/updatearticle.component';

export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'addcategorie', component: AddcategorieComponent },
  { path: 'updatecategorie/:id', component: UpdatecategorieComponent },

  { path: 'scategories', component: ScategoriesComponent },
  { path: 'addscategorie', component: AddscategorieComponent },
  { path: 'updatescategorie/:id', component: UpdatescategorieComponent },

  { path: 'articles', component: ArticlesComponent },
  { path: 'addarticle', component: AddarticleComponent },
  { path: 'updatearticle/:id', component: UpdatearticleComponent },
];
