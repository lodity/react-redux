const defaultState = {
	customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		// TODO Спросить у Макса про {
		// 				...state,
		// 				customers: [...state.customers, action.payload],
		// 			}
		case ADD_CUSTOMER:
			return {
				...state,
				customers: [...state.customers, action.payload],
			};
		case REMOVE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					(customer) => customer.id !== action.payload
				),
			};

		default:
			return state;
	}
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
	type: REMOVE_CUSTOMER,
	payload,
});
