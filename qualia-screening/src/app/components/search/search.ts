import {Component, output} from '@angular/core';
import {StockResult, TickerServiceWrapper} from '../../services/ticker';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class SearchComponent {
  query = '';
  results: StockResult[] = [];
  stockSelected = output<StockResult>();

  constructor(private tickerService: TickerServiceWrapper) {}

  onQueryChange(): void {
    if (this.query.length >= 2) {
      this.tickerService.search(this.query).then(results => {
        this.results = results;
      });
    } else {
      this.results = [];
    }
  }

  selectStock(stock: StockResult): void {
    this.stockSelected.emit(stock);
    this.query = '';
    this.results = [];
  }
}
