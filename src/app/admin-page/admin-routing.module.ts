import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminPageComponent} from './admin-page.component';

const routes: Routes = [
  {path: '', component: AdminPageComponent},
];

export const AdminRoutingModule = RouterModule.forChild(routes);  // forChild for lazy loading, change forRoot to this
