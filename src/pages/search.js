import React from 'react'
import MovieListItem from '../containers/movie-item'
import { map } from 'ramda'
import MovieSearch from '../containers/movie-search-page'

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			results: []
		}
		this.handleResults = this.handleResults.bind(this)
	}

	handleResults(movies) {
		this.setState({ results: movies })
	}

	render() {
		const li = function(movie) {
			return (
				<li key={movie.imdbID}>
					<MovieListItem {...movie} />
				</li>
			)
		}

		return (
			<div>
				<MovieSearch onResults={this.handleResults} />
				<div className="pa2 avenir">
					<h2>Results</h2>
					<ul className="list">
						{map(li, this.state.results)}
					</ul>
				</div>
			</div>
		)
	}
}

export default Search
