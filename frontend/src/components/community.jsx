import { useState, useEffect } from "react"
import api from "../api";
import { Link } from "react-router-dom";
import Note from "./notes";
function Community(){
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        api
        .get("/api/notes")
        .then((res) => res.data)
        .then((data) => {setNotes(data); console.log(data)})
        .catch((err) => alert(err))
    }
    const deleteNote = (id) =>{
        api
        .delete(`/api/notes/delete/${id}/`)
        .then((res) => {
            if(res.status === 204) alert("Notes deleted!")
            else alert("Failed to delete note.")
        getNotes()
        }).catch((error) => alert(error))
        
    }
    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", {content, title}).then((res) => {
            if (res.status === 201) alert("Note created")
            else alert("Failed to make note.")
            getNotes()
        }).catch((err) => alert(err))
        
    }
    return (
        <>
        <div className="community-body">
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>

            <div className="community-container">
                <span>Posts</span>
                {notes.map((note) => <Note note={note} 
                onDelete={deleteNote} key={note.id}/>)}
            </div>
            </div>
            <footer className=".community-footer">
                <a href="https://github.com/NzJulien" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                <a href="https://x.com/Nzoko_Julien" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                <a href="https://www.instagram.com/nzokojulien/" target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                <a href="https://www.linkedin.com/in/nzoko-julien-371768379/?originalSubdomain=cm" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                <span>&copy; 2025 My Blog</span>
            </footer>
    </>
    )
}
export default Community