import {Injectable, signal} from '@angular/core';
import {TickerService} from '../TickerService';

export interface StockResult {
  symbol: string;
  name: string;
  lastPrice: number;
}

export interface WatchedStock {
  symbol: string;
  name: string;
  lastPrice: number;
  priceToEarnings: number;
  marketCap: number;
  sharesOutstanding: number;
}
@Injectable({
  providedIn: 'root',
})
export class TickerServiceWrapper {
  private tickerService!: TickerService;

  watchedStocks = signal<WatchedStock[]>([]);

  constructor() {
    this.tickerService = new TickerService();
    this.setupCallback();
  }

  private setupCallback(): void {
    this.tickerService.onDataChanged((companies: WatchedStock[]) => {
      this.watchedStocks.set(companies);
    })
  }

  search(query: string): Promise<StockResult[]> {
    return this.tickerService.search(query).then(response => response.results);
  }

  watch(symbol: string): void {
    if (!this.tickerService.isWatched(symbol)) {
      this.tickerService.watch(symbol);
    }
  }

  unwatch(symbol: string):void {
    this.tickerService.unwatch(symbol);
    this.watchedStocks.update(stocks => stocks.filter(s => s.symbol !== symbol));
  }

  isWatched(symbol: string): boolean {
    return this.tickerService.isWatched(symbol);
  }

}
