import React from 'react';

import axios from 'axios';

import Encabezado from './Encabezado';
import ListaNoticias from './ListaNoticias';
import Form from "./Form";

class App extends React.Component {

	state = {
		noticias: [],
	};

	requestNews = (categoria = 'sports') => {
		let key = '6d37a664c9a2402ea28207089c89ec14';
		let url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${key}`;

		axios
			.get(url)
			.then((res)=>{
				console.log(res.data.noticias)

				this.setState({
					noticias: res.data.articles,
				});
			})
			.catch((error)=>{
				console.error(error);
			});
	};

	componentDidMount = () =>{
		this.requestNews();
	};

	render() {
		return (
			<div className="page">

				<div>
					<Encabezado className="" title="News" />
				</div>

				<div className="container">
					<div className="form-group d-flex col-12 justify-content-center">
						<Form requestNews={this.requestNews}/>
					</div>

					<div className="row justify-content-center">
						<div className="card col-sm-3 m-3">
							<ListaNoticias noticias={this.state.noticias} />
						</div>
						<div className="card col-sm-3 m-3">
							<ListaNoticias noticias={this.state.noticias} />
						</div>
						<div className="card col-sm-3 m-3">
							<ListaNoticias noticias={this.state.noticias} />
						</div>
					</div>
				</div>

			</div>

		);
	}
}

export default App;
