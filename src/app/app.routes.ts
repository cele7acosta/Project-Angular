import { Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';

export const routes: Routes = [
    {path: '', redirectTo: 'ejercicios', pathMatch: 'full' }, // Ruta inicial redirige a 'ejercicios'
    // {path: '**', redirectTo: 'ejercicios' }, // Manejo de rutas no encontradas
    {path: 'ejercicios', component: EjerciciosComponent},
    {path: 'pelis', component: MoviesComponent},
    {path: 'series', component: SeriesComponent}
    
];

