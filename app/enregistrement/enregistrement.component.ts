import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css'],
})
export class EnregistrementComponent {
  user: any = {};

  constructor(private user$: UserService) {}

  clicBouton() {
    this.user$.enregistrerUser(this.user);
  }

  reset(form: NgForm) {
    form.resetForm();
  }
}
