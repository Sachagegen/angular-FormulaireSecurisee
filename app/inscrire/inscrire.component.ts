import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css'],
})
export class InscrireComponent implements OnInit {
  user = {};
  constructor(private user$: UserService) {}

  ngOnInit() {}
  Inscrire(form: NgForm) {
    //console.log(this.user);
    this.user$.inscrireUser(this.user);
  }
  versPageEnregistrement() {
    this.user$.toLogin();
  }
}
