import React from "react";
import Chart from "react-apexcharts";
import styles from './chart.module.css'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SquareIcon from '@mui/icons-material/Square';
function DonutChart(props) {

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const series = [44, 55, 23, 85];

  const options = {
    chart: {
      type: "donut",
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
  };
  return (
    <div className="col-12 col-lg-4">
      <div className={styles.chartInside}>
        <div className={styles.chartTitle}>
            <h5>{props.chartTitle}</h5>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="m-0">
            <InputLabel id="demo-select-small">Select</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Week</MenuItem>
              <MenuItem value={20}>Month</MenuItem>
              <MenuItem value={30}>Year</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Chart options={options} type="donut" series={series} height={350} />
        <div className={styles.chartItem} >
         <p><span className={styles.leftItem}><SquareIcon/>Direct</span><span>785</span></p>
         <p><span className={styles.leftItem}><SquareIcon/>Direct</span><span>785</span></p>
         <p><span className={styles.leftItem}><SquareIcon/>Direct</span><span>785</span></p>
         <p><span className={styles.leftItem}><SquareIcon/>Direct</span><span>785</span></p>
         </div>
      </div>
    </div>
  );
}

export default DonutChart;
