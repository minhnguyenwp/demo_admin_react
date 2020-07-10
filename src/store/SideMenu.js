import $ from 'jquery';
const toggleMenu = 'TOGGLE_MENU';
const toggleMobileMenu = 'TOGGLE_MOBILE_MENU';

const initialState = { 
  smallMenu: false,
  openMobileMenu: false
};



export const actionCreators = {
  toggleSideMenu: () => {
    let winWidth = $( window ).width(); 
    //console.log('winWidth', winWidth);

    if (winWidth < 979) {
      return { type: toggleMobileMenu };
    } else {
      return { type: toggleMenu };
    }
    
  },
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === toggleMenu) {
    return { ...state, smallMenu: !state.smallMenu};
  }

  if (action.type === toggleMobileMenu) {
    return { ...state, openMobileMenu: !state.openMobileMenu};
  }

  return state;
};
