import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppTogglePolicyDirective} from '../about/directives/toggle-policy.directive';

@Component({
  selector: 'app-stock',
  imports: [AppTogglePolicyDirective],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockComponent {}
