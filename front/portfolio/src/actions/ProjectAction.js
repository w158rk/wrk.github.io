import {FETCH_PROJECT, FETCH_PROJECT_SUCCESS, FETCH_PROJECT_ERROR} from '../constants';
import {UPDATE_PROJECT, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_ERROR} from '../constants';
import {CREATE_PROJECT, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR} from '../constants';
import {DELETE_PROJECT, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_ERROR} from '../constants';

/**
 * create project
 */

export const createProjectBegin = (project) => ({
    type : CREATE_PROJECT,
    payload : {
        project : project
    }
});

export const createProjectSuccess = () => ({
    type : CREATE_PROJECT_SUCCESS,
    payload : {}
});


export const createProjectError = (error) => ({
    type : CREATE_PROJECT_ERROR,
    payload : {
        error : error
    }
})

/**
 * update project
 */

export const updateProjectBegin = (id, newProject) => ({
    type : UPDATE_PROJECT, 
    payload : {
        project : newProject
    }
});

export const updateProjectSuccess = () => ({
    type : UPDATE_PROJECT_SUCCESS,
    payload : {}
});

export const updateProjectError = (error, oldProject) => ({
    type : UPDATE_PROJECT_ERROR,
    payload : {
        error : error,
        project : oldProject
    }
})

/**
 * fetch project by id
 */

export const fetchProjectBegin = (id) => ({
    type : FETCH_PROJECT,
    payload : id
});

export const fetchProjectSuccess = (project) => ({
    type : FETCH_PROJECT_SUCCESS,
    payload : {
        project : project
    }
});

export const fetchProjectError = (error) => ({
    type : FETCH_PROJECT_ERROR,
    payload : {
        project : error
    }
});

/**
 * delete project by id
 */

export const deleteProjectBegin = (id) => ({
    type : DELETE_PROJECT,
    payload : {
        projectId : id
    }
});

export const deleteProjectSuccess = () => ({
    type : DELETE_PROJECT_SUCCESS
});

export const deleteProjectError = (error) => ({
    type : DELETE_PROJECT_ERROR,
    payload : {
        error : error
    }
});
