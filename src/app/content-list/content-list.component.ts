import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {Pokemon} from "../../Models/Pokemon";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgForOf
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  pokemonList = [
    new Pokemon("JigglyPuff", "Fairy", 29),
    new Pokemon("Lugia", "Flying/Psychic", 100),
    new Pokemon ("Miltank", "Normal", 45),
    new Pokemon("Spoink", "Psychic", 14)
  ]

  constructor() {


    }ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
;

}

class ContentListComponentImpl extends ContentListComponent {
}
