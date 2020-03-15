import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import "./styles.css";

export default class Product extends Component {
	state = {
			product: {}
	};

	async componentDidMount() {
		const { id } = this.props.match.params;

		const response = await api.get(`/products/${id}`);

		this.setState({product: response.data});
	}

	render() {
		const {product} = this.state;
		
		return  (
			<div className="product-info">
				<article>
					<h1>{product.title}</h1>
					<h1>{product.description}</h1>

					<p>
							URL: <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a>
					</p>
				</article>
				<button className="actions">
						<a href="/">Voltar para lista</a>
				</button>
			</div>
		);
	};
};