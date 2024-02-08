import ViewTable from "../../component/ViewTable"
import { useEffect } from "react";
import { fetchData } from "../../services/requestHandler";
import { useState } from "react";

const Subject = () => {
    const entity = "subject";
    const header = ["name", "code", "action"]
    const primKey = "subject_id";

    const [records, setRecords] = useState();

    useEffect(() => {
        let ignore = false;
        setRecords(null);

        fetchData("api/subject")
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
            <h2>This is Subject Page</h2>
           <ViewTable 
            entity={entity} 
            records={records} 
            header={header} 
            primKey={primKey}
            /> 
        </div>
        
    );
};
export default Subject;