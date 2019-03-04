import Issues from '../../components/Issues/Issues'
import withLoader from '../../hoc/withLoader'
import { GET_ISSUES_REQUEST } from '../../redux/modules/issues/types'

export default withLoader(GET_ISSUES_REQUEST)(Issues)
