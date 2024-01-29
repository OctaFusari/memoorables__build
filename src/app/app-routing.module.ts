import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorieComponent } from './components/storie/storie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'storie', component: StorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
