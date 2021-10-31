import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {
  loginPage: string = '';
  public users: Array<{}> = [];
  co: Boolean = false;
  constructor(private router: Router) {}

  toLogin() {
    this.router.navigate([this.loginPage]);
  }

  inscrireUser(donneUser) {
    this.users.push(donneUser);
    //console.log(this.users);
    console.log(donneUser);
    alert('Compte crée');
    console.log(this.users);
  }

  enregistrerUser(donneUser) {
    //ERREUR que je ne comprend pas dans la boucle, hors de la boucle cela fonctionne
    /*console.log(
      this.users[1].login == donneUser.login &&
        this.users[1].pwd === donneUser.pwd
    );*/
    for (let i = 0; this.users.length; i++) {
      if (
        this.users[i].login == donneUser.login &&
        this.users[i].pwd === donneUser.pwd
      ) {
        this.co = true;
        i = this.users.length + 1;
      } else {
        this.co = false;
      }
    }
    if (this.co === true) {
      alert('Connection réussi');
    } else {
      alert('Login et/ou mot de passe incorrecte');
    }
  }
}
