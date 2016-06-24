Template.partyPage.onCreated(function () {
  var self = this;

  self.autorun(function () {
    var slug = FlowRouter.getParam('slug');

    self.subscribe('singleParty', slug, {
      onReady: function () {
        var post = Parties.findOne();
        self.subscribe('comments', post._id);
      }
    });
  });
});

Template.partyPage.onCreated(function () {
  Session.set('documentTitle', '808party');
});

Template.partyPage.helpers({
  party: function () {
    return Parties.findOne();
  },
  ownParty: function () {
    if (Meteor.userId() && Parties.findOne().userId == Meteor.userId())
      return true;
  },
  comments: function () {
    return Comments.find();
  },
  time: function (t) {
    var fmt = "HH:mm, DD MMM YYYY"
    return moment(t).format(fmt);
  },
  slug: function () {
    return FlowRouter.getParam('slug');
  },
	upvoted: function(upvoters) {
		var username = Meteor.user().username;
    var a = upvoters || [];
    var i = a.indexOf(username);
		var r = '';

    if (i >= 0) {
      r = 'upvoted';
    };

		return r;
	},
	upvoters: function() {
		return Parties.findOne({slug: FlowRouter.getParam('slug')}).upvoters;
	}
});
