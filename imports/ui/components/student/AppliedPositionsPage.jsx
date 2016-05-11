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
                      <PositionGenericCard key={position._id} position={position} applyText={position.applyText} />
                  )
              })
          }else{
              return(
                  <div>
                      <h4 className="text-center">You havn't applied to any position yet!</h4>
                  </div>
              )
          }
        };
        return (
           <div>
               {getPositions()}
           </div>
        )
    }
}
AppliedPositionsPage.PropTypes = {user: React.PropTypes.object};