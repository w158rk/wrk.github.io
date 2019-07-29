import { fetch } from 'whatwg-fetch';
import { fetchProjectBegin, fetchProjectSuccess, fetchProjectError } from '../actions/ProjectAction';
import { updateProjectBegin, updateProjectSuccess, updateProjectError } from '../actions/ProjectAction';
import { createProjectBegin, createProjectSuccess, createProjectError } from '../actions/ProjectAction';
import { deleteProjectBegin, deleteProjectSuccess, deleteProjectError } from '../actions/ProjectAction';

const API_URL = 'http://localhost:3000/projects';
const API_HEADERS = {
  'Content-Type': 'application/json; charset=UTF-8',
};

export function fetchProject(id) {

    let api_url = `${API_URL}/${id}`;
    console.log (api_url);

    return dispatch => {
      dispatch(fetchProjectBegin());
      return fetch(`${api_url}`,{headers : API_HEADERS})
        .then(handleErrors)
        .then(res => res.json())
        .then(res => {
          dispatch(fetchProjectSuccess(res));
        })
        .catch(error => dispatch(fetchProjectError(error)));
    };
}

export function updateProject(oldProject, newProject) {

    let id = oldProject.id;
    let api_url = `${API_URL}`;
    console.log(api_url);

    return dispatch => {
        dispatch(updateProjectBegin(id, newProject));
        return fetch(`${api_url}/${id}`,{
            method : 'PUT',
            headers : API_HEADERS,
            body : JSON.stringify(newProject)
        })
        .then(handleErrors)
        .then(res => res.json()) 
        .then(res => {
            dispatch(updateProjectSuccess());
        })
        .catch(error => dispatch(updateProjectError(error, oldProject)));
    }

}

export function createProject(project) {

    let api_url = `${API_URL}`;
    console.log(api_url);

    return dispatch => {

        dispatch( createProjectBegin(project) );
        return fetch(`${api_url}`,{
            method : 'POST',
            headers : API_HEADERS,
            body : JSON.stringify(project)
        })
        .then(handleErrors)
        .then(() => {
            dispatch( createProjectSuccess() );
        })
        .catch(error => dispatch( createProjectError(error) ));
        
    }

}

export function deleteProject(id) {

    let api_url = `${API_URL}/${id}`;

    return dispatch => {
        dispatch(deleteProjectBegin(id));
        return fetch(`${api_url}`,{
            method : 'DELETE',
            headers : API_HEADERS,
        })
        .then(handleErrors)
        .then(res => {
            dispatch(deleteProjectSuccess());
        })
        .catch(error => dispatch(deleteProjectError(error)));
    }

}


// Handle HTTP errors since fetch won't.
let handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
