import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isStyled: boolean = false;
  fontSize: number = 15;
  fontWeight: number = 400;
  welcomeMessage: string = '';

  applyStyles() {
    this.isStyled = true;
    this.fontSize = 25;
    this.fontWeight = 700;
  }

  updateWelcomeMessage(name: string) {
    this.welcomeMessage = name;
  }
}
