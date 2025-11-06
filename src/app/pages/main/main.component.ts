import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {AboutComponent} from '../../features/about/about.component';
import {StockComponent} from '../../features/stock/stock.component';
import {HpPromoComponent} from '../../features/hp-promo/hp-promo.component';
import { BuyComponent } from '../../features/buy/buy.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StockComponent,
    HpPromoComponent,
    BuyComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
