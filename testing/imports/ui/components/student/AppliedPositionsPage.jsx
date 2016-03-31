import React from 'react';
import {PositionGenericCard} from '../positions/PositionGenericCard.jsx';

export default class AppliedPositionsPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let getPositions= ( )=>{
          if (this.props.user &&  this.props.user.positionArray){
             return this.props.user.positionArray.map((position)=>{
                  return(
                      <PositionGenericCard key={position._id} position={position} />
                  )
              })
          }else{
              return(
                  <div>
                      <h4>You havn't applied to any position yet!</h4>
                  </div>
              )
          }
        };
        return (
           <div>
               <h4>Your Applied Positions:</h4>
               {getPositions()}
           </div>
        )
    }
}
AppliedPositionsPage.PropTypes = {user: React.PropTypes.object};