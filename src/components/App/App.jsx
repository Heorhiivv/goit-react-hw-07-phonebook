import React, {Component} from "react"
import Title from "../../shared/Title/Title"
import ContactForm from "../ContactForm/ContactForm"
import Filter from "../Filter/Filter"
import ContactsList from "../ContactsList/ContactsList"
import "./App.css"

import {connect} from "react-redux"
import contactsOperations from "../../redux/contactsOperations";

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <>
        <Title />
        <ContactForm />
        <Filter />
        <ContactsList />
      </>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
