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

  console.log(newURL)

