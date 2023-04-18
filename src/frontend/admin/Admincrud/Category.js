import { useState } from "react";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import { useStyles } from "./CategoryCss";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { signUp } from "../../Config/AxiosConfig";
// import { ServerURL, postData } from "../../Services/FetchNodeServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Category(props) {
  const classes = useStyles();
  var navigate = useNavigate();
  // var [icon, setIcon] = useState({
  //   filename: "/images/Bookflix.png",
  //   bytes: "",
  // });


  // const handlePicture = (event) => {
  //   setIcon({
  //     filename: URL.createObjectURL(event.target.files[0]),
  //     bytes: event.target.files[0],
  //   });
  // };

  const [adminDets, setadmin] = useState({
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    role: "Admin",
    mobileNo: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setadmin({
      ...adminDets,
      [name]: value
    })``
  }

  const clearValues = () => {
    // setName("");
    // setIcon({ filename: "/assets/defaultcar.png", bytes: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { username, email, password, dateOfBirth, mobileNo, role } = adminDets;
    try {
      if (username && email && password && dateOfBirth && mobileNo && role) {
        const res = await signUp(adminDets);
        // debugger;
        // alert("success");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Registered successfully`,
          showConfirmButton: false,
          timer: 1500
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Invalid input`,
        })
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.message}`,
      })
    }
  }
  const handleShowCategoryList = () => {
      navigate("/dashboard/listadmin");
    };

    return (
      <div className={classes.mainContainer}>
        <div className={classes.box} style={{ padding: "7% 2%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.headingStyle}>
              <div className={classes.center} style={{ color: "white", fontSize: '24pt', marginTop: "0%", textTransform: "uppercase" }}>
                <ListAltIcon style={{ cursor: 'pointer', marginTop: "10px" }} onClick={handleShowCategoryList} />

                <div className={classes.center} style={{ marginLeft: 25 }}>Admin</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                name="username"
                type="text"
                value={adminDets.username}
                onChange={handleChange}
                label="Name"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginTop: "0" }} xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                name="email"
                type="email"
                value={adminDets.email}
                onChange={handleChange}
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                name="password"
                type="password"
                value={adminDets.password}
                onChange={handleChange}
                label="Password"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginTop: "0" }} xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                label="Confirm Password"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginTop: "0" }} xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                name="dateOfBirth"
                type="date"
                value={adminDets.dateOfBirth}
                onChange={handleChange}

                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField style={{ backgroundColor: "white" }}
                size="small"
                type="number"
                name="mobileNo"
                value={adminDets.mobileNo}
                onChange={handleChange}
                label="Contact"
                fullWidth
              />
            </Grid>
            {/* <Grid item sx={{padding:"5%"}} xs={8}>
            <Button fullWidth variant="outlined" sx={{padding:"3%"}} component="label">
              Upload
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={handlePicture}
              />
            </Button>
          </Grid>

          <Grid item xs={4} className={classes.center}>
            <Avatar
              alt="Category Icon"
              src={icon.filename}
              variant="rounded"
              sx={{ width: 180, height: 56 }}
            />
          </Grid> */}
            <Grid item xs={6}>
              <Button onClick={submitHandler} variant="contained"
                sx={{
                  backgroundColor: "#6A4D3A",
                  ':hover': {
                    bgcolor: 'black',
                    color: 'white',
                  },
                }}
                fullWidth>
                Submit
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button onClick={clearValues}
                variant="contained"
                sx={{
                  backgroundColor: "#6A4D3A",
                  ':hover': {
                    bgcolor: 'black',
                    color: 'white',
                  },
                }}
                fullWidth>
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
