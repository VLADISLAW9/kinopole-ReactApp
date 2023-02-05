import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filmStateActions } from '../store/slices/filmsState.slice'
import { filterActions } from '../store/slices/filter.slice'
import { cartoonIdAction } from '../store/slices/getCartoonId'
import { filmIdAction } from '../store/slices/getFilmId.slice'

const actions = {
	...filmIdAction,
	...filterActions,
	...filmStateActions,
	...cartoonIdAction,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
