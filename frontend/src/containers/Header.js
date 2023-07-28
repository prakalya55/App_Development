import { connect } from 'react-redux'
import Header from '../co/Header'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(Header)
