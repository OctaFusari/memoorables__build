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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StorieComponent, 
        HomeComponent, 
        ChiSiamoComponent
    ],
    providers: [
        ScreenTrackingService,
        UserTrackingService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp({
            "apiKey": "AIzaSyA3nXlRMaaYQP3o30Z_ZtiLWnsioRKv8_U",

            "authDomain": "memoorables-f44d8.firebaseapp.com",
          
            "projectId": "memoorables-f44d8",
          
            "storageBucket": "memoorables-f44d8.appspot.com",
          
            "messagingSenderId": "346707148199",
          
            "appId": "1:346707148199:web:4c89fcda38b399607eca82",
          
            "measurementId": "G-W9VD82XM5R"
          
        })),
        provideAuth(() => getAuth()),
        provideAnalytics(() => getAnalytics()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        providePerformance(() => getPerformance()),
        provideStorage(() => getStorage()),
        provideRemoteConfig(() => getRemoteConfig()),
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
        ]),
        
    ]
})
export class AppModule { }
