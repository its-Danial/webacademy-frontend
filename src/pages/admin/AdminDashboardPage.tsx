import { Grid, Paper } from "@mui/material";
import { FC } from "react";
import BarChart from "../../components/admin-dashboard/BarChart";
import Chart from "../../components/admin-dashboard/Chart";
import Deposits from "../../components/admin-dashboard/Deposits";
import DonutChart from "../../components/admin-dashboard/DonutChart";
import Orders from "../../components/admin-dashboard/Orders";

type AdminDashboardPageProps = {};

const AdminDashboardPage: FC<AdminDashboardPageProps> = (props) => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          aria-label="Customer Summary"
          title="Customer Summary"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          aria-label="Recent Bid Summary"
          title="Recent Bid Summary"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>

      {/* Second Small Chart */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          aria-label="Todays activity Summary"
          title="Todays activity Summary"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          {/* <Doughnut data={data} /> */}
          <DonutChart />
        </Paper>
      </Grid>

      {/* Second Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          aria-label="Factory activity Summary"
          title="Factory activity Summary"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <BarChart />
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper
          aria-label="Todays Bid Summary"
          title="Todays Bid Summary"
          sx={{ p: 2, display: "flex", flexDirection: "column" }}
        >
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default AdminDashboardPage;
