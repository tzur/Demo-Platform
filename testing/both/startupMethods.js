
Meteor.methods({
  addPosition(position){
      let positionId;
      try{
        positionId =Positions.insert({
            companyId: position.companyId,
            companyName: position.companyName,
            email: position.email,
            jobTitle: position.jobTitle,
            position: position.position,
            description: position.description
        });
      }catch(e){
          return e;
      }
      return positionId;
  }
});
