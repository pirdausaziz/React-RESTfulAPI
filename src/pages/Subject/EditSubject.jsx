import { useState } from "react";
import { useEffect } from "react";
import EditForm from "../../components/EditForm";
import { useParams } from "react-router-dom";
import { fetchOneData } from "../../services/requestHandler";

const EditSubject = () => {
    const [records, setRecords] = useState({})
    const { id } = useParams();

    const inputElements = {
        "name": "Name",
        "code": "Course Code"
    }

    useEffect(() => {
        let ignore = false;
        setRecords({});
        console.log("requestData");

        fetchOneData("api/subject", id)
            .then((result) => {
                if (!ignore) {
                    setRecords({ ...result.data[0] });
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
            <h2>This is Edit Subject page</h2>
            <EditForm 
                entity="subject"
                id={id}
                records={records}
                inputElements={inputElements}
                />
        </div>
    );

};

export default EditSubject;