if (!Accounts.findUserByUsername('davey')) {
  var now = new Date().getTime();

  daveyId = Accounts.createUser({
    profile: {
      name: 'Davey Shindig'
    },
    username: "davey",
    emails: [
      { address: "davey@example.com", verified: true }
    ],
    password: "123456",
  });

  Roles.addUserToRoles( daveyId ,  ["admin"] );
};

if (Podcasts.find().count() === 0) {
  var davey = Accounts.findUserByUsername( 'davey' );

  var postId = Podcasts.insert({
    title: '808 Mixtapes — v. 107',
    mp3: { 
      "fileId" : "oobLXtL7bAWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '107',
    host: 'Super CW',
    coverImage: { 
      "fileId" : "dobhXtL7bAWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-107.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 94',
    mp3: { 
      "fileId" : "oobLXtL7kAWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '94',
    host: 'Davey Shindig',
    coverImage: { 
      "fileId" : "oobfXtLjbAWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-94.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 19',
    mp3: { 
      "fileId" : "oobLgtL7bAWlJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '19',
    host: 'Davey Shindig',
    coverImage: { 
      "fileId" : "oobLXtL7biWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-19.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 95',
    mp3: { 
      "fileId" : "oobLXqL7bAWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '95',
    host: 'Haircuts for Men',
    coverImage: { 
      "fileId" : "oobLXtL7wAWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-95.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['wub', 'glitch-hop', 'rap']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 96',
    mp3: { 
      "fileId" : "oobLXtL7bAWeJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '96',
    host: 'Jon Jon',
    coverImage: { 
      "fileId" : "oobLXtL7bAWirqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-96.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['moombahton', 'dub', 'dubstep']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 97',
    mp3: { 
      "fileId" : "oobLXtL7btWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '97',
    host: 'Weaver Beats',
    coverImage: { 
      "fileId" : "oobLXtL7byWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-97.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['wub', 'glitch-hop', 'rap']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 098',
    mp3: { 
      "fileId" : "oobLXtL7uAWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '098',
    host: 'The ADHDJ',
    coverImage: { 
      "fileId" : "oobLXtL7bAiiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-098.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['synth-pop', 'wave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 100',
    mp3: { 
      "fileId" : "oobLXtL7oAWiJqyzS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '100',
    host: 'MEDS',
    coverImage: { 
      "fileId" : "oobLXtL7bAWpJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-100.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['darkwave', 'minimal']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 101',
    mp3: { 
      "fileId" : "oobLXtL7bAxiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '101',
    host: 'Haircuts for Men',
    coverImage: { 
      "fileId" : "oobLXtL7bcWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-101.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['ambient', 'techno', 'dub']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 102',
    mp3: { 
      "fileId" : "oobLXtL7bvWiJqyHS", 
      "url" :  '/audio/ff.mp3'
    },
    episodeNumber: '102',
    host: 'Kowai Kowai',
    coverImage: { 
      "fileId" : "oobLXtL7bbWiJqyHS", 
      "url" : "https://s3-us-west-2.amazonaws.com/omgcast/orionjs/55f237e6-1241-4541-a25c-7bda21c1132f.jpg", 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['dream-pop', 'chillwave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 103',
    mp3: { 
      "fileId" : "oobLXtL7bnWiJqyHS", 
      "url" :  '/audio/SexyTerrorist.mp3'
    },
    episodeNumber: '103',
    host: 'Davey Shindig',
    coverImage: { 
      "fileId" : "oobLXtL7bmWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-103.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['dream-pop', 'chillwave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 104',
    mp3: { 
      "fileId" : "oobLXtL7qwWiJqyHS", 
      "url" :  '/audio/BirdMachine.mp3'
    },
    episodeNumber: '104',
    host: 'Ashan & Partius',
    coverImage: { 
      "fileId" : "oobLXtL7erWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-104.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['ambient', 'chill']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 105',
    mp3: { 
      "fileId" : "oobLXtL7tyWiJqyHS", 
      "url" :  '/audio/Beginning.mp3'
    },
    episodeNumber: '105',
    host: 'Davey Shindig',
    coverImage: { 
      "fileId" : "oobLXtL7uiWiJqyHS", 
      "url" :  '/img/coverart/808-mixtapes-vol-105.jpg', 
      "info" : { 
        "width" : 800, 
        "height" : 800, 
        "backgroundColor" : "#616b61", 
        "primaryColor" : "#fcfdfc", 
        "secondaryColor" : "#fcfdfc" } 
    },
    userId: davey._id,
    commentCount: 0,
    tags: ['techno', 'bass', 'abstrak']
  });


  var podcasts = Podcasts.find().fetch();

  for (var i = 0; i < podcasts.length; i++) {
    Playlists.insert({
      episodeNumber: podcasts[i].episodeNumber,
      tracks: [{
        title: 'title1',
        artist: 'artist1',
        remix: 'remix1',
        featuring: 'featuring1',
        album: 'album1',
        label: 'label1'
      }, {
        title: 'title2',
        artist: 'artist2',
        remix: 'remix2',
        featuring: 'featuring2',
        album: 'album2',
        label: 'label2'
      }, {
        title: 'title3',
        artist: 'artist3',
        remix: 'remix3',
        featuring: 'featuring3',
        album: 'album3',
        label: 'label3'
      }, {
        title: 'title4',
        artist: 'artist4',
        remix: 'remix4',
        featuring: 'featuring4',
        album: 'album4',
        label: 'label4'
      }, {
        title: 'title5',
        artist: 'artist5',
        remix: 'remix5',
        featuring: 'featuring5',
        album: 'album5',
        label: 'label5'
      }, {
        title: 'title6',
        artist: 'artist6',
        remix: 'remix6',
        featuring: 'featuring6',
        album: 'album6',
        label: 'label6'
      }, {
        title: 'title7',
        artist: 'artist7',
        remix: 'remix7',
        featuring: 'featuring7',
        album: 'album7',
        label: 'label7'
      }, {
        title: 'title8',
        artist: 'artist8',
        remix: 'remix8',
        featuring: 'featuring8',
        album: 'album8',
        label: 'label8'
      }, {
        title: 'title9',
        artist: 'artist9',
        remix: 'remix9',
        featuring: 'featuring9',
        album: 'album9',
        label: 'label9'
      }, {
        title: 'title10',
        artist: 'artist10',
        remix: 'remix10',
        featuring: 'featuring10',
        album: 'album10',
        label: 'label10'
      }, {
        title: 'title11',
        artist: 'artist11',
        remix: 'remix11',
        featuring: 'featuring11',
        album: 'album11',
        label: 'label11'
      }, {
        title: 'title12',
        artist: 'artist12',
        remix: 'remix12',
        featuring: 'featuring12',
        album: 'album12',
        label: 'label12'
      }, {
        title: 'title13',
        artist: 'artist13',
        remix: 'remix13',
        featuring: 'featuring13',
        album: 'album13',
        label: 'label13'
      }, {
        title: 'title14',
        artist: 'artist14',
        remix: 'remix14',
        featuring: 'featuring14',
        album: 'album14',
        label: 'label14'
      }, {
        title: 'title15',
        artist: 'artist15',
        remix: 'remix15',
        featuring: 'featuring15',
        album: 'album15',
        label: 'label15'
      }, {
        title: 'title16',
        artist: 'artist16',
        remix: 'remix16',
        featuring: 'featuring16',
        album: 'album16',
        label: 'label16'
      }, {
        title: 'title17',
        artist: 'artist17',
        remix: 'remix17',
        featuring: 'featuring17',
        album: 'album17',
        label: 'label17'
      }]
    });
  }

  Comments.insert({
    postId: postId,
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Nice mix obvz!'
  });

  Comments.insert({
    postId: postId,
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'I\'m replying to myself!'
  });

  Posts.insert({
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    title: 'Wonderful News!',
    body: 'Wonderful news! It\'s so great. Etc etc blah blah',
    slug: 'wonderful-news'
  });

  Posts.insert({
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    title: 'Add\'l Good News',
    body: 'More news! It\'s also great. Etc etc blah blah',
    slug: 'addl-good-news'
  });
};
