import React from "react";
import styles from './table.module.css'

function Table() {
  return (
    <div className="col-12 mt-5">
      <div className={styles.tableInside}>
        <div className={styles.tableHeader}>
        <h5>Heading demo</h5>
        <a href="#">View All</a>
        </div>
       
      <table class="table">
            <thead>
              <tr>
                <th scope="col">Project Name</th>
                <th scope="col">Deadline</th>
                <th scope="col">Client Name</th>
                <th scope="col">Invite Type</th>
                <th scope="col">Allocated</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Project Name">Editor's inline</td>
                <td data-label="Deadline">28/11/2022</td>
                <td data-label="Client Name">Jone Dow</td>
                <td data-label="Invite Type">Video</td>
                <td data-label="Name">
                  <img src="assets/image/avatar-13.png" />
                  Mark
                </td>
                <td data-label="Allocated">
                  <span class="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td data-label="Project Name">Editor's inline</td>
                <td data-label="Deadline">28/11/2022</td>
                <td data-label="Client Name">Jone Dow</td>
                <td data-label="Invite Type">Video</td>
                <td data-label="Name">
                  <img src="assets/image/avatar-13.png" />
                  Mark
                </td>
                <td data-label="Allocated">
                  <span class="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td data-label="Project Name">Editor's inline</td>
                <td data-label="Deadline">28/11/2022</td>
                <td data-label="Client Name">Jone Dow</td>
                <td data-label="Invite Type">Video</td>
                <td data-label="Name">
                  <img src="assets/image/avatar-13.png" />
                  Mark
                </td>
                <td data-label="Allocated">
                  <span class="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td data-label="Project Name">Editor's inline</td>
                <td data-label="Deadline">28/11/2022</td>
                <td data-label="Client Name">Jone Dow</td>
                <td data-label="Invite Type">Video</td>
                <td data-label="Name">
                  <img src="assets/image/avatar-13.png" />
                  Mark
                </td>
                <td data-label="Allocated">
                  <span class="badge bg-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td data-label="Project Name">Editor's inline</td>
                <td data-label="Deadline">28/11/2022</td>
                <td data-label="Client Name">Jone Dow</td>
                <td data-label="Invite Type">Video</td>
                <td data-label="Name">
                  <img src="assets/image/avatar-13.png" />
                  Mark
                </td>
                <td data-label="Allocated">
                  <span class="badge bg-warning">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default Table;
