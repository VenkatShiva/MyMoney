// Initial State
const initialState = {
    loggedIn: false,
    profile: {
        name:null,
        email:null,
        username:null,
        password:null
    }
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN': 
        return Object.assign({},state ,{loggedIn : action.logIn});
      default: 
        return state;
    }
};
export default authReducer;