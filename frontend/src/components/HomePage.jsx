import '@fortawesome/fontawesome-free/css/all.css';
import AiIcon from '../assets/ai.svg';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN } from "../constants"


function HomePage(){
    const navigate = useNavigate();
    const checkLogin = () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            navigate("/Community");
        } else {
            navigate("/login");
        }
    }
    const checkLoginProjects = () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            navigate("/Projects");
        } else {
            navigate("/login");
        }
    }
    return(<>
            
            <div className="header-container">
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li onClick={checkLogin}>Community</li>
                    <li onClick={checkLoginProjects}>Projects</li>
                </ul>
            </nav>
            <div className="home-paragraph-container">
            <p className="home-paragraph">
                Welcome to My <span>BLOG</span> You're Machine Learning Journey Starts Here.
            </p>
            <img src={AiIcon} alt="AI Algorithm"></img>

            <button onClick={checkLogin}>Get Started <i className="fas fa-arrow-up my-arrow"></i></button>
            
            </div>
            </div>
            
            <section className='box-container'>
                <div className='box'>
                    <span>Supervised learning</span>
                    Supervised learning trains models on labeled 
                    data to predict outcomes for new, 
                    unseen data.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className='box'>
                    <span>Unsupervised learning</span>
                    Finds hidden patterns or groupings in data without 
                    labeled outputs or predefined categories.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className='box'>
                    <span>Deep learning</span>
                    Uses neural networks with many layers to learn 
                    complex patterns from large amounts of data.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className='box'>
                    <span>Reinforcement learning</span>
                    Learns optimal actions through trial and error, receiving 
                    rewards or penalties from an environment.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className='box'>
                    <span>Semi-supervised learning</span>
                    Combines a small amount of labeled data with lots 
                    of unlabeled data to improve learning accuracy.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <div className='box'>
                    <span>Self-Supervised learning</span>
                    Generates labels from raw data itself, 
                    learning useful representations without manual labeling.
                    <a href="community" className="read-more">Read more 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>

            </section>
            <footer>
                <a href="https://github.com/NzJulien" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                <a href="https://x.com/Nzoko_Julien" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                <a href="https://www.instagram.com/nzokojulien/" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                <a href="https://www.linkedin.com/in/nzoko-julien-371768379/?originalSubdomain=cm" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                <span>&copy; 2025 My Blog</span>
            </footer>
            </>)

}
export default HomePage