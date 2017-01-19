import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'
import { plus } from '../../Elapse/modules/elapse'

import Counter from '../components/Counter'

const mapDispatchToProps = {
  increment: () => increment(1),
  plus,
  doubleAsync
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    counter1: state.counter1,
    elapse1: state.elapse1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
