/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */

import { userConstants } from  '../constants';
import { userServices } from '../services';
import { alertActions } from '.';
import { history } from '../../helpers';

export const userActions = {
	login, logout, getAll
}

const login = (email, password) => {
	return dispatch => {
		dispatch(request.emai({ email }));

		userServices.login(email, password)
			.then(
				user => {
					dispatch(success(user));
					history.push('/');
				},
				error => {
					dispatch(failure(error));
					dispatch(alertActions.error(error));
				}
			);
	};

	const request = (user) => { 
		return {
			type: userConstants.LOGIN_REQUEST,
			user
		} 
	}
	const success = (user) => {
		return {
			type: userConstants.LOGIN_SUCCESS,
			user
		}
	}
	const failure = (error) => {
		return {
			type: userConstants.LOGIN_FAILURE,
			error
		}
	}
}

const logout = () => {
	userServices.logout();
	return { type: userConstants.LOGOUT };
}

const getAll = () => {
	return dispatch => {
		dispatch(request());

		userServices.getAll()
			.then(
				users => dispatch(success(users)),
				error => {
					dispatch(failure(error));
					dispatch(alertActions.error(error));
				}
			);
	};

	const request = () => {
		return {
			type: userConstants.GETALL_REQUEST
		}
	}
	const success = (users) => {
		return { 
			type: userConstants.GETALL_SUCCESS,
			users
		}
	}
	const failure = (error) => {
		return {
			type: userConstants.GETALL_FAILURE,
			error
		}
	}
}