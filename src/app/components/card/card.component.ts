import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { BurgerDetailsComponent } from '../../burger-details/burger-details.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl!: string; // URL da imagem passada ao componente
 
  imageWidth: number = 194; // Largura em pixels
  
  
  imageHeight: number = 155; // Altura em pixels
  @Input() title!: string;    // Título do card
  @Input() description!: string; // Descrição do card
  @Input() ingredients!: string;
  @Input() price!: string;  
  constructor(private dialog: MatDialog) {}

  openDetails(): void {
    this.dialog.open(BurgerDetailsComponent, {
      data: {
        title: this.title,
        image: this.imageUrl,
        description: this.description,
        ingredients: this.ingredients,
        price: this.price
      }
    });
  }
  
}