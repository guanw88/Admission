import React from 'react';
import { Link } from 'react-router-dom';

class TicketPurchaseModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
    this.state = {ticketsPurchased: 1};
    this.updateTicketCount = this.updateTicketCount.bind(this);
  }

  closeModal (e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  updateTicketCount(e) {
    debugger
    this.setState({
      ticketsPurchased: e.target.value
    });
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <div onClick={this.closeModal} className="ticket-purchase-modal-backdrop"></div>
          <div className="ticket-purchase-modal">
            <div className="ticket-purchase-modal-header">
              <div></div>
              <p>Register</p>
              <button onClick={this.closeModal} className="ticket-purchase-modal-close-button">Close</button>
            </div>
            <div className="ticket-purchase-modal-body">
              <p className="ticket-purchase-modal-sell-by-text">Sales end on January 23</p>
              <div className="ticket-purchase-modal-boxes">
                <div className="ticket-purchase-modal-box">
                  <div>
                    <p className="ticket-purchase-modal-box-name">General Admission</p>
                    <p className="ticket-purchase-modal-box-price">Free</p>
                  </div>
                  <select onChange={this.updateTicketCount} name="ticket-purchase-count">
                    <option value="1" selected={this.state.ticketsPurchased === "1"}>1</option>
                    <option value="2" selected={this.state.ticketsPurchased === "2"}>2</option>
                    <option value="3" selected={this.state.ticketsPurchased === "3"}>3</option>
                    <option value="4" selected={this.state.ticketsPurchased === "4"}>4</option>
                    <option value="5" selected={this.state.ticketsPurchased === "5"}>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="ticket-purchase-modal-footer">
              <p className="ticket-purchase-modal-footer-text">QTY: {this.state.ticketsPurchased}</p>
              <p className="ticket-purchase-modal-footer-text">FREE</p>
              <div></div>
              <button className="ticket-purchase-modal-footer-button">Checkout</button>
            </div>
          </div>
        </div>
      )
    }
  }


}

export default TicketPurchaseModal;
