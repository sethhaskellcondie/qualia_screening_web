import { Component } from '@angular/core';
import {TickerServiceWrapper, WatchedStock} from '../../services/ticker';

@Component({
  selector: 'app-watched',
  imports: [],
  templateUrl: './watched.html',
  styleUrl: './watched.css',
})
export class WatchedComponent {
  constructor(public tickerService: TickerServiceWrapper) {
  }

  get watchedStocks(): WatchedStock[] {
    return this.tickerService.watchedStocks();
  }
}
