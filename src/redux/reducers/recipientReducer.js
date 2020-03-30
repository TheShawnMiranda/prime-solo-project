const recipientReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_RECIPIENT_DATA':
            return action.payload;
        case 'UNSET_DATA':
            return {};
        default:
            return state;
    }
};

// data will be on the redux state at:
// state.data
export default recipientReducer;