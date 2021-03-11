import { JSONDATA } from './constants'
import './index.css';

function Dashboard() {
  return (
    <>
      <div style={{ marginLeft: '42%', marginTop: '2%' }}><h2>EMPLOYEES DATA</h2></div>
      <div className="login">

        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>Email</th>
              <th>PhoneNo.</th>

            </tr>
          </thead>
          <tbody>
            {JSONDATA.map(data =>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;