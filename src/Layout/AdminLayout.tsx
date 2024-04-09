import { Grid, GridItem } from "@chakra-ui/layout";
import { AdminNavbar } from "../components/Admin/AdminNavbar";
import { Outlet, useNavigate } from "react-router";

export const AdminLayout = () => {
  const navigate = useNavigate();

  if (
    !localStorage.getItem("token") ||
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === ""
  )
    navigate("/login");

  return (
    <Grid
      templateAreas={`"nav nav"
                      "main main"`}
      gridTemplateColumns={"150px 1fr"}
      maxW={1000}
      m="auto"
      gap={8}
    >
      <GridItem area={"nav"}>
        <AdminNavbar />
      </GridItem>
      <GridItem area={"main"} p={4}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
