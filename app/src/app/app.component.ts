import { Component } from '@angular/core';
import { CocheService } from './api/services';
import { Coche } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public constructor(private api: CocheService)
  {

  }
}
