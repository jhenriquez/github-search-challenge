# Github Search Challenge

In it's current state this project only renders a search box. The project is already setup for redux, redux-saga and react-router. Also, other infrastructure perks are available, like babel, webpack-dev-server and jest.

The main goal is to perform a search against the Github API and display the results. Ideally:

* The search request should be debounced.
* The search request should be done as a side-effect performed by redux-saga.
* The newly added behavior should be tested.

Some of the challenges involved are:

* The redux concepts are not defined yet.
* The sagas need to be added.
* There is no markup or components for rendering the results.

#### Extra points for using the react-router.

_FRIENDLY ADVICE_ the word _extra_ is not there by mistake, it's highly recommended to focus on the main goal instead of going out of your way to fit in this routing thing. However, being creative and authentic is always a plus.

### Setting up

You can get going just by cloning this repository and installing it's module dependencies. There is already a set of tests associated with the basic behavior of rendering the SearchBox. You can verify
you're ready to go by running the `test` script and build and run the project by running the `start`
script.

### Notes

Using yarn is a personal preference and even though this project is using it, it is irrelevant to the evaluation. You can use whatever makes you more productive. This also apply to the code, the current
project structure you can also see it as a matter of preference, feel free to modify absolutely everything in the project, tools included. _BE ADVICED_ in doing so some of your choices WILL be taken into consideration on your solution's assessment. But seriously... When is this not the case? :)

Enjoy the challenge and good luck!