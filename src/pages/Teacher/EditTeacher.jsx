import { useState } from "react";
import { useEffect } from "react";
import EditForm from "../../components/EditForm";
import { useParams } from "react-router-dom";
import { fetchOneData } from "../../services/requestHandler";

const EditTeacher = () => {
    const [records, setRecords] = useState({})
    const { id } = useParams();

    const inputElements = {
        "name": "Name",
        "matrix": "Matrix No",
        "age": "Age (Years)",
        "experience": "Experience (Years)"
    }

    useEffect(() => {
        let ignore = false;
        setRecords({});
        console.log("requestData");

        fetchOneData("api/teacher", id)
            .then((result) => {
                console.log("result", result.data);
                if (!ignore) {
                    setRecords({ ...result.data[0] });
                    console.log("result", result);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        return () => {
            ignore = true;
        };
    }, []);


    return (
        <div>
            <h2>This is Edit Teacher page</h2>
            <EditForm 
                entity="teacher"
                id={id}
                records={records}
                inputElements={inputElements}
                />
        </div>
    );

};

export default EditTeacher;