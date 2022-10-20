- [x] style the movie page
- [x] style the home page
- [x] style the popular page
- [x] style the header component
- [x] style the menu component
- [x] fix and/or verify genreList(see list items on popular)
- [x] update axios request to include trailer on getMovieDetails
- [x] update axios request to include plot on getMovieDetails
- [x] render movie trailer in iframe on movie page
- [x] host site
- [x] ?BUG? - undefined movie in initial state
- [x] uncomment all axios requests
- [x] ?? on Movie.js redirect back if no movie present
- [x] ?? loading state / loading indicator
- [x] ?? automatically begin fetching movie details for initially displayed movie

"Random Movie Picker": Linked to go home
"Random": Linked to take you to the random movie page
"Most Popular": Linked to most popular page
"Random Movie Button": Click this button to get a random movie
Default movie: The default movie is always the one at the top of the most popular list
Movie Poster: Click the movie poster to receive details about the movie
(Details include: Trailer, Genre List, the Name of the Movie, the year it came out, and a small paragraph about the plot)
Back Button: Click the back button to go home
Most Popular page: uses the api to show the top 100 most popular movie
Most popular page includes: Poster, name, year, imdb rating(updated with the api), and rank in the top 100
NOTE: The default movie on the home page is always the first one on the list, I ran into a stack overflow problem trying to randomize that on page load.
