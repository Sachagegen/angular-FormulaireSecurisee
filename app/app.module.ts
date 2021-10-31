import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    ROUTING,
    HttpClientModule,
  ],
  declarations: [AppComponent, EnregistrementComponent, InscrireComponent],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
