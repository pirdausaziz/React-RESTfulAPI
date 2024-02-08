import CreateForm from "../../component/CreateForm";

const CreateSubject = () => {

    const inputElements = {
        "name": "Name",
        "code": "Code"
    }

    return (
        <div>
            <h1>This is Create Subject page</h1>
            <CreateForm 
                entity="subject"
                inputElements={inputElements}
                />
        </div>
    );
};

export default CreateSubject;