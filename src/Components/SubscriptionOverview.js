import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class SubscriptionOverview extends React.Component{
    render(){
        return(
            <Form id="overview">
                <Row className="row">
                    <Col className="subscription-overview">
                        <h4>Previous Subscription</h4>
                        <Row>
                            <Form.Label className="old-label">Plan</Form.Label>
                            <div className="old-value">{this.props.store.prevData.name}</div>
                        </Row>
                        <Row>
                            <Form.Label className="old-label">Seats</Form.Label>
                            <div className="old-value">{this.props.store.prevData.seats}</div>
                        </Row>
                        <Row>
                            <Form.Label className="old-label">Price</Form.Label>
                            <div className="old-value">${this.props.store.prevData.cost}</div>
                        </Row>
                    </Col>
                    
                    <Col className="subscription-overview">
                        <h4>Updated Subscription</h4>
                        <Row>
                            <Form.Label className="new-label">Plan</Form.Label>
                            <div className="new-value">{this.props.store.name}</div>
                        </Row>
                        <Row>
                            <Form.Label className="new-label">Seats</Form.Label>
                            <div className="new-value">{this.props.store.seats}</div>
                        </Row>
                        <Row>
                            <Form.Label className="new-label">Price</Form.Label>
                            <div className="new-value">${this.props.store.cost}</div>
                        </Row>
                    </Col>
                </Row>
                <Button id="back-button" variant="primary" onClick={this.back}>Back</Button> 
            </Form>
        )
    }

    back = () => {
        this.props.back();
    }
}

export default SubscriptionOverview;
