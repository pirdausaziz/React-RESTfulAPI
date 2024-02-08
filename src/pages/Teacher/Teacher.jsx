import ViewTable from "../../components/ViewTable"
import { useEffect } from "react";
import { fetchData } from "../../services/requestHandler";
import { useState } from "react";

const Teacher = () => {
    const entity = "teacher";
    const header = ["name", "matrix", "age", "experience (years)", "action"]
    const primKey = "teacher_id";

    const [records, setRecords] = useState();

    useEffect(() => {
        let ignore = false;
        setRecords(null);

        fetchData("api/teacher")
        .then((result) => {
            if (!ignore) {
                setRecords(result.data);
            }
        }).catch(error => {
            console.error(error);
        });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
            <h2>This is Teacher Page</h2>
           <ViewTable 
            entity={entity} 
            records={records} 
            header={header} 
            primKey={primKey}
            /> 
        </div>
        
    );
};
export default Teacher;