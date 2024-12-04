import { Component } from '@angular/core';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from "./componente2/componente2.component";
import { Componente3Component } from "./componente3/componente3.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Angular';
}
