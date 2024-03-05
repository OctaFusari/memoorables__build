import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorieComponent } from './components/storie/storie.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StorieComponent, 
        HomeComponent, 
        ChiSiamoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: "", component: ChiSiamoComponent },
            { path: "home", component: HomeComponent },
            {path:"header", component: HeaderComponent},
            {path:"footer", component: FooterComponent},
            { path: "storie", component: StorieComponent },
            {path:"**", component:ChiSiamoComponent}/* ,
            {path:"chi-siamo", component:ChiSiamoComponent} */
        ])
    ]
})
export class AppModule { }
