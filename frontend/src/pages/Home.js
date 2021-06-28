/* 
This is the Home Page, which will show the following
Tabs: (

All <-- Default for the page to show feed of all posts.
Announcements <-- Shows admin announcements.
Ask <-- Similar to Stackoverflow in asking questions.
Jam? <-- Similar to Jam with replit, unsure if this will be added.
Tutorials <-- Place for tutorials for Roboflow.
Share <-- Users can share their posts, datasets, etc.
Templates <-- Templates users can share to help other new users with similar projects.

),

Main: (

Each tab will have a search bar with its corresponding tab name, to search those posts.
Each tab will point to a different route; I.E. "All" points to /talk/all, "Ask" points to /talk/ask.
Each tab will be styled the same, have an "Add Post" button, and will show most recent posts first.
Each tab will have a "Hot, New, and Top" buttons to show posts in the corresponding way. Initial page load = Hot.
Admins will be able to "Pin" a post to the top, regardless of the user preference buttons.

For simplicity, the amount of posts initially shown will be limited to 10.
A load more button will be located below the end of the post limit, so the user can load more posts.

),

Leaderboard/Top Contributors: (

At the top of the page will show the top contributors to the forums for the week, the month, the year, and all time.
On initial connection to /talk/all, the top contributors will be set to the Week.
Top contributions will take posts, comments, etc. into the overall count.

Leaderboard will show top 10 on desktop, likely top 5 on mobile.
Leaderboard route will be /leaders.

),

Posts: (

Posts will have text, photo, and links functionality.
Posts will have a "vote" button, similar to the reddit Karma button, comments within posts will also have this button.
If user is logged in, posts will show latest comments, and a "view all" button underneath those latest comments.
Under the Posts title and description, will have the "board" it has been posted in;
This is mostly useful for the "All" tab, rather than the other tabs, so users can see if they're looking at a question, or a tutorial, etc.

),

Users: (

Users will have a profile page for their Handle, Titles, Posts, and Profile information.
Hovering over a username will show a small tab with that users info and link to profile.
User route will be /@user

),


Footer will be more or less the same as the main Roboflow website.

*/
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      </header>
    </div>
  );
}

export default Home;
