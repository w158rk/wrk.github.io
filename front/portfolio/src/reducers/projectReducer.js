import { FETCH_PROJECT_SUCCESS } from '../constants';
import { UPDATE_PROJECT, UPDATE_PROJECT_ERROR } from '../constants';

const init = {};

export default function projectReducer(state = init, action){

    console.log("type : ", action.type);
    console.log("payload : ", action.payload);    

    switch (action.type) {

        case FETCH_PROJECT_SUCCESS:
            return action.payload.project;

        case UPDATE_PROJECT:
            return action.payload.project;

        case UPDATE_PROJECT_ERROR:
            return action.payload.project;

        default : 
            return state;
    }
}
