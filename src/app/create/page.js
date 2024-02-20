"use client";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CustomToast } from "./toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCreate = () => {
  //  console.log(details);

    setLoading(true);
    toast.loading("アカウントを追加する");
    axios
      .post(`http://localhost:5008/v1/create-account`, details)
      .then((res) => {
    //    console.log(res.data);
        setLoading(false);
        toast.dismiss();
        toast((t) => (
          <CustomToast type="success" message="アカウントの追加に成功しました。" />
        ));
        setDetails(null);
        router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        toast.dismiss();
        setLoading(false);
        toast.loading("error ");
        toast.error(e?.response.data.message);
      });
  };
  return (
    <>
      <Grid>
        <Grid container>
          <Grid item lg={4} p={4}>
            <Card>
              <CardHeader title="Enter Details" />
              <CardContent>
                <Grid item container gap={2}>
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Email"
                    name="email"
                    value={details?.email}
                    type="email"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Password"
                    name="password"
                    value={details?.password}
                    type="password"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Repeat Password"
                    name="re_password"
                    value={details?.re_password}
                    type="password"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Company id"
                    name="company_id"
                    value={details?.company_id}
                    type="text"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Location id"
                    name="location_id"
                    value={details?.location_id}
                    type="text"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    variant="standard"
                    label="Enter Access Code for creating data"
                    name="access_code"
                    value={details?.access_code}
                    type="password"
                  />
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    variant="standard"
                    label="APIキー"
                    name="apiSecretKey"
                    value={details?.apiSecretKey}
                    type="text"
                  />
                </Grid>

                <Grid container py={2} display={"flex"} justifyContent={"end"}>
                  <Button
                    loading={loading}
                    onClick={handleCreate}
                    fullWidth
                    variant="outlined"
                  >
                    Create
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
