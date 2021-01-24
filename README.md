[Deployed Site](https://zanhorst.github.io/full-stack-project/)
[Deployed API](https://protected-taiga-47801.herokuapp.com/)

# =====Technologies Used=====

* JavaScript
* CSS
* HTML
* Mongoose
* MongoDB
* Node.js
* Ajax
* jQuery
* Grunt
* cURL

# =====Planning=====

### WireFrame
------------------

[Wireframe](https://www.figma.com/file/VIl0FIYSJR3odfpwzFoYuf/FULL-STACK-PROJECT-FRONT-END-WIREFRAME?node-id=0%3A1)

### User Stories
------------------

As a user, I want complete control of the length of my lists, so that I can have different amounts of items in each list. (V.2)
As a user, I want to be able to keep track of my lists over time, so that I can keep track of the different things that I buy.
As a shopper, I want to be able to make a note of the prices of the different items I buy, to keep track of my finances.
As a user, I want my lists to be private to me, to keep my shopping habits private.

# =====Development Story=====

This one was a struggle. Coding with a computer that can't cool itself down is difficult.
A problem I ran into when writing the front-end of this application was getting my update function to send a readable object to the API. I started debugging by adding a lot of console.logs everywhere, and starting off by finding out how far the function gets before breaking. First bug: the page immediately reloads when clicking submit. Ok! I've seen this one before, i'm not using `event.preventDefault()` somewhere. But when i checked my events.js file, all of my `event.preventDefault()` were where they should be. So i then moved over to app.js, where i discovered that i was:
* looking at the wrong event (click instead of submit)
* looking at the wrong ID ("update-lists", instead of the correct "update-list")
* sending the event to the wrong function (again, i wrote "onUpdateLists" instead of the correct "onUpdateList")

With app.js sorted out now, it was time to debug again. I moved on to testing again. this time, i get a more informative bug: i'm making it to the end of the function, but i'm getting a 422 error. So onward i go to check on api.js, and make sure im giving it good data. Alas! The patch function needs an ID (to choose what to update) and a new name (to update to). All i'm doing is passing the `name:` key `formData`. This is the entire object of formData. I took a look at the my auth api, and realizing it didn't help a ton, i kept my focus on the front end. After about 30 minutes of staring at it, i realized i should probably be giving the name key more specific instructions, so i changed `name: formData` to `name: formData.grocery.name`, and the function worked from then on. In total, fixing this took probably 2 hours.

# =====Unsolved Issues=====

THIS IS NOT A COMPLETE APPLICATION!!

This is only the MVP of the application for V1. It does not include any CSS, or 2 of the extra relationships i would like to include. Unfortunately, my computer being broken and needing gloves full of ice water placed on it every 15 minutes really slows you down. I will continue working on making this application more feasable, however, that may not be for a little while. Thank you taking the time to check out my work!

v2 will include: individual items to be included when you a show or index your list(s).
v2 will include some css formatting.
v3 will include a css overhaul and possibly a new, currently unmentioned relationship. Shhh, its secret :)
