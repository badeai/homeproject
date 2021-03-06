import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
  user: firebase.User | any;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {}
  logout() {
    this.afAuth.signOut();
  }
}
