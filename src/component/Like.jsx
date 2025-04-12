import { useState, useEffect } from 'react';
import './style.css'
import { ref, onValue } from "firebase/database";
import { addLike, removeLike } from '../firebase/CRUD/operation.js'
import { database } from '../firebase/firebase.js';
import Counter from './Counter.jsx';

function Like() {
    const [value, setValue] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    const handleChange = (e) => {   
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        
        if (newChecked) {
            addLike(value);
        } else {
            removeLike(value);
        }
        localStorage.setItem('likeChecked', newChecked);
    }

    useEffect(() => {
        // Get the stored liked state from localStorage
        const storedChecked = localStorage.getItem('likeChecked') === 'true';
        
        // Set up Firebase listener first to get the current value
        const dbRef = ref(database, "portfolio/likes");
        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const currentLikes = snapshot.val().like;
                setValue(currentLikes);
                
                // Only run this logic once after initialization
                if (!isInitialized) {
                    setIsChecked(storedChecked);
                    setIsInitialized(true);
                }
            } else {
                console.log("No data available");
                setIsInitialized(true);
            }
        });

        // Clean up the listener when component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div 
            className="flex gap-2 text-white font-custom text-2xl"
            role="group"
            aria-label="Like counter"
        >
            <div 
                className="heart-container"
                role="button"
                aria-pressed={isChecked}
                aria-label="Like button"
            >
                <input
                    id="like-checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                    type="checkbox"
                    aria-label="Like checkbox"
                />
                <div 
                    className="svg-container"
                    aria-hidden="true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-outline"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-filled"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="100"
                        width="100"
                        className="svg-celebrate"
                        aria-hidden="true"
                    >
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                    </svg>
                </div>
            </div>
            <Counter
                value={value}
                places={[100, 10, 1]}
                fontSize={30}
                padding={5}
                gap={1}
                textColor="white"
                fontWeight={400}
                aria-label={`${value} likes`}
            />
        </div>
    );
}

export default Like;