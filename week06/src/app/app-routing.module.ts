import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/categories-parent/header/header.component';
import { ProductsComponent } from './components/categories-parent/products/products.component';
import { CategoriesComponent } from './components/categories-parent/categories/categories.component';

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
