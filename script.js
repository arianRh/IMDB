// SEARCH
var movieInput = document.getElementById("movie-input");

// LOADER
let popLoader = document.getElementById("poploader");
let genreLoader = document.getElementById("genre-loader");
let selectLoader = document.getElementById("selectloader");

// GET MOVIES
async function getMovies() {
	let drama = document.getElementById("drama");
	let action = document.getElementById("action");
	let heroes = document.getElementById("heroes");
	let horror = document.getElementById("horror");

	let movieResult = await (
		await fetch("https://imdb-api.com/en/API/Top250Movies/k_18gs2743")
	).json();

	setPopularMov(movieResult);

	drama.onclick = () => {
		dramaGenre(movieResult);
	};

	action.onclick = () => {
		actionGenre(movieResult);
	};

	heroes.onclick = () => {
		superHeroGenre(movieResult);
	};

	horror.onclick = () => {
		horrorGenre(movieResult);
	};
}

// SET POPULAR MOVIES
async function setPopularMov(data) {
	let popularDiv = document.getElementById("popular-div");
	let cards = "";
	if (data.items.length === 0) {
		cards += `<h1 class="text-white">Number of request is over</h1>`;
		popLoader.style.display = "none";
	} else {
		for (let i = 1; i <= 4; i++) {
			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${data?.items[i]?.title}&apikey=92fa0f5b`
				)
			).json();
			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_ct2a1sa9/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (data?.items[i]?.image === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${data?.items[i]?.image}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${data?.items[i]?.title}</a>`;
			cards += `<p class='card-text'>${data?.items[i]?.imDbRating}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1>This trailer unavailable (Because there have been many request)</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px"  src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			popLoader.style.display = "none";
		}
	}
	popularDiv.innerHTML = cards;
}

// SET DRAMA GENRE MOVIES
async function dramaGenre(data) {
	let popularDiv = document.getElementById("genre-div");
	let cards = "";
	if (data.items.length === 0) {
		cards += `<h1 class="text-white">Number of request is over</h1>`;
	} else {
		for (let i = 5; i <= 8; i++) {
			genreLoader.style.display = "block";

			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${data?.items[i]?.title}&apikey=92fa0f5b`
				)
			).json();
			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_ct2a1sa9/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (data?.items[i]?.image === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${data?.items[i]?.image}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${data?.items[i]?.title}</a>`;
			cards += `<p class='card-text'>${data?.items[i]?.imDbRating}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1>This trailer unavailable (Because there have been many request)</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px"  src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			genreLoader.style.display = "none";
		}
	}
	popularDiv.innerHTML = cards;
}

// SET ACTION GENRE MOVIES
async function actionGenre(data) {
	let popularDiv = document.getElementById("genre-div");
	let cards = "";
	if (data.items.length === 0) {
		cards += `<h1 class="text-white">Number of request is over</h1>`;
	} else {
		for (let i = 9; i <= 12; i++) {
			genreLoader.style.display = "block";
			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${data?.items[i]?.title}&apikey=92fa0f5b`
				)
			).json();
			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_ct2a1sa9/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (data?.items[i]?.image === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${data?.items[i]?.image}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${data?.items[i]?.title}</a>`;
			cards += `<p class='card-text'>${data?.items[i]?.imDbRating}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1>This trailer unavailable (Because there have been many request)</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px"  src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			genreLoader.style.display = "none";
		}
	}
	popularDiv.innerHTML = cards;
}

// SET SUPERHERO GENRE MOVIES
async function superHeroGenre(data) {
	let popularDiv = document.getElementById("genre-div");
	let cards = "";
	if (data.items.length === 0) {
		cards += `<h1 class="text-white">Number of request is over</h1>`;
	} else {
		for (let i = 13; i <= 16; i++) {
			genreLoader.style.display = "block";
			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${data?.items[i]?.title}&apikey=92fa0f5b`
				)
			).json();
			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_ct2a1sa9/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (data?.items[i]?.image === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${data?.items[i]?.image}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${data?.items[i]?.title}</a>`;
			cards += `<p class='card-text'>${data?.items[i]?.imDbRating}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1>This trailer unavailable (Because there have been many request)</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px"  src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			genreLoader.style.display = "none";
		}
	}
	popularDiv.innerHTML = cards;
}

