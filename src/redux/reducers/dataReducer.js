const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DATA':
            console.log(action.payload);
            return action.payload;
        case 'UNSET_DATA':
            return {};
        default:
            return state;
    }
};

// data will be on the redux state at:
// state.user
export default dataReducer;