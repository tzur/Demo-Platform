import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import Test from '../imports/ui/components/Test.jsx';
import {renderRoutes} from '../imports/routes/routes.jsx';
import UserStore from '../imports/api/client/stores/UserStore';
Meteor.startup(()=>{

    render(renderRoutes(), document.getElementById('root-react'));
});