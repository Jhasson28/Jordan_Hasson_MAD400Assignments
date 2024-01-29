import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../Models/Pokemon";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent implements OnInit{
  @Input() pokemon?: Pokemon;
  constructor() {
  }
    ngOnInit(): void {

    }

}
