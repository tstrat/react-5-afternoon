import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateRealEstateAgent } from '../../ducks/reducer';
import { connect } from 'react-redux';
class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={e => this.props.updateRealEstateAgent(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={e => this.props.updateRealEstateAgent(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        realEstateAgent: state.found
    }
}
export default connect(mapStateToProps, {updateRealEstateAgent})(WizardFive);