import { Component } from '@angular/core';
import { CocheService } from './api/services';
import { Coche } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Mi título";

  public coche: Coche;

  public constructor(private api: CocheService) {
    this.coche = {};
    this.api.apiCocheGet$Json({ id: 2 }).subscribe(res => {
      this.coche = res;
    })
  }
}
