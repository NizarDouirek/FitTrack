import { FaCalendarAlt, FaComment } from "react-icons/fa";
import './blog.css'
import { Link } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Exploring the Vast World of Yoga: A Comprehensive Guide to Types",
      date: "Nov 01, 2025",
      comments: 10,
      image: "about.jpg",
    },
    {
      id: 2,
      title: "The Profound Mental and Physical Benefits of Maintaining",
      date: "Avril 15, 2025",
      comments: 3,
        image: "boxe2.jpg",
    },
    {
      id: 3,
      title: "Discipline Over Motivation: The Real Key to Fitness",
      date: "Mars 02, 2025",
      comments: 7,
        image: "class-3.jpg",
    },
    {
      id: 4,
      title: "Strength Training Basics Every Beginner Should Know",
      date: "Dec 05, 2024",
      comments: 4,
       image: "flexibilite.webp",
    },
    {
      id: 5,
      title: "The Science Behind Building Muscle Effectively",
      date: "Sep 19, 2024",
      comments: 6,
       image: "ntr.webp",
    },
  ];

  return (
    <div id="blog" className="blog">
          <div className="headerAbout">
            <Header />
          </div>
    
          <div className="contentAbout">
           <div className="about1">
      <div className="leftCo">
        <p className="p1">Blog</p>
        <p className="p2">
          <Link to="/home" className="accueil-link">Accueil</Link> / Blog
        </p>
      </div>
    </div>
    <section className="blog-section">
      <h2 className="blog-title">Blog</h2>
      <h1>Découvrez des conseils, astuces et actualités sur la nutrition et le
         fitness pour booster vos performances avec FitTrack.</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-overlay">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span><FaCalendarAlt /> {post.date}</span>
                <span><FaComment /> {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div></div>
  );
}
