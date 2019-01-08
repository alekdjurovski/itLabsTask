import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './services/table.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
