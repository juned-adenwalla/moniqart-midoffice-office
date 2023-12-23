import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    SearchComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AngularEditorModule
  ],
  exports: [
    SearchComponent,
    FormComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
