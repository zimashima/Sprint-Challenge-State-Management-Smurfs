1. What problem does the context API help solve?

	Traditional way of passing down props is that the props is passing down components through components. Even though the component might be at the end of the component tree, you still need to pass down from the starting point, through every component along the way until the destination.
	
    Context API allows skipping those components in the path, as long as the props are in the same tree.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions - actions, as simply put, are the carrier of data that transport data to the store. It also described what action to be taken in reducer
	
	Store - store is an object that brings where the state is holding state, allowing access to state and allowing the state to be updated, registering listener and handling unregisterd listeners
	
	Reducers - reducers instruct how the application's state changes in accordance to specific actions that the data was sent from
	

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    	application state is the state that is stored in the application level, while component state is only stored within component
the good time to use each of those is that if you plan to use some certain state throughout the application, you would need to store your data as the application state, otherwise, some state that does not need to be passed to other components can just be used as component state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk allows you to call action creators and allow you to handle asynchronize action effectively as well as dealing with side effects of the redux application

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux, I love how structure and easy to use redux is with flexibility that expands beyond its own component tree, and also redux-logger and redux-thunk is very helpful when dealing with asynchronize action