import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { withRouter } from 'react-router'
import '../Styles/SearchBar.css'

class SearchBar extends Component {
  state = {
    value: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.value.replace(/\s/gi) !== '') {
      this.props.history.push(`/search/${this.state.value}`)
    }
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          id="input-field"
          type="text"
          placeholder="Search Movies..."
          className="mr-sm-2"
          onChange={e => this.setState({ value: e.target.value })}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    )
  }
}
export default withRouter(SearchBar)
