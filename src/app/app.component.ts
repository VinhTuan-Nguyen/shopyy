import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <section style="min-width:1230px">
      <div style="height:100%; width:100%">
        <router-outlet></router-outlet>
      </div>
    </section>
  `
})

export class AppComponent { }
