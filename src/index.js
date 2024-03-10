import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Helmet>
			<title>Little Lemon Restaurant - Known for Uniqueness</title>
			<meta property="og:title" content="Little Lemon - Restaurant"/>
			<meta property="og:description"
			      content="Little lemon restaurant is known for unique taste and tailord serving as per demand."/>
			<meta property="og:image" content="logo.png"/>
			<meta property="og:url" content="http://localhost:3000"/>
		</Helmet>
		<App/>
	</React.StrictMode>
);
