import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 imageUrl = 'http://localhost:4201/';

 chartData = {
  labels: ['Janvier', 'Février', 'Mars'],
  datasets: [{ label: 'Ventes', data: [100, 200, 300], backgroundColor: ['#42A5F5'] }]
};
}
