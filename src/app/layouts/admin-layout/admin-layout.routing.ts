import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import {RaisedTicketsComponent} from '../../pages/raised-tickets/raised-tickets.component';
import {NewTicketsComponent} from '../../pages/new-tickets/new-tickets.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user',           component: UserComponent },
    { path: 'tickets',           component: RaisedTicketsComponent },
    { path: 'newTickets',           component: NewTicketsComponent },


];
