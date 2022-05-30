import { Component, OnInit } from '@angular/core';
import { NoticiasApiService } from '../service/noticias-api.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _serivice: NoticiasApiService) { }

  ngOnInit(): void {
    this._serivice.topHeading().subscribe((result) => {
      console.log(result);
    })
  }
}
