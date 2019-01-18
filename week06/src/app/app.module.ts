import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/categories-parent/products/products.component';
import { CategoriesComponent } from './components/categories-parent/categories/categories.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriesParentComponent } from './components/categories-parent/categories-parent.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CategoriesComponent,
    CategoriesParentComponent,
    SidebarComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CategoriesComponent, PopUpComponent]
})
export class AppModule { }
