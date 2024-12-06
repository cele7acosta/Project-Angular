import { Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {path: '', redirectTo: 'ejercicios', pathMatch: 'full' }, // Ruta inicial redirige a 'ejercicios'
    {path: 'ejercicios', component: EjerciciosComponent},
    {path: 'pelis', component: MoviesComponent}
    
];

