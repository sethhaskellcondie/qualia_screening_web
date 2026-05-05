Search for stocks by company or ticket symbol
Display results underneath the search box
Search should start after two more characters are included in the input field

Watch a stock
Click on a search result to add it to table of watch stocks
update with real-time price data (emitted every 300 ms)

Two components
Search component
Live component (have both visible at all times)

One service to interact with the TickerService, this works as a sudo API
Be able to search and watch different stocks use a callback function for this

Implementation Plan
1. Import the TickerService.ts file into the project
2. Make a service that can interface with this TickerService, create basic functions for search and watch
3. Setup the callback that will be used for the watch function
4. Create the UI for searching for a stock first, remember to search after each character input after 2 characters
5. Update the service to include a list of all the stocks that we are watching
6. Create the watch UI to display the stocks that we are watching
7. Update the watch UI to update every two seconds (not 300 ms)
8. Update the UI to include a way to delete the stocks that we no longer want to watch
