import { fetch } from 'whatwg-fetch';
import { fetchProjectsBegin, fetchProjectsSuccess, fetchProjectsError } from '../actions/ProjectsAction';
import { API_ADDRESS, API_HEADERS } from '../constants'

const API_URL = `${API_ADDRESS}/projects`;

export function fetchProjects() {
    return dispatch => {
      dispatch(fetchProjectsBegin());
      return fetch(`${API_URL}`,{headers : API_HEADERS})
        .then(handleErrors)
        .then(res => res.json())
        .then(res => {
          dispatch(fetchProjectsSuccess(res));
        })
        .catch(error => dispatch(fetchProjectsError(error)));
    };
}

let handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
