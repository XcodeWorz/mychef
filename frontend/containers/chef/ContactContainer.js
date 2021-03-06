import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as chefActions from '../../actions/chef'
import Contact from '../../components/chef/Contact'

class ContactContainer extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.load = this.load.bind(this)
  }
  render() {
    return (
      <Contact
        loading={this.props.loading}
        contact={this.props.contact}
        load={this.load}
        submit={this.submit}
        lang={this.props.lang}
      />
    )
  }
  submit(contact) {
    this.props.actions.updateUser(
      contact.name,
      contact.email,
      contact.telephone,
      contact.address,
      this.props.token
    )
  }
  load() {
    this.props.actions.fetchUser(this.props.token)
  }
}

const mapStateToProps = state => {
  const user = state.chef.contact
  return {
    contact: {
      name: user.user_filled_name || user.google_user_name || '',
      email: user.user_filled_email || user.google_user_name || '',
      telephone: user.user_filled_telephone || '',
      address: user.user_filled_address || ''
    },
    loading: state.chef.isProcessingRequest,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(chefActions, dispatch)
})

ContactContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactContainer
)

export default ContactContainer
