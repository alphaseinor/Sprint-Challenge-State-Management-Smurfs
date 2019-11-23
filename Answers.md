1. What problem does the context API help solve?
helps eleminate prop drilling by making a state store.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is where your state tree lives, the only way to change is by dispatching and action to it.
Your reducers are where the state changes in response to actions sent to the store.
Your actions send data from the application (UI) to the store

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is better used in larger applications, and component state is better for smaller applications, however you can use application state to feed a component state, where possible this hybridized version is actually a better idea on mapped items to reduce the amount of code, just pass props to an end node...

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk extends the base redux store functionality so you can use async logic like AJAX calls. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I love redux for larger projects, and can't wait to use it to it's fullest extent. I see it as very important to what I would like to develop (like an invoicing or inventory based system). close second is context... 
