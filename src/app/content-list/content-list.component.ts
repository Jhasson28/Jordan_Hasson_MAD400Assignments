import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {Pokemon} from "../../Models/Pokemon";


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  pokemon?: Pokemon;

  constructor() {

  }
  ngOnInit() {
    let pokemonList = [
      this.pokemon = {
        pokemonName: "Jigglypuff",
        pokemonLvl: 24,
        pokemonType: "Fairy"
      },
      this.pokemon = {
        pokemonName: "Ledyba",
        pokemonLvl: 6,
        pokemonType: "Bug"
      },
      this.pokemon = {
        pokemonName: "Houndoom",
        pokemonLvl: 56,
        pokemonType: "Dark/Fire"
      },
      this.pokemon = {
        pokemonName: "Lugia",
        pokemonLvl: 100,
        pokemonType: "Flying/Psychic"
      }

    ]

  }

  private InitializeValues (): void {

  }

  private LoadData (): void {

  }

}
