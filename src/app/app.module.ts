import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SecretsComponent } from './secrets/secrets.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,    AngularFireModule.initializeApp(environment.firebase), AngularFireModule, AngularFirestoreModule, AngularFireAuthModule
 ],
  declarations: [ AppComponent, SecretsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
