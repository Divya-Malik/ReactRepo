import { JSONDATA } from './constants'
function Dashboard() {
  return (
    <div>
    <table style={{border:'2px solid black' }}>
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
                    <td>{data.gender}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNo}</td>
                </tr>
            )}
               </tbody>
           </table>
    </div>
  );
}

export default Dashboard;