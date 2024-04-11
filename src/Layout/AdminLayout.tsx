import { Grid, GridItem } from "@chakra-ui/layout";
import { AdminNavbar } from "../components/Admin/AdminNavbar";
import { Outlet, useNavigate, Navigate } from "react-router";
import { useEffect } from "react";

export const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === ""
    )
      navigate("/login");
  }, [navigate]);

  if (
    !!localStorage.getItem("token") ||
    localStorage.getItem("token") !== null ||
    localStorage.getItem("token") !== ""
  )
    return <Navigate to="/login" />;

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
