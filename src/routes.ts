import { Routes } from '@angular/router'
import { DetailComponet } from './de' 

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent    
    },
    {
        path: 'detail',
        component: DetailComponet
    }
]