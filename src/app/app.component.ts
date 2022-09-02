import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appTabs = [
    { title: 'Gráfico', url: '/graph', icon: 'podium' },
  ];
  constructor() {}
}
