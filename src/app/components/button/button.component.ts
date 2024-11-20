import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
  <button 
    [ngStyle]="{'background-color': backgroundColor, 'color': textColor}" 
    (click)="onClick()">
    {{ text }}
  </button>`,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() link: string | undefined;
  
  @Input() backgroundColor: string = ''; // Cor de fundo (opcional)
  @Input() textColor: string = ''; // Cor do texto (opcional)
  @Input() width: string = ''; // Largura do botão (opcional)
}
