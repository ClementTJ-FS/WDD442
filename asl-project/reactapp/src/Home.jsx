import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
	const [quizzes, setQuizzes] = useState([])
	useEffect(() => {
		async function fetchQuizes() {
			const response = await axios('http://localhost:3000/quizzes', {
        headers: {
          token: localStorage.token
        }
      })
	  		setQuizzes(response.data)
		}
		fetchQuizes()
	}, []);

	return (
		<div>
			<h1>Take a Quiz!</h1>
			<p>Click on any quiz listed below to take one.</p>
			<ul>
				{quizzes.map(q => (
					<li>
						<Link to={'/quizzes/' + q.id}>{q.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home