import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import {AboutComponent} from '../../features/about/about.component';
import {StockComponent} from '../../features/stock/stock.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent, AboutComponent, StockComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
