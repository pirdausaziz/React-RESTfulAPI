import ViewTable from "../../component/ViewTable"
import { useEffect } from "react";
import { fetchData } from "../../services/requestHandler";
import { useState } from "react";

const Student = () => {
    const entity = "student";
    const header = ["name", "matrix", "age", "course", "action"]
    const primKey = "student_id";

    const [records, setRecords] = useState();

    useEffect(() => {
        let ignore = false;
        setRecords(null);

        fetchData("api/student")
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
            <h2>This is Student Page</h2>
           <ViewTable 
            entity={entity} 
            records={records} 
            header={header} 
            primKey={primKey}
            /> 
        </div>
        
    );
};
export default Student;