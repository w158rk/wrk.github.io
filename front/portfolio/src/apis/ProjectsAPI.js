import { fetch } from 'whatwg-fetch';
import { fetchProjectsBegin, fetchProjectsSuccess, fetchProjectsError } from '../actions/ProjectsAction';

const API_URL = 'http://localhost:3000/projects';
const API_HEADERS = {
  'Content-Type': 'application/json; charset=UTF-8',
};

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
