import { Component, signal } from '@angular/core';
import { TickerService } from './TickerService';
import {SearchComponent} from './components/search/search';
import {StockResult, TickerServiceWrapper} from './services/ticker';
import {WatchedComponent} from './components/watched/watched';

@Component({
  selector: 'app-root',
  imports: [
    SearchComponent,
    WatchedComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private tickerService: TickerServiceWrapper) {
  }

  onStockSelected(stock: StockResult): void {
    this.tickerService.watch(stock.symbol);
  }
}
