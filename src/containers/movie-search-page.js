import React from 'react'

class MovieSearch extends React.Component {
	constructor(props) {
		super(props)
		this.state = { q: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	searchMovie(q) {
		return fetch(
			`https://www.omdbapi.com/?apikey=21d70f1a&s=${q}&y=&plot=full&r=json`
		).then(res => res.json())
	}

	handleChange(e) {
		this.setState({ q: e.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		this.searchMovie(this.state.q).then(results => {
			if (results.Response === 'False') {
				alert(results.Error)
				return
			}
			console.log(results)
			this.props.onResults(results.Search)
		})
	}

	render() {
		return (
			<form className="pa4 avenir" onSubmit={this.handleSubmit}>
				<div className="measure">
					<label className="db b mb2">Search</label>
					<input
						value={this.state.q}
						onChange={this.handleChange}
						type="text"
						className="input-reset ba b--black-20 pa2 mb2 db w-100"
					/>
				</div>
				<div>
					<button className="f6 link dim ph3 pv2 mb2 dib white bg-gray">
						Search
					</button>
				</div>
			</form>
		)
	}
}

export default MovieSearch
