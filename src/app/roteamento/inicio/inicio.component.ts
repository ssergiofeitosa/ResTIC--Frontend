import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  cards = [
    {
      imageUrl: 'assets/images/burger.png',
      title: 'burger',
      description: 'burger.'
    },
    {
      imageUrl: 'assets/images/home.png',
      title: 'home',
      description: 'home.'
    }] 
}
