# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You would generate a migration called as such --> 'rails g migration add_column_foreign_key' and you would open the migration in your IDE and enter the following --> 'add_column :students, :cohort_id, :integer' once you've inputted those changes in the migration file, you will need to migrate via terminal to see the changes and can be verified through the schema. The name of the foreign key is 'cohort_id' and it will belong in the Student model. 

  Researched answer: A migration would be needed via terminal. Once the migration is generated, access it on your IDE, open the file and make the changes inside the migration. In this case, add the following to add a column of foreign key: 'add_column :students, :cohort_id, :integer'. Refer to 'add_column' since we are adding a new column, then refer to the table name, followed by the actual column name, and then data type it will be. Once that is done, save the file, go into the terminal and enter as follows, 'rails db:migrate' to make the changes and for verification purposes, check the schema if the new values are inputted.



2. Which RESTful routes must always be passed params? Why?

  Your answer: There are 7 RESTful routes but there are only 4 that must always be passed params and they are: Show, Edit, Update, and Destroy. These 4 routes must be passed params because they perform certain actions on specific data unlike index, new, create. For example, the 'show' route, requires an ID as a parameter to be able to access that specific data. 

  Researched answer: After doing some research on this topic, the routes that requires params to be passed are show, edit, update, and destroy. I've noticed these routes all contains 
  '.find(params[:id])' within their methods which specifically pertains to a specific set of data in the database. 



3. Name three rails generator commands. What is created by each?

  Your answer: The 3 rails generator commands are: rails generate resource, rails generate model, and rails generate controller. The 'rails generate resource' command creates the Model and Controller for the application. The 'rails generate model' command is responsible for creating the Model for the application that contains the columns in the table along with the data type of each column. The 'rails generator controller' command creates the Controller in the rails application. I have had experience with using all 3 commands during my time creating different applications on Rails. 

  Researched answer: The rails generate model command creates the model and controller of the application and the model name needs to be capitalized or must follow PascalCase naming convention. The rails generate controller creates the controller for the rails application where you are able to declare multiple methods. The rails generate resource creates both model and controller for the application. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students  -- the method that will be called for this is the index method. By doing so, you will be able to view all the data in the students table.        

action: "POST"   location: /students -- the method that will be called for this is the create method. By doing so will let you create a new data in the students table.

action: "GET"    location: /students/new  -- the method that will be called for this is the new method. This will display the forms that contains the text fields and user will be able to input values into the form. 

action: "GET"    location: /students/2  -- the method that will be called for this is the show method. By doing so, you will be able to view all the data for the primary key/id "2" in the students table.   

action: "GET"    location: /students/2/edit  -- the method that will be called for this is the edit method. By doing so, you will be able to edit any of the data for primary key/id "2" in the students table.

action: "PATCH"  location: /students/2  -- the method that will be called for this is the update method. By doing so will update the changes that was made for primary key/id "2" in the students table. 

action: "DELETE" location: /students/2  -- the method that will be called for this is the destroy method. By doing so will delete all the data of the primary key or id of "2" in the student table.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


10 USER STORIES:

1. As a user, I should to be able to create a to do list.

2. As a user, I should to be able to view all my to do list in one page.

3. As a user, I should to be able to select from the list and access a task individually.

4. As a user, I should to be able to edit a to do list to make changes.

5. As a user, after making changes to on my to do list, I should be able to click submit and see the updated changes.

6. As a user, I should be able to delete a specific task from my list.

7. As a user, I should be taken back to the home page automatically after deleting a task and show the updated list.

8. As a user, I should be able return to the home page if im viewing a specific list.

9. As a user, I should be able to click create 'new task', and be able to fill in the text forms provided.

10. As a user, I should be able to click 'submit' after creating a task and have the new list created generate along with the previous ones.
