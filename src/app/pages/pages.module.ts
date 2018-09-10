import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { CoreModule } from '@core/core.module';
import { CommonsModule } from './+commons/commons.module';
import { UiModule } from '@ui/ui.module';
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
        ReactiveFormsModule,
        ToasterModule.forChild(),
        //
        UiModule,
        CoreModule,
        CommonsModule,
        PagesRoutingModule
    ],
    exports: [ToasterModule]
})
export class PagesModule { }
