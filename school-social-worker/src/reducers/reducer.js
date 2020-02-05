export const initialState = {
    isLoading: false,
    isLoggedIn: false,
    id: null,
    role_id: null,
    email: '',
    name: '',
    org_name: ''
  };
  
  export const reducer = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
      case "DATA_START_LOADING":
        return {
          ...state,
          isLoading: true
        };
      case "REGISTER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          id: action.payload.id,
          name: action.payload.name,
          org_name: action.payload.org_name,
          role_id: action.payload.role_id

        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          email: action.payload.email
        };
      case "SET_EMAIL":
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          email: action.payload
        };
        case "LOGIN_FAILED":
          return {
            ...state,
            isLoading: false
          };
      // NEW CASE HERE
      case "TOGGLE_EDITING":
        return {
          ...state,
          editing: !state.editing
        };
      case "SIGN_OUT":
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  