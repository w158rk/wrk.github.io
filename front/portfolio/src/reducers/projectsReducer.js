import { FETCH_PROJECTS_SUCCESS } from '../constants';

const init = []

export default function projectsReducer(state = init, action){

    console.log("type : ", action.type);
    console.log("payload : ", action.payload);    

    switch (action.type) {
        /* fetch */
        case FETCH_PROJECTS_SUCCESS:
            return action.payload.projects;

        default : 
            return state;
    }
}
