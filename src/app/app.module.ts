import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackerModule } from './tracker/tracker.module';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';

import { FormsModule } from '@angular/forms';

//for Http service
import { HttpClientModule } from '@angular/common/http';

//for toast message
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortCountriesPipe } from './sort-countries.pipe';


//import statement to use font awesome library
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//for loading spinner
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppService } from './app.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
  declarations: [
    AppComponent,
    SortCountriesPipe,
    PageNotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    TrackerModule,
    UserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    UserModule,
    FormsModule,
    TrackerModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path:'page-not-found', component: PageNotFoundComponent},
      { path:'server-error', component:ServerErrorComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  ],
  providers: [SortCountriesPipe,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
