# Fitness Tracker Project  
**Author:** Alston Dsouza

---

## **Summary**  
Fitness Tracker is a lightweight and user-friendly web application that helps users log and track their fitness workouts. The application provides an organized way to document and visualize workouts, encouraging users to maintain a consistent fitness routine.

The app includes features such as logging new workouts, viewing a detailed workout log, and receiving motivational quotes to inspire users along their fitness journey.

---

## **Features**

### **1. Workout Logging**  
Users can log workouts with the following details:  
- **Workout Type**: Choose from a dropdown menu (e.g., Cardio, Strength Training, Yoga, etc.).  
- **Duration**: Input the duration in minutes.  
- **Calories Burned**: Add optional calorie details.  
- **Notes**: Include optional notes about the workout (e.g., "Ran in the park" or "Tried a new routine").

### **2. Workout Log**  
- A list of all submitted workouts is displayed on the main page, showing:  
  - **Type**  
  - **Date & Time**  
  - **Duration**  
  - **Calories Burned**  
  - **Notes**

- Each workout entry can be clicked to view additional details or deleted if necessary.

### **3. Motivational Quotes**  
- The homepage displays a random motivational fitness quote each time it is loaded to inspire users.  
- Quotes are refreshed dynamically to keep the experience fresh and uplifting.

### **4. Dark Mode**  
- Users can toggle between light and dark modes for better readability and user preference.

---

## **Known Limitations**

### **1. Database Dependency**  
- The app depends on a running instance of MariaDB or MySQL. Without proper database configuration, it will not work.

### **2. No Search or Edit Feature**  
- Currently, users cannot search for specific workouts or edit existing entries. These features could be added in future iterations.

### **3. No Authentication**  
- The app lacks a user authentication system, meaning all data is shared across all users who access the app.

### **4. Basic Form Validation**  
- While some fields are required, there is no validation for the format of data (e.g., email validation or checking for invalid durations).

---

## **Topics Covered**  
This project highlights several key technologies and concepts:  
- **JavaScript**  
- **Node.js & Express.js**  
- **EJS (Embedded JavaScript Templating)**  
- **MariaDB & SQL**  
- **HTML & CSS**  

---

## **Future Enhancements**  
1. **Search Functionality**: Add the ability to search workouts by type or notes.  
2. **Edit Workouts**: Allow users to update workout details after logging them.  
3. **Authentication**: Enable user accounts for personalized workout tracking.  
4. **Advanced Analytics**: Provide insights like weekly trends or progress charts.  

---

## **Setup Instructions**

### **Prerequisites**  
- Node.js installed on your machine  
- MariaDB or MySQL installed and running  

### **Steps**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/fitness-tracker.git
   cd fitness-tracker
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Configure the database:  
   - Create a database called `fitness_tracker` and run the SQL script provided in `database-scripts/init.sql` to set up the `workouts` table.  
   - Update the database connection settings in `app.js` if necessary.

4. Start the application:  
   ```bash
   npm start
   ```
5. Open the app in your browser:  
   ```
   http://localhost:3000
   ```

---

