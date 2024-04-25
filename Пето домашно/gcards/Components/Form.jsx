import React, {useState} from 'react';
import axios from 'axios';

const Form = ({onSubmit}) => {
    const [userName, setUserName] = useState("");

    const handleChange = (e) =>{
        setUserName(e.currentTarget.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = 
        await axios.get(`https://api.github.com/users/${userName}`);
        onSubmit(resp.data);
        setUserName('');
    }

    return(
    <>
    <form onSubmit={handleSubmit}>
    	  <input 
          type="text" 
          value={userName}
          onChange={handleChange}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    </>);
};

export default Form;