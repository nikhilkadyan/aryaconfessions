import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string;
  course: string;
  message: string;
  navbarActive: boolean = false;
  modalActive: boolean = false;
  constructor(public db: AngularFirestore) { }

  addSecret(){
    const myId = uuid.v4();
    let data = {
      id: myId,
      name: this.name,
      course: this.course,
      message: this.message
    }

    if(this.name !== '' && this.course !== '' && this.message !== ''){
      this.db.collection('secrets').add(data).then( () => {
        this.name = '';
        this.course = '';
        this.message = '';
        alert('Visit our Instagram Profile. We will soon add your confession too.')
      }).catch(err => alert(err.message));
    } else {
      alert('Please fill all of the fields!')
    }
  }
}
