import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Subscription extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputChanged: false,
            planName: this.props.store.plan,
            seats: this.props.store.seats,
            cost: this.props.store.cost,
            prevData:{}
        }

        this.handlePlanChange = this.handlePlanChange.bind(this);
        this.handleSeatsChange = this.handleSeatsChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            prevData: this.props.store
        })
    }

    componentWillUnmount(){
        let prevData = this.state.prevData;
        this.props.handlePrevData(prevData);
    }

    render(){
        return(
            <Form id="subscription">
                <h2>Subscription</h2>
                <div className="product">
                    <Form.Group className="edit-plan">
                        <Form.Control 
                            id="plan-dropdown" 
                            as="select" 
                            defaultValue={this.props.store.name}
                            onChange={this.handlePlanChange} >

                            {Object.keys(this.props.plans).map((val, key)=>{
                                return <option key={key}>{this.props.plans[val]}</option>
                            })}
                        </Form.Control>
                        <Form.Label>Plan</Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="edit-seats">
                        <Form.Control 
                            id="seatsInput" 
                            as="input" 
                            defaultValue={this.props.store.seats}
                            onChange={this.handleSeatsChange}></Form.Control>
                        <Form.Label>Seats</Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="price">
                        <div id="price-value" 
                                value={this.props.store.cost}>${this.props.store.cost}</div>
                        <Form.Label className="label">Price</Form.Label>
                    </Form.Group>
                </div>

                <Button 
                    id="submit-button" 
                    variant={this.state.inputChanged ? "primary" : "secondary"}
                    disabled={!this.state.inputChanged}
                    onClick={this.update}>
                        Update Subscription
                </Button> 
            </Form>
        );
    }

    handlePlanChange = (e) => {
        let plan = Object.keys(this.props.plans).find((p) => {
            if(e.target.value === this.props.plans[p]){
                return p;
            }
            else return ''
        })
        this.setState({
            inputChanged: true,
            planName: plan
        });

        let newData = {
            data:{
                plan: plan,
                seats: this.state.seats
            }
        }
        this.props.handlePlanChange(newData);
    }

    handleSeatsChange = (e) => {
        if(isNaN(Number(e.target.value)) || Number(e.target.value) < 0 || isNaN(parseInt(e.target.value))){
            this.setState({
                inputChanged: false,
                seats: ''
            })
        }
        else{
            this.setState({
                inputChanged: true,
                seats: e.target.value
            });
            let newData = {
                data:{
                    plan: this.state.planName,
                    seats: e.target.value
                }
            }
            this.props.handleSeatsChange(newData);
        }
    }

    update = () => {
        let newData = {
            data:{
                plan: this.state.planName,
                seats: this.state.seats,
            }
        };
        this.props.update(newData);
    }
}

export default Subscription;