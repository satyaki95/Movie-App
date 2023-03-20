import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES, FPAGE, LOADING, MODAL_ITEM, MOVIE_LIST, MPAGE, SEARCH } from "./action";

const initialState = {
    data:"Gyan",
    list:[],
    loading:false,
    favorites:[],
    modal:"",
    mpage:0,
    fpage:0
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading:!state.loading,
                favorites:localStorage.getItem("favMovies")?JSON.parse(localStorage.getItem("favMovies")):[]
            }
        case MOVIE_LIST:
            return {
                ...state,
                list: [...action.payload],
                loading:false
            }
        case SEARCH:
            return {
                ...state,
                list: [...action.payload],
                loading:false
            }
        case MODAL_ITEM:
            if(state.modal)return{
                ...state,
                modal:""
            }
            return {
                ...state,
                modal:action.payload
            }
        case ADD_TO_FAVORITES:
            let add_fav = [{...action.payload},...state.favorites]
            localStorage.setItem("favMovies",JSON.stringify(add_fav));
            return {
                ...state,
                favorites:add_fav
            }
        case DELETE_FROM_FAVORITES:
            let remove_fav = state.favorites.filter((data)=>data.id!==action.payload)
            localStorage.setItem("favMovies",JSON.stringify(remove_fav));
            return {
                ...state,
                favorites: remove_fav
            }
        case MPAGE :
            return {
                ...state,
                mpage:action.payload
            }
            case FPAGE :
                return {
                    ...state,
                    fpage:action.payload
                }
        default:
            return state;
    }
}