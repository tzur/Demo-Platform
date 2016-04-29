import React from 'react';
import PositionForm from '../positions/PositionForm.jsx';
import StartupPositionsContainer from '../../containers/position/StartupPositionContainer.jsx';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import StudentCard from '../student/StudentCard.jsx';
import EditModal from '../startup/EditModal.jsx';
import {editPosition, deletePosition} from '../../../api/client/modules/position';
import ActionDelete from '../../../../node_modules/material-ui/lib/svg-icons/action/delete';
import {Row, Col} from 'react-bootstrap';
export default class Startup extends React.Component {
    constructor(props){
        super(props);
    }

    appliedStudents(position){
        if (position.appliedUsers){
            return position.appliedUsers.map((user)=>{
                return(
                    <StudentCard key={user._id} user={user} />
                )
            })
        }else{
            return <p>No one has applied yet.</p>
        }
    }
    handleEdit(newPosition){
        editPosition(newPosition, (err,result)=>{
            if (err){
                console.log("error" + err);
            }else{
                console.log("Updated successfully");
            }
        })
    }
    handleDelete(position){
        deletePosition(position, (err,result)=>{
            if (err){
                console.log("error" + err);
            }else{
                console.log("Deleted successfully");
            }
        })
    }
    cardActions(position){
        return (
            <Row>
                <Col md={1} xs={2}>
                    <EditModal onSubmit={this.handleEdit.bind(this)} position={position}/>
                </Col>
                <Col md={2} xs={2}>
                    <FlatButton label="Delete"
                                labelStyle={{textTransform: "initial", fontSize: "15px"}}
                                primary={true}
                                onClick={this.handleDelete.bind(this,position)}
                                icon={<ActionDelete/>}
                    />
                </Col>

            </Row>

        )
    }
    render(){
        return(
            <div>
                <h1 className="text-center">Hello {this.props.user.companyName} Startup!!</h1>

                <PositionForm startup={this.props.user}/>
                <StartupPositionsContainer startup={this.props.user}
                                           cardActions={this.cardActions.bind(this)}
                                           appliedStudents={this.appliedStudents}/>
            </div>
        )
    }
}
Startup.PropTypes = {user: React.PropTypes.object};