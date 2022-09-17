const initialState = {
    user: {},
}

const chatReducer= ( state = initialState, action ) => {
    switch (action.type)
    {
        case "CHANGE_USER":
            return {

                user: "Daddy"
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

describe("test chat reducer for non-zero ",()=>{
    test('reducer return  payload',()=>{
        const result = chatReducer (undefined,{type:"CHANGE_USER"})
        expect(result).toEqual({user:"Daddy"});
    })
})