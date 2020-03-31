import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  async openBrowser() {
    await Browser.open({ url: 'https://www.google.com/' });

    setTimeout(() => {
      Browser.close();
    }, 5000);

    Browser.addListener('browserFinished', () => {
      alert('Browser closed.')
    })
  }
}
