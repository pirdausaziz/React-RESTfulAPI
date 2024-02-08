import CreateForm from "../../component/CreateForm";

const CreateTeacher = () => {

    const inputElements = {
        "name": "Name",
        "matrix": "Matrix No",
        "age": "Age (Years)",
        "experience": "Experience (Years)"
    }

    return (
        <div>
            <h1>This is Create Teacher page</h1>
            <CreateForm 
                entity="teacher"
                inputElements={inputElements}
                />
        </div>
    );
};
export default CreateTeacher;