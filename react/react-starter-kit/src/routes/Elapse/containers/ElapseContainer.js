import { connect } from 'react-redux'
import { plus } from './../modules/elapse'
import { requestData } from '../../../store/request'

import Elapse from './../components/Elapse'

const mapDispatchtoProps = {
  plus,
  requestData
}

const mapStateToProps = (state) => ({
  elapse: state.elapse,
  request: state.request
})

export default connect(mapStateToProps, mapDispatchtoProps)(Elapse)
