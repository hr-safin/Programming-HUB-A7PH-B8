# Programming Hub
<p>A learning platform called Programming Hub offers programming courses at a very affordable price.</p>

Links
[Visit website](https://6505464625bea367bb9fd356--regal-halva-e4c280.netlify.app/)

## Course Registration


<h3>Project Features</h3>

<ul>
    <li><strong>Course Selection:</strong>
      <ul>
       <li>Users can browser list of all available courses</li>
       <li>Each course card has a select button to click on to choose course</li>
      </ul>
    </li>
    <li><strong>Selected Course Display:</strong>
    <ul>
    <li>when a user select a course, course name is displayed to confirm selection</li>
    </ul>
    </li>
    <li><strong>Course Price Calculation:</strong>
    <ul>
    <li>The price of the selected course is added to a running total.</li>
    <li>Users can see the total price of the courses they have selected.</li>
    </ul>
    </li>
    </li>
    <li><strong>Course Credit Limit:</strong>
     <ul>
     <li>Users cannot select courses that would exceed a total of 20 hours of course credit.</li>
     <li>If the user attempts to exceed this limit, an alert message is displayed.</li>
     </ul>
    </li>
    <li><strong>Remaining Course Credit Display:</strong>
    <ul>
    <li>Users can see their remaining course credit, which starts at 20 hours.</li>
    <li>The remaining course credit decreases as courses are selected.</li>
    </ul>
    </li>
    <li><strong>Prevent Duplicate Course Selection</strong>:
    <ul>
    <li>Users cannot purchase the same course twice.If they try, a alert message displayed to inform them.</li>
    </ul>
    </li>
</ul>

<br>

## How I managed the state in my project

<p>In my course registration project, state management is crucial for ensuring a smooth user experience. I have divided my project into several components, with the primary App.jsx component serving as the central hub for state management and Inside App.jsx, I wrapped navbar, cards, and cart components.</p>

<p>To begin, I've defined a display state to fetch and store course data from course.json file.After that, I mapped display and passed data to Card component from Cards component. This state allows me to dynamically render course information as individual Card components. Within each Card, I've creatively utilized the data from the state to get "data.courseName","data.coursePrice", "data.courseDetails", "data.courseImage", and set a button called select and did some styling for dynamic each card component</p>

<p>By lifting the state from the child Card components to the parent App.jsx, I've implemented the handleClick function on select button and passed data.id to App.jsx.This function prevents duplicate course selections by checking if a course with the same ID has already been added to the add state. If not, it updates the state with the selected course, keeping track of user choices.</p>

<p>To track the remaining credit hour and the sum of total credit hour,I've defined the remaining and total states. Within handleClick, you calculate the total cost of the selected courses and update total accordingly.I maintain remaining to display the user's remaining course credit.Furthermore, i passed remaining and total to cart component.Basically, it is called props drilling where you pass data from parent component to child component to get the data, in that case i passed remaining and total value.After that, in the cart component i get the accurate remaining value and total value and displayed in the cart. Lastly, i implemented If the total surpasses the 20-hour credit hour limit, an alert message is triggered, informing users of the exceeded limit.</>

<p>To conclude, This how i managed the state in my project</p>