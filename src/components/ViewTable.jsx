import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import AlertBox from "./AlertBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewTable = ({ entity, records, header, primKey }) => {

    const navigate = useNavigate();
    const [showAlertBox, setAlertBox] = useState(false);
    const [inputAlertBox, setInputAlertBox] = useState({
        id: "",
        name: "",
        entity: ""
    });

    const renderHeader = () => {
        const headerData = header.map((item, index) => {
            return <th
                    style={{ textTransform: 'capitalize' }}
                    key={`${index}`}>{item}</th>;
        });
        return headerData;
    };

    const renderColumn = () => {
        const columnData = records && records.map((record, index) => {
            const id = record[primKey];
            return (
                <tr key={`${id}_${index}`}>
                    {delete record[primKey]}
                    {
                        Object.values(record).map(value => {
                            return <td key={`${id}_${index}_${value}`}>{value}</td>;
                        })
                    }
                    {renderEditDeleteButton(id, record.name)}
                </tr>
            );
        });
        return columnData;
    };

    const renderEditDeleteButton = (id, name) => {
        return (
            <td className="d-flex justify-content-center">
                <Button 
                    as={Link} to={`/${entity}/edit/${id}`}
                    variant="primary" 
                    className="mx-1"
                    >Edit
                </Button>
                <Button 
                    variant="danger"
                    data-id={id}
                    data-name={name}
                    onClick={ (e) => {
                        setInputAlertBox({
                            id: e.target.dataset.id,
                            name: e.target.dataset.name,
                            entity: entity
                        });
                        setAlertBox(true);
                    }}
                    className="mx-1"
                    >
                    Delete
                </Button>
                <AlertBox
                    show={showAlertBox} 
                    onHide={() => {
                        setAlertBox(false);
                    }} 
                    id={inputAlertBox.id}
                    name={inputAlertBox.name}
                    entity={inputAlertBox.entity}
                    />
            </td>
        );
    }

    return (
        <div>
            <div style={{textAlign: 'left', margin:"10px"}}>
                <Button onClick={() => navigate(`/${entity}/create`)} variant="primary">CreateNew</Button>
            </div>
            <Table bordered hover className="text-center">
                <thead>
                    <tr key={entity}>
                        {renderHeader()}
                    </tr>
                </thead>
                <tbody>
                    {renderColumn()}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewTable;