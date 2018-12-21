import React from 'react';
import { Link } from 'react-router-dom';

class TicketPurchaseModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal (e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <div>
            <h1>Purchase Tickets</h1>
            <p>Ticket purchase info goes here</p>
            <button onClick={this.closeModal}>Close</button>
          </div>
        </div>
      )
    }
  }


}

export default TicketPurchaseModal;
