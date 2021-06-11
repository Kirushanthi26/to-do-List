import React,{useState} from 'react';

const AddInput = (props) => {

    const [addInput, setAddInput] = useState("");

    const handleChange = (e)=>{
        setAddInput(e.target.value);
    }
    // console.log(addInput);

    
    return (
        <div className="form">
            <form>
                <input type="text" onChange={handleChange} value={addInput} />
                <button onClick={(e)=>{
                    e.preventDefault();
                    props.addItems(addInput);
                    setAddInput("");
                }}>ADD</button>
            </form>
        </div>
    )
}

export default AddInput
