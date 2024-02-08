import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/requestHandler";

const CreateForm = ( {entity, inputElements} ) => {
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const verify = true;
        console.log(state);
        requestPost(state);
    }

    const requestPost = async (data) => {
        try {
            await postRequest(`api/${entity}`, data)
            setTimeout(() => {
                navigate(`/${entity}`);
            }, 100);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name: ${name}, value: ${value}`);
        setState ((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const createInputElement = (name, placeholder) => {
        console.log(state);
        return (
            <div className="d-flex flex-column">
                <input  className="p-1 my-2"
                        placeholder={placeholder}
                        type="text" 
                        name={name}
                        onChange={handleInputChange}
                        value={state[name]}/>
            </div>
        );
    };

    const renderInputElement = () => {
        return Object.entries(inputElements).map(([name, placeholder]) => {
            return createInputElement(name, placeholder);
        });
    };

    return (
        <div>
            <div style={{textAlign: 'left', margin:"10px"}}>
                <Button onClick={() => navigate(`/${entity}`)} variant="secondary">{"<Back"}</Button>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit} className="d-flex flex-column ml-auto px-5 my-3">
                {renderInputElement()}
                <div className="d-flex justify-content-between">
                    <Button 
                        variant="primary"
                        type="submit"
                        >
                        Submit
                    </Button>
                    <Button variant="danger" onClick={()=>window.location.reload()}>Reset</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;