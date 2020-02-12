import React from 'react';
import Subscription from './Subscription'
import SubscriptionOverview from './SubscriptionOverview'
import {PLAN_COSTS, PLAN_NAMES, CURRENCIES} from '../Server/data'
import {connect} from 'react-redux'
import * as Actions from '../redux/actions'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      loading: true,
      error: '',
      prevData:{}
    }

    this.onPlanChange = this.onPlanChange.bind(this);
    this.onSeatsChange = this.onSeatsChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onHandlePrevData = this.onHandlePrevData.bind(this);
  }

  componentDidMount(){
    this.props.getData()
      .then(() => {
        this.setState({
          loading: false
        })
      })
  }

  onPlanChange = (data) =>{
    this.props.onPlanChange(data);
  }

  onSeatsChange = (data) => {
    this.props.onSeatsChange(data);
  }

  onUpdate = (data) => {
    this.props.onUpdate(data);
  }

  onBack = () =>{
    this.props.onBack()
  }

  onHandlePrevData = (data) =>{
    this.props.onHandlePrevData(data);
  }

  render(){
    return(
      <div>
        {
          this.state.loading 
            ? <div className="loading">Loading...</div> 
            : 
            <div>
              {
                this.props.store.overview 
                  ? <SubscriptionOverview
                      store={this.props.store}
                      back={this.onBack} />
                  : <Subscription 
                      store={this.props.store}
                      plans={PLAN_NAMES}
                      costs={PLAN_COSTS}
                      currencies={CURRENCIES}
                      handlePlanChange={this.onPlanChange}
                      handleSeatsChange={this.onSeatsChange}
                      handlePrevData={this.onHandlePrevData}
                      update={this.onUpdate} />
              }
              </div>
            } 
      </div>
      
    );
  }
}


const mapStateToProps = (state) =>({
  store: state.subscriptionReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(Actions.getData()),
    onPlanChange: (data) => dispatch(Actions.planChange(data)),
    onSeatsChange: (data) => dispatch(Actions.seatsChange(data)),
    onUpdate: (data) => dispatch(Actions.update(data)),
    onBack: () => dispatch(Actions.back()),
    onHandlePrevData: (data) => dispatch(Actions.prevData(data))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
