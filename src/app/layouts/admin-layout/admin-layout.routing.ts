import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import {ClosedByTechnicianComponent} from '../../pages/closed-by-technician/closed-by-technician.component';
import {AssignedTicketsComponent} from '../../pages/assigned-tickets/assigned-tickets.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user',           component: UserComponent },
    { path: 'closedByTechnician', component: ClosedByTechnicianComponent },
    { path: 'assignedTickets', component: AssignedTicketsComponent },

];
