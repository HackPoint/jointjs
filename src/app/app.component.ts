import { Component } from '@angular/core';
import {JointJsComponent} from "./joint-js/joint-js.component";

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [JointJsComponent]
})
export class AppComponent {
  title = 'Joint JS demo Angular2';
}
