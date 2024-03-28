export const inetialState = {
  users: [{ id: 1, username: 'Imran' }, { id: 2 }],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":

      return {
        ...state,
        users: [...state.users, action.payload],
      };
    
  }
}