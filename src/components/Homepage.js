import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class componentName extends Component {
     state = {
          isOpen: false
     }
     toggle = () => {
          this.setState({
               isOpen: !this.state.isOpen
          })
     }
     render() {
          return (
               <div>
                    <h1>Homepage</h1>
                    <div>
                         <Button color="danger" onClick={() => this.toggle()}>Button</Button>
                         <Modal isOpen={this.state.isOpen} toggle={() => this.toggle()}>
                              <ModalHeader toggle={() => this.toggle()}>Modal title</ModalHeader>
                              <ModalBody>

                              </ModalBody>
                              <ModalFooter>
                                   <Button color="primary" onClick={() => this.toggle()}>Do Something</Button>{' '}
                                   <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                              </ModalFooter>
                         </Modal>
                    </div>
               </div>
          )
     }
}
