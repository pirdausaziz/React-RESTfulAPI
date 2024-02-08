import Table from "react-bootstrap/Table";

const Home = () => {
    return(
        <div className="tc">
            <h2>Dashboard</h2>
            <Table bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Subject</td>
                        <td><a href="http://localhost:3001/api/subject">http://localhost:3001/api/subject</a></td>
                    </tr>
                    <tr>
                        <td>Teacher</td>
                        <td><a href="http://localhost:3001/api/teacher">http://localhost:3001/api/teacher</a></td>
                    </tr>
                    <tr>
                        <td>Student</td>
                        <td><a href="http://localhost:3001/api/student">http://localhost:3001/api/student</a></td>
                    </tr>
                    <tr>
                        <td>Table</td>
                        <td><a href="http://localhost:3001/api/table">http://localhost:3001/api/table</a></td>
                    </tr>
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Home;