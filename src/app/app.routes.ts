import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' }, // Перенаправление на главную страницу
  { path: '', component: MainComponent }, // Основной маршрут для MainComponent
];
