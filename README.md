

# Description
This is a Sony Lifelog API Client Wrapper

# Installation
```sh
$ npm install node-sony-lifelog
```

# Usage

### Application

```javascript

/** Access Token Retrieved from Login Credential Code **/
var app = require('node-sony-lifelog').app(token);

app
    .activitiesAll({
        start_time: '2014-06-01T09:00:00.000Z',
        end_time: '2014-06-01T19:00:00.000Z'
    })
    .then(function(results){
        // Do something with activities info
    }, function(reason){
        // Error reason
    });

```

### Authentication

```javascript

var lifelog = require('node-sony-lifelog');

var auth = lifelog.auth({
    client_id: 'CLIENT_KEY',
    client_secret: 'CLIENT_SECRET',
    scope: 'lifelog.profile.read+lifelog.activities.read+lifelog.locations.read'
});

/** Redirect URL for Lifelog API Login **/
var redirectURL = auth.redirectURL();

/**
 * > Redirect the user to redirectURL
 * > User logs into their account through the URL
 * > Lifelog server redirects user to a callback URL
 * > Callback URL would look like this when success:
 * >>> https://YOUR_CALLBACK_URL?code=someCode&state=yourUniqueIdentifier&scope=scopeFromAbove
 * > Callback URL would look like this when fails:
 * >>> https://YOUR_CALLBACK_URL?code=someCode&fault=...
 **/

/** insert object directly or input the code retrieved with Lifelog callback **/
var token = auth.getAccessToken(code);

```

# Documentation


### User
* [User API Reference]

```javascript


// get user info
app.user();  // GET /v1/users/me


```

### Activities
* [Activities API Reference]

>
> *Suggested but not required parameters for activities:*
>
>
> **start_time** Timestamp Ex: '2014-06-01T09:00:00.000Z'
>
> **end_time** Timestamp Ex: '2014-06-01T19:00:00.000Z'
>
> **limit** Integer maximum number of entries
>

```javascript


// get all activities
app.activitiesAll()  // GET /v1/users/me/activities

// get all applications
app.activities.applicationAll() // GET /v1/users/me/activities?type=application

// get applications -> album
app.activities.application.album() // GET /v1/users/me/activities?type=application:album

// get applications -> books
app.activities.application.books() // GET /v1/users/me/activities?type=application:books

// get applications -> browsing
app.activities.application.browsing() // GET /v1/users/me/activities?type=application:browsing

// get applications -> camera
app.activities.application.camera() // GET /v1/users/me/activities?type=application:camera

// get applications -> communication
app.activities.application.communication() // GET /v1/users/me/activities?type=application:communication

// get applications -> game
app.activities.application.game() // GET /v1/users/me/activities?type=application:game

// get applications -> movie
app.activities.application.movie() // GET /v1/users/me/activities?type=application:movie

// get applications -> other
app.activities.application.other() // GET /v1/users/me/activities?type=application:other

// get applications->tv
app.activities.application.tv() // GET /v1/users/me/activities?type=application:tv

// get camera
app.activities.camera() // GET /v1/users/me/activities?type=camera

// get camera
app.activities.music() // GET /v1/users/me/activities?type=music

// get physical
app.activities.physicalAll() // GET /v1/users/me/activities?type=physical

// get physical -> walk
app.activities.physical.walk() // GET /v1/users/me/activities?type=physical:walk

// get physical -> run
app.activities.physical.run() // GET /v1/users/me/activities?type=physical:run

// get physical -> bicycle
app.activities.physical.bicycle() // GET /v1/users/me/activities?type=physical:bicycle

// get physical -> other
app.activities.physical.other() // GET /v1/users/me/activities?type=physical:other

// get sleep
app.activities.sleep() // GET /v1/users/me/activities?type=sleep

// get transport
app.activities.transport() // GET /v1/users/me/activities?type=transport




```


### Locations
* [Locations API Reference]

>
> *Suggested but not required parameters for activities:*
>
>
> **start_time** Timestamp Ex: '2014-06-01T09:00:00.000Z'
>
> **end_time** Timestamp Ex: '2014-06-01T19:00:00.000Z'
>
> **limit** Integer maximum number of entries
>


```


// get one or more locations
app.locations.multiple();  // GET /v1/users/me/locations


// get specific location
app.locations.single({ id: locationId }); // GET /v1/users/me/locations/:id



```


# Test

```

 // TODO

```

# Development

```

// TODO

```

[User API Reference]:https://developer.sony.com/develop/services/lifelog-api/endpoints/user-profile/
[Activities API Reference]:https://developer.sony.com/develop/services/lifelog-api/endpoints/activities/
[Locations API Reference]:https://developer.sony.com/develop/services/lifelog-api/endpoints/locations/
