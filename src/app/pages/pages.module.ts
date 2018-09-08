import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { CoreModule } from '@app/core';
import { CommonsModule } from '@app/commons';
import { PagesRoutingModule } from './pages-routing.module';

import { LoginComponent } from './login';
import { ArticlesComponent } from './articles';
import { ArticleComponent } from './article';

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
        CoreModule,
        CommonsModule,
        PagesRoutingModule
    ],
    exports: [ToasterModule]
})
export class PagesModule { }
