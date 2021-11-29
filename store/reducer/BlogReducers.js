import {FETCH_BLOG, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAIL} from '../types/Types';

const initialState = {
  blog: [],
  loading: false,
  error: '',
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.user,
        loading: false,
      };
    case FETCH_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default blogReducer;
