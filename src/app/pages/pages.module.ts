import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { CoreModule } from '@app/+core';
import { UiModule } from '@app/+ui';

import { CommonsModule } from './+commons/commons.module';

import { PagesRoutingModule } from './pages-routing.module';

import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
    declarations: [
        LoginComponent,
        ArticlesComponent,
        ArticleComponent
    ],
    imports: [
        CommonModule,
        ToasterModule.forChild(),
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        UiModule,
        CoreModule,
        CommonsModule,
        PagesRoutingModule
    ],
    exports: [
        ToasterModule
    ]
})
export class PagesModule { }
