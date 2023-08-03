import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        setContact: (state, action) => {
            state.contacts = [action.payload, ...state.contacts];
        },
        setDelete: (state, action) => {
            state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
            );
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }, 
        setFromStorage: (state, action) => {
            state.contacts = action.payload
        }
    }
});

export const {setContact, setDelete, setFilter, setFromStorage} = contactsSlice.actions;
export const contactDetailsReducer = contactsSlice.reducer;


// export const contactDetailsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CONTACT: {
//       return {
//         ...state,
//         contacts: [action.payload, ...state.contacts],
//       };
//     }
//     case SET_FILTER: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     case SET_DELETE: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case ADD_CONTACTS_FROM_STORAGE: {
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setContact = (payload) => {
//     return {
//         type: SET_CONTACT,
//         payload: payload
//     }
// };

// export const setFilter = (filter) => {
//     return {
//         type: SET_FILTER,
//         payload: filter
//     }
// };

// export const setDelete = (contactId) => {
//     return {
//         type: SET_DELETE,
//         payload: contactId
//     }
// };
