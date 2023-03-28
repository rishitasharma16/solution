import React from "react";
import styles from "./subtable.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SubTable(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="col-12 col-lg-6 my-4">
      <div className={styles.innerTable}>
        <div className={styles.tableHeader}>
          <h5>{props.tableTitle}</h5>
          {/* <div className="table-drpdwn">
            <select name="" class="dashboard-button-black me-lg-3 me-0">
              <option value="Weekly">Show by week</option>
              <option value="monthly">Show by month</option>
            </select>
           <span>View all</span>
          </div> */}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="m-0">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.inner_table_data}>
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
    </div>
  );
}

export default SubTable;
