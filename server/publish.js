Meteor.publish('recipes', function() {
  console.log(this.userId);
  return Recipes.find({author: this.userId});
})
