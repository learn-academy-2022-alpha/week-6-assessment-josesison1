# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a a controller called "BlogPosts" and it is inheriting from the "Application" controller.
class BlogPostsController < ApplicationController
  def index
    # ---2) An instance variable called "posts" is declared and is set to all the values in a table called "BlogPost".
    @posts = BlogPost.all
  end

  # ---3) A "show" method is defined and an instance variable called "post" contains all values in the "BlogPost" table. Each value in that table can be accessed by specificly calling onto its id/primary key. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) A method named "new" is defined and an instance variable called "post" is set to BlogPost.new which will let you input and create new data into the table. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) in the create method, an instance variable named "post" is set to BlogPost.create that contains a strong params named "blog_post_params". This method lets the user create new blog posts, if the post is valid, it will redirect to the page where you could view all the existing posts along with the new one that was just recently created. Else it will remain on that page where you are able to create a new post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) In the edit method, an instance variable named "post" is defined and set to BlogPost.find that takes a parameter of an id/primary key. This method lets you access an existing blog post by addressing it by its id or primary key and you will be able to edit and make changes to it.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) in this update method, an instance variable called 'post' is set to update method that takes in a strong params of 'blog_post_params'. the method contains a conditional statement, if the post is valid which is referring to if there are no errors or if they meet the required validations then it will redirect it to the index page that contains all blog post. If it does not meet the validation then it will go to the page where you can edit the blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) in this destroy method, the line below will stay on the same page/view if this else condition is met
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private keyword is declared which means this method cannot be called outside of this class. Also anything below the keyword 'private' is protected which is the reason why params are usually the last methods in a controller.
  private
  def blog_post_params
    # ---10) Strong params have two methods, which are 'require' and 'permit'. it requires the attributes passed in, in order to create or update methods and permit allows certain values to be present. 
    params.require(:blog_post).permit(:title, :content)
  end
end
