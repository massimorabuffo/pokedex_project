import { useState } from "react"

const Form = () => {
    const [value, setValue] = useState({
        username: '',
        password: '',
        remember: false,
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        console.log(checked);
        setValue(prev => {
            return {
                ...prev,
                [name]: name === 'remember' ? checked : value,
            }
        })
    }

    return <>
                <form>
                    <input type="text" value={value.username} name='username' onChange={handleInputChange}/>
                    <input type="password" value={value.password} name='password' onChange={handleInputChange}/>
                    <input type="checkbox" id="checkbox" name='remember' checked={value.remember} onChange={handleInputChange}/>
                    <label htmlFor="checkbox">Remember me</label>
                    <button type="submit">Submit</button>
                </form>
            </>
}

export default Form