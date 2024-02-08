import CreateForm from "../../components/CreateForm";

const CreateTeacher = () => {

    const inputElements = {
        "name": "Name",
        "matrix": "Matrix No",
        "age": "Age (Years)",
        "experience": "Experience (Years)"
    }

    return (
        <div>
            <h2>This is Create Teacher page</h2>
            <CreateForm 
                entity="teacher"
                inputElements={inputElements}
                />
        </div>
    );
};
export default CreateTeacher;