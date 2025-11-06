import React from "react";
import { Router } from "react-router-dom";



import community from "../assets/community.png"
import profile from "../assets/profile.jpeg"
import { Link } from 'react-router-dom';
import problems from "../assets/problems.png"
import initaitives from "../assets/initiative.png"
import book from "../assets/book.png"

function About(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-text">
                    <img src={profile} alt="profile" /><p>
                        I'm Nzoko Lontchi Julien, a 
                        Computer Science undergraduate Student in Cameroon 
                        with a deep passion for technology and artificial 
                        intelligence. My journey into software engineering 
                        began not with ideal resources or widespread support
                        , but with curiosity, late nights of self-learning
                        , and a burning desire to build. What started 
                        as experimentation has grown into full-stack development and a 
                        focused interest in machine learning
                    </p>
                </div>
                <h1>Our community</h1>
                <div className="about-text">
                    <img src={community} alt="community" /><p>
                        The reality is, in my local community
                        , software engineering especially 
                        machine learning is often 
                        overlooked. Few people take initiative 
                        in this space, and even fewer take it 
                        seriously. But I believe that talent 
                        exists everywhere; it just needs the 
                        right spark. My mission is to be that 
                        spark for others. If you're a young mind 
                        in Cameroon (or anywhere) with a passion 
                        for tech, I see you and this space 
                        is for you.
                    </p>
                </div>
                <h1>Problems We Face</h1>
                <div className="about-text">
                    <img src={problems} alt="problems" /><p>
                        Pushing forward in this environment 
                        hasn’t been easy. Lack of resources, 
                        minimal mentorship, and a general 
                        culture of inaction around tech 
                        innovation have all stood in the way. 
                        The hardest part hasn’t been learning 
                        the code. It’s been finding a community 
                        that believes in the same dream.
                    </p>
                </div>
                <h1>Initiatives</h1>
                <div className="about-text">
                    <img src={initaitives} alt="initiatives" /><p>
                        That challenge inspired me to stop 
                        waiting and start building. I created a 
                        full-stack blog focused on machine 
                        learning, not just to share my work, 
                        but to educate, inspire, and showcase what’s 
                        possible when someone chooses to take action. 
                        It's more than a blog; it’s a commitment to growth, 
                        knowledge-sharing, and real impact.
                    </p>
                </div>
                <h1>Future Goals</h1>
                <div className="about-text">
                    <img src={book} alt="book" /><p>
                        This is only the beginning. 
                        I recently authored a book on 
                        machine learning, deeply inspired 
                        by Brian Hu’s CS50’s Introduction to 
                        Machine Learning From Harvard's
                        course. A course that reshaped my 
                        understanding and inspired me to 
                        push further. Through this book and 
                        my blog, I aim to empower others to 
                        rise above apathy and start building.
                    </p>
                </div>

            </div>                
                <footer>
                    <a href="https://github.com/NzJulien" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    <a href="https://x.com/Nzoko_Julien" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                    <a href="https://www.instagram.com/nzokojulien/" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/nzoko-julien-371768379/?originalSubdomain=cm" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    <span>&copy; 2025 My Blog</span>
                </footer>
        </>
    );
}
export default About