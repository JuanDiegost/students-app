import React, { Component, Fragment } from 'react'
import ItemStudent from './ItemStudent';

export default class ListStudents extends Component {
  
    render() {
    
    const { listStudent } = this.props;
    return (
      <Fragment>
        {listStudent.map(item=>(<ItemStudent key={item._id} student={item} />))}
      </Fragment>
    )
  }
}
