const initialState = {
    email: 'tehreemiqbal91@gmail.com',
    password: 'd22f5163',
    name: 'Tehreem Iqbal',
    token: null,
};
  
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        const { email, password } = action.payload;
        if (email === state.email && password === state.password) {
          localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NjAzNDIyMCwiaWF0IjoxNjQ2MDM0MjIwfQ.kNKEq6ndNuwmuGsXCZKTTZkOYlwYfkw8lNL9IOQ1Uy8'
          );
          return {
            ...state,
            token: localStorage.getItem('token'),
          };
        }
        case "LOGOUT" :
          return{
            token: localStorage.removeItem("token"),
          };
      default:
        return {
          ...state,
          token: localStorage.getItem('token')
            ? localStorage.getItem('token')
            : null,
        };
    }
};

export default AuthReducer;
  