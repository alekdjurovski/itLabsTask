import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    PaginationComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
