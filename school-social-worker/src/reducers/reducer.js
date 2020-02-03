export const initialState = {
    title: "Coming from Redux Store!!! 🐲",
    editing: false
  };
  
  export const reducer = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      // NEW CASE HERE
      case "TOGGLE_EDITING":
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  