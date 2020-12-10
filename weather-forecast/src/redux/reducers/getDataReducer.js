import { CURRENT_LOCATION } from '../actions/actions';
import { getUserLocationHandler } from '../../services';

const initialState = {
    initialLocation: '',
};

export const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_LOCATION:
            const { city, longitude, latitude } = action.payload;
            return {
                ...state,
                initialLocation: {
                    city,
                    longitude,
                    latitude,
                }
            }
        default: return state
    }
}

export const getCurrentLocation = () => {
        return async (dispatch) => {
        const initialLocation = await getUserLocationHandler();
        console.log(initialLocation);
        dispatch({ type: CURRENT_LOCATION, payload: initialLocation })
    }
}