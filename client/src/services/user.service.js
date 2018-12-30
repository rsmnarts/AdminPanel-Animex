import config from 'config';
import { authHeader } from '../helpers'

export const login = (username, password) => {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'aaplication/json' },
		body: JSON.stringify({ username, password })
	};

	return fetch(`${config.apiUrl}/auth/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			if (user.token) {
				localStorage.setItem('user', JSON.stringify(user));
			}

			return user;
		})
}

export const logout = () => {
	localStorage.removeItem('user');
}

export const getAll = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader
	}

	return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

export const handleResponse = (response) => {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (!response.status === 401) {
				logout();
				location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	})
}