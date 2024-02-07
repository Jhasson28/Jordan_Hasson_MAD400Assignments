import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {Pokemon} from "../Models/Pokemon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jordan_Hasson_MyFirstAngularApplication';
  individualPokemon: Pokemon;

  constructor() {
    this.individualPokemon = {
      pokemonType: "Fire",
      pokemonLvl: 10,
      pokemonName: "Ponyta"
    };
  }
}
