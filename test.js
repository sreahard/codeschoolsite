var users = [
  {
    "_id": "56323ae57f550462684410dc",
    "__v": 0,
    "local": {
      "password": "$2a$08$gJ0CGdo9DynslSmZX8Wx.uBILc5uiSv7wHMVaat46H/nUhjVpeIfi",
      "email": "suziequz@msn.org"
    }
  },
  {
    "_id": "56324b270b885e1d6a011573",
    "__v": 0,
    "facebook": {
      "email": "suziequz@msn.com",
      "name": "undefined undefined",
      "token": "CAAL04DVDs1EBAM4VdfZC1kW4WJ0EZBSxfX462IOKf0KlHoWFsTAraoY18Idj5yLf5cbkvfyjmdlM5jaw1qrNCBZCprOjt3nZBHeyog8OvaDSgPJrZCZAU3f8hZAESwMr94CnXftIQbNX34oGXBLrdE3fN9NLoujV6qEwCAw7EWwQFNSTJ3qNmM1KXuXwLt2uBgZD",
      "id": "10206345365367800"
    }
  },
  {
    "_id": "563105f20fb208ac6097755b",
    "__v": 0,
    "twitter": {
      "displayName": "Susan Reahard",
      "id": "22428510",
      "token": "22428510-gYC9jdzvoyK5LsWfcBay2fd215H7xYb257H4wltg0",
      "username": "undefined undefined"
    }
  },
  {
    "_id": "563d132cc81c9a3e3c07371a",
    "__v": 0,
    "local": {
      "password": "$2a$08$SF.XhzpYuCJSvVilKyji8utKqsjlPQlKz1dT85jxwhfFaXvcohW3y",
      "email": "suzie@msn.org"
    }
  },
  {
    "_id": "563e5a33ff41d8f04132ce61",
    "__v": 0,
    "local": {
      "password": "$2a$08$8yY6o5cBXggS5qydn8JKBeTuKSkqUPID7AVeBLTloT/9ubiuSq/Om",
      "email": "suz@msn.org"
    }
  },
  {
    "_id": "56423cdbb491e2645b2a3e1f",
    "__v": 0,
    "local": {
      "password": "$2a$08$m8rGOsP/s6QQBcsRYrtkzuOjOt3hNa5trfeaifPM5jO9.kYqCdfyW",
      "email": "suzer@msn.org"
    }
  },
  {
    "_id": "56424af08f74931f5c38e675",
    "__v": 0,
    "local": {
      "password": "$2a$08$aLsSilnpjck/X57NG/7o4uJNwjnRL.oP2C84dA8dXHGB18p3GAGKS",
      "email": "newsuz@msn.org"
    }
  },
  {
    "_id": "56424c96461de1765cb8a9c7",
    "__v": 0,
    "local": {
      "password": "$2a$08$AdifrgRGvmLFnze2Jxho/eBRsHdCaSX30Z0uPRDcc0pHImtpFvalO",
      "email": "suzer2@msn.org"
    }
  },
  {
    "_id": "564370e1579495e464f5b5f2",
    "__v": 0,
    "local": {
      "password": "$2a$08$IKTVLCR6VDXstnFIc1YxAe02QRS21aA5ZbrDBrdWaHvduShMwtIWq",
      "email": "me@me.com"
    }
  },
  {
    "_id": "5643761f128c395c650db0e2",
    "__v": 0,
    "local": {
      "password": "$2a$08$goIfvu6RdYBtHkivqSt.Ju7gFUlzcXlNmjvgkfpSQ4yftsXid2zyG",
      "email": "test@tes.com"
    }
  },
  {
    "_id": "5644d7f9ca8395817b217467",
    "__v": 0,
    "local": {
      "password": "$2a$08$ffkuoeNp7MwDXPUruxpyCuPpA.y2Wo7seVH3/6R/mzt/7iOfmwHk.",
      "email": "suzer6@msn.org"
    }
  },
  {
    "_id": "56450d4c8b538be581c1ce90",
    "__v": 0,
    "local": {
      "password": "$2a$08$X7AxZ868jq2ViC1vGXO7Xe899R/qP2Lm3OxHe9YX4qw0n..pwjYqi",
      "email": "suz9@msn.org"
    }
  },
  {
    "_id": "56462962f0e8ff3b897337cc",
    "__v": 0,
    "local": {
      "password": "$2a$08$vCf9D7k8vUzkJ4I6RhpDeedOdsQqjIWXOWn6jEGkDJFGw6j4KhcKq",
      "email": "fuck@this.com"
    }
  },
  {
    "_id": "56462ab44071f77a89432074",
    "__v": 0,
    "local": {
      "password": "$2a$08$wI2gvfYMqf3Z2sKgGpIoxe7/QymXz3vmWb9hGX.TcSXVsEkaLqN6i",
      "email": "admin@admin.com"
    }
  },
  {
    "_id": "564660de6f41b7878f9dc42c",
    "__v": 0,
    "local": {
      "password": "$2a$08$8KP6nUDqEMdAR1gq22wdMOIdG3GWHmJ1PtBeZOZZoLAhXvtvzPGMS",
      "email": "bill@beer.com"
    }
  },
  {
    "_id": "564ce0a25586335cbcf4ea29",
    "__v": 0,
    "local": {
      "password": "$2a$08$uS.BWVGixowxm7bGdKafge7LiGgaEnK8EcMuEmoZ.gOGr15lTjCQy",
      "email": "work@damn.it"
    }
  }
]

