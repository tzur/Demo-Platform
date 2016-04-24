import React from 'react';
import {Row, Col, Button, Input} from 'react-bootstrap';
import FlatButton from '../../../../node_modules/material-ui/lib/flat-button';
import TextField from '../../../../node_modules/material-ui/lib/text-field';
import RadioButton from '../../../../node_modules/material-ui/lib/radio-button';
import RadioButtonGroup from '../../../../node_modules/material-ui/lib/radio-button-group';
import {CONSTANTS} from '../../../api/client/modules/langauage';

export const PositionFormView = props =>(
  <form>
      <Row>
          <Col md={4} xs={4}>
          </Col>
          <Col md={4} xs={4}>
              <h4>Choose Position:</h4>
              <RadioButtonGroup name="position" onChange={props.handlePosition} valueSelected={props.position} >
                  <RadioButton
                      value={CONSTANTS.FULL_TIME}
                      label="Full Time"
                  />
                  <RadioButton
                      value={CONSTANTS.PARTIAL_TIME}
                      label="Partial-Time"
                  />
                  <RadioButton
                      value={CONSTANTS.LIMITED_FULL_TIME}
                      label="Limited Full Time"
                  />
              </RadioButtonGroup>

          </Col>
      </Row>
      <Row>
          <Col md={4} xs={4}>
          </Col>
          <Col md={4} xs={4}>
              <TextField hintText="Job Title"
                         floatingLabelText="Job Title"
                         value={props.jobTitle}
                         onChange={props.handleJobTitle} />
          </Col>
      </Row>
      <Row>
          <Col md={4} xs={4}>
          </Col>
          <Col md={4} xs={4}>
              <TextField hintText="Job Description"
                         floatingLabelText="Job Description"
                         value={props.description}
                         multiLine={true}
                         rows={4}
                         fullWidth={true}
                         onChange={props.handleDescription} />
          </Col>
      </Row>
      <Row>
          <Col md={4} xs={4}>
          </Col>
          <Col md={4} xs={4}>
              {props.disableSubmitBtn? null :
                  <Button id="submitBtn" bsStyle="primary" type="submit" onClick={props.handleSubmit}>Submit</Button>
              }
          </Col>
      </Row>
  </form>
);

