This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# The approach
Before I start building things, I like to visualize how they will look like, which usually leads me to either doing wireframe or rough sketch of whatever I'm building. However, there are some pitfalls with this approach that I need to actively avoid. First is simple, I like nicely designed things, therefore I want my apps to be beautiful which leads me to spend too much time on either researching how others approached designing similar or designing it myself (and let's face it, I suck at the design). The second rabbit hole is UX, besides beautiful-looking products I love when they are actually useful and functional. I could spend days thinking on how to improve user experience, but the obvious question is, is the time tradeoff really worth it? The honest answer is, most of the time no since users of your apps might just not care about micro-UX improvements that you made to existing features. They would probably love to see some new features or performant and reliable application.

Did I go down the rabbit hole during this task? Absolutely. Took me 30 minutes to realize.

Now to the architecture choices. While I like beautiful-looking apps, I also really like fast apps, and I mean FAST. First meaningful paint in under one second, time to interactive in three seconds, small js and css footprint, server-side rendering, those are things that tickle my fancy.

However, in the given time I had to go with a simple approach, make it work. I could use next.js and have this SSR out of the box, but that would require some additional time spent on config instead of making things work. The same goes for create react app, I could configure webpack (or parcel) myself, but why reinvent the wheel? Also if this was the real app I would also go for community backed solutions instead of self-made (however we can still customize CRA).

As for the state, which was really small I've decided to simply use what React has to offer, which is hooks in this case. I've built a custom hook that does most of the state management and data fetching however, in most of my apps, I'm using axios for ajax calls. What if this was a really big app with the complicated state? In that case, I would go for Redux or Context depending on the actual size of the state tree and as much as I don't like Redux verbosity, I must admit it really helps to keep the application state manageable.

There are two hard problems in computer science: cache invalidation, naming things, and off-by-1 errors. Approaching the caching solution in this app, I went with local storage, and while I'm not going to say why it was a good choice (although I could), I will tell you why it's a potentailly bad one. There is no invalidation mechanism implemented, so that means once downloaded data stay in local storage until it is deleted. If the user will look for Tetris today he will get a nice list of repos, if the same user will look for Tetris two months later... he will get the same list of repos, which is not necessarily the good thing. How to fix that? Simply invalidate the cache after a given period or go with in-memory caching.

One thing that I didn't have time to do was debouncing user input, which would result in fewer API calls, the simplest way to this would be to use a well known debounce-throttle library or write setTimeout to debounce user input update and make API call after that.

# Testing
I like to have at least 80% of coverage in my apps, it makes me sleep better at night as well as it makes me ship features with confidence.
Right now my go-to choices are react-testing-library and Jest. Why? Because I like to test my components the same way user would be using them. This means not mounting shallow component and checking how the props are passed, I believe it's rather better to look for the value of the button in the mounted component, simulate a click on it and check what happened.

As for e2e tests I've used selenium a lot in the past as well as webdriver and more recently cypress. All of them would do the job here and since I'm not a big fan of Java verbosity I probably would go with one of the JavaScript e2e frameworks.


# TODO:
- Debouncing user input
- Unit Tests (alooooot of them)
- e2e Tests
- RWD
