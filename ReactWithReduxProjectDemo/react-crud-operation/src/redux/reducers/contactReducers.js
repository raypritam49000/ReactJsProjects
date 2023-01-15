const initialState = [
    {
        id: 1,
        name: "Pritam Ray",
        email: "ray@gmail.com",
        number: 768333333,
    },
    {
        id: 2,
        name: "Amit Kumar",
        email: "amit@gmail.com",
        number: 768284233,
    },
    {
        id: 3,
        name: "Omi Verma",
        email: "omiverma@gmail.com",
        number: 893333333,
    },
    {
        id: 4,
        name: "Chandan Kumar",
        email: "chandan123@gmail.com",
        number: 894584233,
    }
]

const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Contact":
            state = [...state, action.payload];
            return state;
        case "Update_Contact":
            const updateContact = state.map((contact) =>
                contact.id === action.payload.id ? action.payload : contact
            );
            state = updateContact;
            return state;
        case "Delete_Contact":
            const filterContacts = state.filter((contact) =>
                contact.id !== action.payload && contact
            );
            state = filterContacts;
            return state;
        default:
            return state;
    }
}

export default contactReducers;