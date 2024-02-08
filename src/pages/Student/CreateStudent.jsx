import CreateForm from "../../component/CreateForm";

const CreateStudent = () => {

    const inputElements = {
        "name": "Name",
        "matrix": "Matrix No",
        "age": "Age (Years)",
        "course": "Course"
    }

    return (
        <div>
            <h1>This is Create Student page</h1>
            <CreateForm 
                entity="student"
                inputElements={inputElements}
                />
        </div>
    );
};

export default CreateStudent;