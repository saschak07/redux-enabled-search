import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../Store/action'
import './TransactionDetails.css'
class TransactionDetails extends Component{

componentDidMount(){
  if(this.props.match.params.balance){
    this.props.loadTransaction(this.props.match.params.balance)
  }
}
render(){
   const transaction=this.props.fileterdList
   console.log(transaction) 
   const details = transaction?<div className="w3-card-4 container" style={{width:"50%"}}>
   <header className="w3-container w3-blue">
     <h1>Transaction Details</h1>
   </header>
   <div className="w3-container">
     <p>Account no: {transaction["Account No"]}</p>
     <p>Date: {transaction.Date}</p>
     <p>Transaction Details: {transaction["Transaction Details"]}</p>
     <p>Value Date: {transaction["Value Date"]}</p>
     <p>Withdrawal AMT: {transaction["Withdrawal AMT"]}</p>
     <p>Deposit AMT: {transaction["Deposit AMT"]}</p>
     <p>Balance AMT: {transaction["Balance AMT"]}</p>
   </div>

   <footer className="w3-container w3-blue">
     <h5>{transaction["Deposit AMT"]?"Deposit":"Withdrawal"}</h5>
   </footer>
 </div>:<h1>Loading!!!</h1>
    return(<div>{details}</div>)
    
}
}

const mapStateToProps = state => {
    return {
        fileterdList: state.fileredList
    };
};

const mapDispatchToProps = dispatch => {
    return {
      loadTransaction: (balance) => dispatch({type: actionType.FILTER_LIST,balance }),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionDetails)