import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '@core/guards';

import { LoginComponent } from './login';
import { ArticlesComponent } from './articles';
import { ArticleComponent } from './article';

const routes: Routes = [
  { path: 'articles', canActivate: [AuthGuard], component: ArticlesComponent, data: { title: 'Artigos' } },
  { path: 'article/:id', canActivate: [AuthGuard], component: ArticleComponent, data: { title: 'Editar artigo' } },
  { path: 'article', canActivate: [AuthGuard], component: ArticleComponent, data: { title: 'Novo artigo' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: '', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
