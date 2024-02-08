import CreateForm from "../../components/CreateForm";

const CreateSubject = () => {

    const inputElements = {
        "name": "Name",
        "code": "Code"
    }

    return (
        <div>
            <h2>This is Create Subject page</h2>
            <CreateForm 
                entity="subject"
                inputElements={inputElements}
                />
        </div>
    );
};

export default CreateSubject;