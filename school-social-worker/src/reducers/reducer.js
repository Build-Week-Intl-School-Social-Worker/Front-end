export const initialState = {
    isLoading: false,
    isLoggedIn: false,
    id: null,
    role_id: null,
    email: null,
    name: '',
    org_name: '',
    phone: null
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
      case "SET_USER_DATA":
        return {
          ...state,
          isLoading: false,
          email: action.payload.email,
          id: action.payload.id,
          role_id: action.payload.role_id,
          name: action.payload.name,
          phone: action.payload.phone,
          org_name: action.payload.org_name
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
          initialState
        };
      default:
        return state;
    }
  };
  