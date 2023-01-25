import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { genreActions } from "../store/slices/genre.slice";
import { filmIdAction } from "../store/slices/getFilmId.slice";

const actions = {
	...filmIdAction,
	...genreActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}