// SET HORROR GENRE MOVIES
async function horrorGenre(data) {
	let popularDiv = document.getElementById("genre-div");
	let cards = "";
	if (data.items.length === 0) {
		cards += `<h1 class="text-white">Number of request is over</h1>`;
	} else {
		for (let i = 17; i <= 20; i++) {
			genreLoader.style.display = "block";
			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${data?.items[i]?.title}&apikey=92fa0f5b`
				)
			).json();
			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_ct2a1sa9/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (data?.items[i]?.image === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${data?.items[i]?.image}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${data?.items[i]?.title}</a>`;
			cards += `<p class='card-text'>${data?.items[i]?.imDbRating}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1>This trailer unavailable (Because there have been many request)</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px"  src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			genreLoader.style.display = "none";
		}
	}
	popularDiv.innerHTML = cards;
}

// SEARCH
async function getSelectedMovie() {
	var movieResult = await (
		await fetch(
			`https://www.omdbapi.com/?s=${movieInput.value}&apikey=92fa0f5b`
		)
	).json();
	let allSelectCard = document.getElementById("into-cards");
	let cards = "";
	if (movieResult.Response === "True") {
		for (let i = 0; i < movieResult.Search.length; i++) {
			selectLoader.style.display = "block";
			let movieDetails = await (
				await fetch(
					`https://www.omdbapi.com/?t=${movieResult?.Search[i]?.Title}&apikey=92fa0f5b`
				)
			).json();

			let movieTrailer = await (
				await fetch(
					`https://imdb-api.com/en/API/Trailer/k_cl718ni4/${movieDetails.imdbID}`
				)
			).json();
			cards += `<div class='col-12 col-md-6 mt-3 col-lg-6 col-xl-3'>`;
			cards += `<div class='card bg-dark text-white mt-4'>`;
			if (movieResult?.Search[i]?.Poster === "N/A") {
				cards += `<img src="Images/Noimage.svg.png" class='card-img card-pic' />`;
			} else {
				cards += `<img src="${movieResult?.Search[i]?.Poster}" class='card-img card-pic' />`;
			}
			cards += `<div class='card-img-overlay'>`;
			cards += `<a
			href=''
			class='card-title lead'
			>${movieResult?.Search[i]?.Title}</a>`;
			cards += `<p class='card-text'>${movieResult?.Search[i]?.Year}</p>`;
			cards += `<div id='change-icon' class='icon-heart'>`;
			cards += `<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			fill='currentColor'
			class='bi bi-heart-fill'
			viewBox='0 0 16 16'
			>
			<path
			fill-rule='evenodd'
			d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
			/>
			</svg>`;
			cards += `</div>`;
			cards += `<br />`;
			cards += `<button type="button" class="btn modal-btn mt-3" data-bs-toggle="modal" data-bs-target="#${movieDetails.imdbID}">`;
			cards += `See more `;
			cards += `</button>`;
			cards += `<div class="modal fade" id="${movieDetails.imdbID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
			cards += `<div class="modal-dialog">`;
			cards += `<div class="modal-content">`;
			cards += `<div class="modal-header">`;
			cards += `<h5 class="modal-title" id="exampleModalLabel">${movieDetails.Title}</h5>`;
			cards += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
			cards += `</div>`;
			cards += `<div class="modal-body">`;
			cards += `<p>Genre : ${movieDetails.Genre}</p>`;
			cards += `<p>Director : ${movieDetails.Director}</p>`;
			cards += `<p>Actors : ${movieDetails.Actors}</p>`;
			cards += `<p>imdbRating : ${movieDetails.imdbRating}</p>`;
			cards += `<p>Plot : ${movieDetails.Plot}</p>`;
			if (movieTrailer.videoId === null) {
				cards += `<h1 class="text center mt-4" style="color: #009ad6;">This movie does not have a trailer</h1>`;
			} else {
				cards += `<div class"container">`;
				cards += `<div class="row">`;
				cards += `<div class="col-12">`;
				cards += `<iframe width="100%" height="400px" src="https://www.imdb.com/video/imdb/${movieTrailer.videoId}/imdb/embed?width=700"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
				cards += `</iframe>`;
				cards += `</div>`;
				cards += `</div>`;
				cards += `</div>`;
			}
			cards += `</div>`;
			cards += `<div class="modal-footer">`;
			cards += `<button type="button" class="btn modal-btn" data-bs-dismiss="modal">Close</button>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			cards += `</div>`;
			selectLoader.style.display = "none";
		}
	}
	allSelectCard.innerHTML = cards;
}

document.getElementById("movie-input").onkeyup = () => {
	setTimeOut(getSelectedMovie(), 500);
};

getMovies();
getSelectedMovie();
