import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/categories-parent/products/products.component';
import { CategoriesComponent } from './components/categories-parent/categories/categories.component';
import { CategoriesParentComponent } from './components/categories-parent/categories-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: CategoriesParentComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
