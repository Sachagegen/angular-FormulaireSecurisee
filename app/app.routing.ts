/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { InscrireComponent } from './inscrire/inscrire.component';

export const ROUTES: Routes = [
  { path: '', component: EnregistrementComponent },
  { path: 'inscrire', component: InscrireComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
