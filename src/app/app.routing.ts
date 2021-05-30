import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CodeCaptureComponent } from './pages/code-capture/code-capture.component';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'register',
  component: RegisterComponent
},
  {
    path: 'resetUserPassword',
    component: CodeCaptureComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'tickets'
  }
]
