import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
 import { HeaderComponent } from './header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule, } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
 import {MatDividerModule} from '@angular/material/divider';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {MatExpansionModule} from '@angular/material/expansion';
import { IntoComponent } from './home/into/into.component';
import { SkillsComponent } from './home/skills/skills.component';
import { AngularEmojisModule } from 'angular-emojis';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './home/projects/projects.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServicesProvidedComponent } from './home/services-provided/services-provided.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './home/experience/experience.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import { BookingModalComponent } from './modals/booking-modal/booking-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SpotlightedProjectsComponent } from './home/spotlighted-projects/spotlighted-projects.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntoComponent,
    SkillsComponent,
    ProjectsComponent,
    ServicesProvidedComponent,
    ExperienceComponent,
    BookingModalComponent,
    SpotlightedProjectsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    WavesModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    NgxGoogleAnalyticsRouterModule, 
    NgxGoogleAnalyticsModule.forRoot(environment.firebase.ga),
    FontAwesomeModule,
    MatToolbarModule,
    MatChipsModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    MatSlideToggleModule,
    AngularEmojisModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    IvyCarouselModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
