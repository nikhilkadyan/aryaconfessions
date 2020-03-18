import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css']
})
export class SecretsComponent implements OnInit {
  emailField: string = '';
  passwordField: string = '';
  user$: Observable<any>;
  secrets$: Observable<any[]>;
  constructor(public db: AngularFirestore, public auth: AngularFireAuth) { }

  ngOnInit() {

    this.user$ = this.auth.user;

    this.secrets$ = this.db.collection('secrets').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );;
  }

  deleteSecret(data){
    this.db.doc(`secrets/${data.key}`).delete();
    alert('Message Deleted!');
  }

  loginEmail(){
    if(this.emailField !== '' && this.passwordField !== ''){
      this.auth.auth.signInWithEmailAndPassword(this.emailField,this.passwordField);
    } else {
      alert('Please fill both email and password');
    }
  }

  logout(){
    this.auth.auth.signOut();
  }

}