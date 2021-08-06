# FULLSTACK NOTES:ish app

# TASK:

## Build a simple application where you can add some expenses and than receive a total sum of those expenses you write. Every expense should have a description attached to it.

### One expense should have two text fields where one is for description and the other for the amount. When you add an expense it should make a request to your server and save your data on a database.

### Your expenses should be fetched through a request to your server and collect all data from the database. You should present the data in some sort of a list where it also should show the total amount of expenses.

## Techniques used for this project

- Database: MySQL
- Backend: Node.js with express
- Frontend: React.js
- Styling: Styled-components

# TODO:

## Here are the todos i want to make in the near future with some more time.

- Jest test the application
- Clean up the code base and create lib folder with components being repeatedly used
- Error handling the application
- Add some animations to make it more lively
- If application was bigger look at efficiency in form of unnecessary comp. rendering with useMemo, useCallback etc.
- Add TypeScript to the application
- Since its private expense notes it should have some user authentication so that only you could see it. It would be fun to implement that.
