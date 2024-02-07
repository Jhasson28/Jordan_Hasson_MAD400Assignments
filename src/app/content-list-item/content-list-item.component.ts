import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../Models/Pokemon";
import {ContentListComponent} from "../content-list/content-list.component";


@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    ContentListComponent
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent implements OnInit{
  @Input() contentPokemon?: Pokemon
  constructor() {


  }
    ngOnInit(): void {


    }

}
