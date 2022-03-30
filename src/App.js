import React, {useEffect, useState} from 'react';
import {database} from "./firebase";
import {ref, set, onValue, push} from "firebase/database";


function App() {


    const [userId, setUserId] = useState('');
    const [values, setValues] = useState('');
    const starCountRef = ref(database, 'users');
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setUserId(Object.keys(snapshot.val()));
            setValues(Object.values(snapshot.val()));
        });
    }, []);

    const writeNewMessage = (e) => {
        e.preventDefault();
        const postListRef = ref(database, 'users');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            name: e.target[0].value,
            password: e.target[1].value
        });
        e.target[0].value = "";
        e.target[1].value = ""
    };


    const [user, setUser] = useState('');


    const setMassage = (e) => {
        e.preventDefault();
        set(ref(database, 'users/' + `${user}`), {
            name: e.target[0].value,
            password: e.target[1].value,
        });
        setUser('');
        e.target[0].value = "";
        e.target[1].value = ""
    };


    return (
        <div className="App">
            {
                values !== ""
                    ? values.map((item, idx) => (
                        <div key={userId[idx]} onClick={(e) => setUser(userId[idx])}>
                            <span style={{marginRight: '30px'}}>{item.name}</span>
                            <span>{item.password}</span>
                        </div>
                    ))
                    : ""
            }
            <p>add</p>
            <form onSubmit={(e) => writeNewMessage(e)}>
                <input type="text"/>
                <input type="text"/>
                <button type={"submit"}>submit</button>
            </form>

            <p>set</p>
            {user !== ""
                ? <form onSubmit={(e) => setMassage(e)}>
                    <input type="text"/>
                    <input type="text"/>
                    <button type={"submit"}>submit</button>
                </form>
                : ""}
        </div>
    );
}

export default App;
