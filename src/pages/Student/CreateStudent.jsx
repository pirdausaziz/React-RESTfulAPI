import CreateForm from "../../components/CreateForm";

const CreateStudent = () => {

    const inputElements = {
        "name": "Name",
        "matrix": "Matrix No",
        "age": "Age (Years)",
        "course": "Course"
    }

    return (
        <div>
            <h2>This is Create Student page</h2>
            <CreateForm 
                entity="student"
                inputElements={inputElements}
                />
        </div>
    );
};

export default CreateStudent;