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
 

  constructor() {


    }ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
;

}

class ContentListComponentImpl extends ContentListComponent {
}
