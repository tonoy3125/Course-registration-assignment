# Add at least 3 Project features

- Effortless course selection with a "Select" button.
- Dynamic display of course titles in the purchase state.
- Real-time calculation of credit hours for selected courses.
- If again select any selected item then show a toast notification.

# Discuss how you managed the state in your assignment project.
 
- Firstly I  used the Allcourses state to store data fetched from an API within the Courses component.
- Then I declared the selectedcourses state to pass and track selected course data from the courses state.
- Then I used the totalPrice state to keep track of the total course purchase price.
- I also maintained a remainingHour state to display the remaining credit hour time after course purchases.
- Lastly, To calculate the total credit hours, I used the total credit state.