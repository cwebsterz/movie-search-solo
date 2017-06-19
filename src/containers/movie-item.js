import React from 'react'

const MovieListItem = props => {
	return (
		<article>
			<div className="link dt w-100 bb b--black-10 pb2 mt2" href="#0">
				<div className="dtc v-top pl2">
					<h1 className="f6 tc f5-ns fw6 lh-title black mv0">{props.Title}</h1>
					<div className="pa4 tc">
						<img src={props.Poster} />
					</div>
					<dl className="mt2 f6">
						<dt className="clip">Year</dt>
						<dd className="ml0 tc">{props.Year}</dd>
					</dl>
				</div>
			</div>
		</article>
	)
}

export default MovieListItem
