export const rootReducer = (state = {
    reservations: [],
    customers: [],
    hosts: []
}, action) => {
    switch (action.type) {
        case 'CREATE_RESERVATION':
            return state
        default:
            return state
    }
}