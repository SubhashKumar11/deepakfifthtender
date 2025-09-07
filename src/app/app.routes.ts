import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Booking } from './booking/booking';

export const routes: Routes = [
    {path:'', component: HomePage},
    {path:'about',component:About},
    {path:'contact', component: Contact},
    {path:'services',component: Services},
    {path:'booking', component: Booking},
];
