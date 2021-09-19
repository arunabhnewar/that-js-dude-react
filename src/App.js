// import logo from './logo.svg';
import './App.css';
import tutorialsData from './tutorials.json';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}


// header component
function Header() {
  return (
    <header>
      <div className="navbar">
        <h3 className="brand">That Js Dude</h3>
        <button className="sign-in">Sign In</button>
      </div>

      <div className="heading">
        <h2>Exclusive React Workshop for beginners!</h2>
        <p>Once in a year opportunity to learn and build your first React app</p>
        <button className="learn-more">Learn More</button>
      </div>
    </header>
  )
}


// main component
function Main() {
  return (
    <section className="blog-container">
      <Left></Left>
      <Right></Right>
    </section>
  )
}


// left component
function Left() {
  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
    setTutorials(tutorialsData)
  }, [])
  console.log(tutorials);
  return (
    <div className='left-blogs'>
      <BlogsHeading></BlogsHeading>
      <div id="tutorials-container">
        {
          tutorials.map(tutorial => <Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)
        }
      </div>
    </div>
  )
}


function Tutorial(props) {
  return (
    <div className="tutorial">
      <h2 className="tutorial-title">{props.title}</h2>
      <p className="tutorial-detail">{props.desc.slice(0, 100)}</p>
      <button className="learn-more">View Details</button>
    </div>
  )
}


// right component
function Right() {
  return (
    <div className='right-blogs'>
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
      <RecentTalks></RecentTalks>
    </div>
  )
}



function BlogsHeading() {
  return (
    <div className="blogs-heading">
      <h3>JS Confusing Parts</h3>
      <p>Understand <span className="text-parts">this, scope, hoisting, closure, inheritance, bind, call,
        apply, prototype, event delegation, dom, timers</span> and many more caveats</p>
    </div>
  )
}


// right component
function PersonalTraining() {
  return (
    <div id="personal-training">
      <h2>Personal Training for $30</h2>
      <p className="tutorial-detail">If you need career guide, personal interview tips, mock interview, Life
        Coaching, or anything
        else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book
        a time slot You can Book me</p>
    </div>
  )
}



function RecentVideos() {
  return (
    <div id="recent-videos">
      <h2>Recent Videos</h2>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
        <button className="learn-more">More On Youtube</button>
      </ul>
    </div>
  )
}



function RecentTalks() {
  return (
    <div id="recent-talks">
      <h2>Recent Talks</h2>
      <ul>
        <li>Functional Programming: What, Why and How</li>
        <li>JavaScript Code Quality</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
        <button className="learn-more">More On Youtube</button>
      </ul>
    </div>
  )
}



export default App;
