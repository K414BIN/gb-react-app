const initialState = {
    user: {},
}

const chatReducer= ( state = initialState, action ) => {
    switch (action.type)
    {
        case "CHANGE_USER":
            return {

                user: action.payload,

            };
        default : return state;
    }
};

describe("test chat reducer",()=>{
    test('reducer return initial state',()=>{
        const result = chatReducer (undefined,{type:''})
        expect(result).toEqual(initialState )
    })
})