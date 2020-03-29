import React, {Component} from 'react'
import Transaction from '../../Components/Transaction/Transaction'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionType from '../../Store/action'
class Transactions extends Component{

    state={
        filterBy: null
    }

    componentDidMount(){
        if(this.props.match.params.type){
            this.setState({filterBy:this.props.match.params.type})
        }
        axios.get('/bankAccount')
        .then(response => {
            this.loadData(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    loadData = (data) => {
        let list = data;
            console.log("filetring by"+this.state.filterBy)
            if(this.state.filterBy){
                if(this.state.filterBy==='W')
                {console.log("listing withdrawals")
                 list = data.filter(item => item["Withdrawal AMT"]!=="");
                 console.log(list.length)}
                else if(this.state.filterBy==='D')
                { 
                    console.log("listing Deposits") 
                    list = data.filter(item => item["Deposit AMT"]!=="");
                    console.log(list.length)}
                }
                this.props.loadTransactionDetails(list);
            
            
    }
    handleClick = (balance) =>{
        this.props.history.push('/details/'+balance)
    }

    render(){
        const transactions = this.props.fileterdList.map( data => {
            return (<Transaction key={data["Balance AMT"]}
                amount={data["Deposit AMT"]?data["Deposit AMT"]:data["Withdrawal AMT"]}
                transaction_details={data["Transaction Details"]}
                date={data.Date}
                type={data["Deposit AMT"]?"Deposit":"Withdrawal"}
                click={(event)=>this.handleClick(data["Balance AMT"])}
            />)
        })
        return (<div>
            <ul className="w3-ul">
                {transactions}
            </ul>
        </div>
            )
    }

    
}

const mapStateToProps = state => {
    return {
        fileterdList: state.transantionList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTransactionDetails: (transactions) => dispatch({type: actionType.SET_LIST,transactions }),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transactions)