var userStuff = users.map(function(u){
  if (u.local != undefined) {
  return {"id":u._id, "email": "local " + u.local.email}
} else if (u.facebook != undefined) {
  return{"id":u._id, "email": "facbook " + u.facebook.email}
} else if (u.twitter != undefined) {
  return {"id":u._id, "email": "twitter name " + u.twitter.displayName}
}


});

var data = [
      {
        "sha": "94c072d83ee04117773b283295e7de27a88167ec",
        "author": {
          "email": "suziequz@msn.com",
          "name": "sreahard"
        },
        "message": "doing more work",
        "distinct": true,
        "url": "https://api.github.com/repos/sreahard/codeschoolsite/commits/94c072d83ee04117773b283295e7de27a88167ec"
      },
      {
        "sha": "38d355716fc8e4ad75fe7c6e8fcac932b1ac5d25",
        "author": {
          "email": "suziequz@msn.com",
          "name": "sreahard"
        },
        "message": "fixed the redirect on the login page",
        "distinct": true,
        "url": "https://api.github.com/repos/sreahard/codeschoolsite/commits/38d355716fc8e4ad75fe7c6e8fcac932b1ac5d25"
      },
      {
        "sha": "53f5bc55767d72efb1bd948e9ad65a8e7601f335",
        "author": {
          "email": "suziequz@msn.com",
          "name": "sreahard"
        },
        "message": "added webpack",
        "distinct": true,
        "url": "https://api.github.com/repos/sreahard/codeschoolsite/commits/53f5bc55767d72efb1bd948e9ad65a8e7601f335"
      },
      {
        "sha": "ae8ef483972fe7272484776deb9e8fdcd555e841",
        "author": {
          "email": "suziequz@msn.com",
          "name": "Suz"
        },
        "message": "Update README.md",
        "distinct": true,
        "url": "https://api.github.com/repos/sreahard/beer-app/commits/ae8ef483972fe7272484776deb9e8fdcd555e841"
      }
    ]

    var newURL = data.map(function(c){
            var commitId = (c.url.slice(-41));
            var urlBase = (c.url.slice(0,8) + c.url.slice(12,22) + c.url.slice(28))
            var url = (urlBase.slice(0, -42) + commitId)
        return (url)
    });

