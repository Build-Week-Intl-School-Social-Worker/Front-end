export const initialState = {
    studentList: [
        { 
        name: 'jessie',
        age: 15
        },
        {name: 'shawn',
        age: 16
        },
        {name: 'jimmy',
        age: 10
        },
        {name: 'abraham',
        age: 12
        },
        {name: 'jorge',
        age: 11
        },
        {name: 'steve',
        age: 16
        },
        {name: 'lily',
        age: 14
        },
        {name: 'sarah',
        age: 11
        },
        {name: 'becky',
        age: 13
        },
    ],
    isLoading: false,
    isLoggedIn: false,
    id: null,
    role_id: null,
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
          isLoggedIn: true
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
  