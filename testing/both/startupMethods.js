
Meteor.methods({
  addPosition(position){
      let positionId;
      try{
        positionId =Positions.insert({position});
      }catch(e){
          return e;
      }
      return positionId;
  }
});
