const matchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MATCH':
            return action.payload;
        case 'UNSET_MATCH':
            return {};
        default:
            return state;
    }
};

// data will be on the redux state at:
// state.data
export default matchReducer;