import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { putRequest, fetchOneData } from "../services/requestHandler";

const EditForm = ({ entity, id, records, inputElements }) => {
    const navigate = useNavigate();
    const [state, setState] = useState(records)
    console.log("state", records);
    useEffect(() => {
        setState(records);
    }, [records]);

    const requestPut = async (data) => {
        console.log("requestPut");
        try {
            const result = await putRequest(`api/${entity}`, id, data);
            console.log("finish", result);
            setTimeout(() => {
                navigate(`/${entity}`);
            }, 100);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit: ", state);
        requestPut(state);
    }

    const handleReset = (event) => {
        event.preventDefault();
    };
        
    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
            <form autoComplete="off" onReset={handleReset} onSubmit={handleSubmit} className="d-flex flex-column ml-auto px-5 my-3">
                {renderInputElement()}
                <div className="d-flex justify-content-between">
                    <Button 
                        variant="primary"
                        type="submit"
                        >
                        Submit
                    </Button>
                    <Button variant="danger" type="reset">Reset</Button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;