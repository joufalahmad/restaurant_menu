import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant_menu';
  total: number = 0;
  Qty: number = 0;
  searchTerm: string = ''; 
  
  food_menu = [
    { 'id': 1, 'name': 'عصير برتقال', 'price': 10, 'image': 'assets/img/juice.jpg' },
    { 'id': 2, 'name': 'برقر لحم', 'price': 42, 'image': 'assets/img/burgers.jpg' },
    { 'id': 3, 'name': 'مكرونه البسيتو', 'price': 35, 'image': 'assets/img/pasta-pesto.jpg' },
    { 'id': 4, 'name': 'بيتزا', 'price': 37, 'image': 'assets/img/pizza.jpg' },
    { 'id': 5, 'name': 'سلطة', 'price': 30, 'image': 'assets/img/salat.jpeg' }
  ];

  sum(event: any, price: number) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price;
      this.Qty += 1;
    } else {
      this.total -= price;
      this.Qty -= 1;
    }
  }

  filteredFoodMenu() {
    return this.food_menu.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
