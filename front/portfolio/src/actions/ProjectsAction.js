import {FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_ERROR} from '../constants';

/**
 * fetch projects
 */

export const fetchProjectsBegin = () => ({
    type : FETCH_PROJECTS,
});

export const fetchProjectsSuccess = (projects) => ({
    type : FETCH_PROJECTS_SUCCESS,
    payload : {
        projects : projects
    }
});

export const fetchProjectsError = (error) => ({
    type : FETCH_PROJECTS_ERROR,
    payload : {
        projects : error
    }
});
