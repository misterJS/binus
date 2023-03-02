// ** Reducers Imports
import auth from './authentication'
import garden from './garden'
import goBuzz from './goBuzz'
import profile from './profile'
import transaction from './transaction'

const rootReducer = {
    auth,
    garden,
    goBuzz,
    profile,
    transaction
}

export default rootReducer
