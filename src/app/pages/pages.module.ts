import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { CoreModule } from '@app/+core';
import { UiModule } from '@app/+ui';

import { CommonsModule } from './+commons/commons.module';

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
