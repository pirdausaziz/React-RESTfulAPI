import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteRequest } from "../services/requestHandler";

const AlertBox = (props) => {

    const requestDelete = async (id) => {
        console.log("requestDelete");
        deleteRequest(`api/${props.entity}`, id)
        .then (result => {
            console.log(result);
        }).catch (error => {
            console.log(error);
        });
    }

    const confirmDeleteHandler = async () => {
        await requestDelete(props.id);
        setTimeout(() => {
            window.location.reload();
        }, 10);
    };

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Remove Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Remove <strong>{props.name}</strong> from the list?<br />(Process can't be undone)</Modal.Body>
            <Modal.Footer>

            <Button variant="primary"
                    onClick={confirmDeleteHandler}>
                Yes
            </Button>
            <Button variant="secondary" onClick={props.onHide}>
                No
            </Button>
            </Modal.Footer>
        </Modal>
  );
};

export default AlertBox;