var blog = [
  {
    "_id": "5625431a79ad4c0468000001",
    "title": "How I am learning to code good and do other things good too.",
    "author": "Suzie Reahard [rear-duh]",
    "body": "<img class=\"img-responsive\" src=\"./images/blogpost1.jpg\" alt=\"\">\r\n\r\n                        <hr>\r\n\r\n                        <p>Now, do you wanna steer, or are you too old to sit on your Pop's lap and drive? Look at us, crying like a couple of girls on the last day of camp. So Ann, the question is, do you want a man or a boy? I know how I would answer.</p>\r\n\r\n                        <p>Ah coodle doodle doo, ah coodle doodle doo. No. I was ashamed to be seen with you. I like being with you.</p>\r\n\r\n                        <p>Are you at all concerned about an uprising? Can't a guy call his mother pretty without it seeming strange? Amen. And how about that little piece of tail on her? Cute! She's trying o prove that she's closer to my children than I am, but the joke's on her, because she doesn't know how little I care for GOB. It feels good to be back in a queen! There's unlimited juice? This party is gonna be off the hook. I've got a nice hard cot with his name on it. You'd do that to your own brother? I said \"cot.\" A lady of the evening. Working girl. She turns illusions for money.</p>\r\n\r\n                        <p>The guy runs a prison, he can have any piece of ass he wants. I know, I just call her Annabelle cause she's shaped like a… she's the belle of the ball! We all need to pick a day to try and make trend.</p>\r\n\r\n                        <p>I mean, it's one banana, Michael. What could it cost, ten dollars? Boy, I sure feel like a Mary without a Peter and a Paul. And I wouldn't just lie there, if that's what you're thinking. That's not what I WAS thinking. Make love in your *own* hand, Mother! Monday morning. COME ON! I could use a leather jacket for when I'm on my hog and have to go into a controlled slide. Happy. Did you enjoy your lunch, mom? You drank it fast enough.</p>\r\n\r\n ",
    "__v": 0,
    "date": "1990-12-10T07:00:00.000Z",
    "comments": []
  },
  {
    "_id": "564cc9386fddaa12b8e3c6ea",
    "title": "Hmmm...",
    "author": "Me",
    "body": "",
    "__v": 0,
    "date": "2015-11-18T18:53:44.541Z",
    "comments": []
  },
  {
    "_id": "564cdbe6fdafea54bac0c1a1",
    "title": "Test Blog",
    "author": "Suzie",
    "body": "I can still use html in <strong>this area</strong> right? With <a href=\"/\">links</a> and stuff?",
    "__v": 0,
    "date": "2015-11-18T20:13:26.009Z",
    "comments": []
  },
  {
    "_id": "564cc8f96fddaa12b8e3c6e9",
    "title": "Titel",
    "author": "Author",
    "__v": 0,
    "date": "2015-11-18T18:52:41.675Z",
    "comments": []
  },
  {
    "_id": "564bb236bec5a505ae3409b5",
    "title": "New Blog Posts Are Posting",
    "author": "Suzie",
    "body": "Can I now require user AND update a post?!??!??!?!??!?!?!?!??!",
    "__v": 4,
    "date": "2015-11-17T23:03:18.488Z",
    "comments": [
      {
        "_id": "564e50f0f7236c24d716999b",
        "comment": "New Comment",
        "__v": 0,
        "date": "2015-11-19T22:45:04.670Z"
      },
      {
        "_id": "564e55c8ec554f81d7907a98",
        "comment": "New Comment #2",
        "__v": 0,
        "date": "2015-11-19T23:05:44.041Z"
      },
      {
        "_id": "564e55ccec554f81d7907a99",
        "comment": "New Comment #3",
        "__v": 0,
        "date": "2015-11-19T23:05:48.421Z"
      },
      {
        "_id": "564e55d0ec554f81d7907a9a",
        "comment": "New Comment #4",
        "__v": 0,
        "date": "2015-11-19T23:05:52.406Z"
      }
    ]
  }
]

var tweets = [
{
    "created_at": "Tue Nov 24 21:38:14 +0000 2015",
    "id": 669268813578309600,
    "id_str": "669268813578309632",
    "text": "join us in welcoming @_cdro, @jain_chirag04, @satya164 &amp; @skevy as community collaborators on React Native! look out, 841 issues. err.. 843.",
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1566463268,
      "id_str": "1566463268",
      "name": "React",
      "screen_name": "reactjs",
      "location": "",
      "description": "A JavaScript Library for Building User Interfaces",
      "url": "http://t.co/EF5xem8t5W",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/EF5xem8t5W",
              "expanded_url": "http://facebook.github.io/react/",
              "display_url": "facebook.github.io/react/",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 49093,
      "friends_count": 161,
      "listed_count": 1251,
      "created_at": "Wed Jul 03 18:58:09 +0000 2013",
      "favourites_count": 2111,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 1052,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_normal.png",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 17,
    "favorite_count": 43,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "_cdro",
          "name": "Christopher Dro",
          "id": 3215407774,
          "id_str": "3215407774",
          "indices": [
            21,
            27
          ]
        },
        {
          "screen_name": "jain_chirag04",
          "name": "chirag",
          "id": 108044466,
          "id_str": "108044466",
          "indices": [
            29,
            43
          ]
        },
        {
          "screen_name": "satya164",
          "name": "Satyajit Sahoo",
          "id": 114329017,
          "id_str": "114329017",
          "indices": [
            45,
            54
          ]
        },
        {
          "screen_name": "skevy",
          "name": "Adam Miskiewicz",
          "id": 15002220,
          "id_str": "15002220",
          "indices": [
            61,
            67
          ]
        }
      ],
      "urls": []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  ]
  var avatar = tweets.map(function(t){
    console.log(t.user.profile_background_image_url_https)

  })

// var comments = 
// for (var i = 0; 

