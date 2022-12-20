import mock from './mock'
import './tables/datatables'
import './autoComplete/autoComplete'
import './apps/calendar'
import './apps/userList'
import './pages/profile'
import './cards/card-analytics'
import './cards/card-statistics'
import './jwt'

mock.onAny().passThrough()
