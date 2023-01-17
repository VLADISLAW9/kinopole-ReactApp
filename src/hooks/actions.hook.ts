import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { filmIdAction } from "../store/slices/getFilmId.slice";

const actions = {
	...filmIdAction,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}