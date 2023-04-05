import { useEffect, useState } from "react";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import { useStyles } from "./CategoryCss";
import ListAltIcon from "@mui/icons-material/ListAlt";

// import { ServerURL, postData } from "../../Services/FetchNodeServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Category(props) {
  const classes = useStyles();
  var navigate = useNavigate();
  var [icon, setIcon] = useState({
    filename: "/images/Bookflix.png",
    bytes: "",
  });
  var [ID, setName] = useState("");
  var [Title, setEmail] = useState("");
  var [Author, setPassword] = useState("");
  var [Price, setCpass] = useState("");
  var [Genre, setDob] = useState("");
  var [Language, setMobileNo] = useState("");
  var [Url, setRole] = useState("");
  var [Description, setRole] = useState("");

  const handlePicture = (event) => {
    setIcon({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  const handleSubmit = async () => {
    var formData = new FormData();
    // formData.append("categoryname", categoryName);
    formData.append("icon", icon.bytes);
    var response 
    // = await postData("category/categorysubmit", formData);
    if (response.status) {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: "Category Submitted Successfully",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const clearValues = () => {
    // setCategoryName("");
    setIcon({ filename: "/assets/defaultcar.png", bytes: "" });
  };
  const handleShowCategoryList = () => {
    navigate("/dashboard/listbook");
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingStyle}>
            <div className={classes.center} style={{ color:"white", fontSize:'24pt', padding:"0%",textTransform:"uppercase" }}>
              <ListAltIcon style={{cursor:'pointer',marginTop:"10px"}} onClick={handleShowCategoryList} />

              <div style={{ marginLeft: 25}}>Book</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ backgroundColor:"white"}}
            variant="filled"
            color="error"
            size="small"
              onChange={(event) => setName(event.target.value)}
              label="ID"
              fullWidth
            />
          </Grid>
          <Grid item style={{marginTop:"0"}} xs={12}>
            <TextField style={{ backgroundColor:"white" }}
            color="error"
            variant="filled"
            size="small"
              onChange={(event) => setEmail(event.target.value)}
              label="Title"
              fullWidth
            />
          </Grid>
          <Grid item style={{marginTop:"0"}} xs={6}>
            <TextField style={{ backgroundColor:"white" }}
            id="outlined-error"
            color="error"
            variant="filled"
            size="small"
            onChange={(event) => setCpass(event.target.value)}
              label="Author"
              fullWidth
            />
          </Grid>
          <Grid item style={{marginTop:"0"}} xs={6}>
            <TextField style={{ backgroundColor:"white" }}
            id="outlined-error"
            variant="filled"
            color="error"
            size="small"
            onChange={(event) => setDob(event.target.value)}
              label="Price"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ backgroundColor:"white" }}
            id="outlined-error"
            color="error"

            variant="filled"
            size="small"
            onChange={(event) => setPassword(event.target.value)}
              label="Genre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ backgroundColor:"white"}}
            id="outlined-error"
            variant="filled"
            size="small"
            color="error"

            onChange={(event) => setMobileNo(event.target.value)}
              label="Language"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ backgroundColor:"white"}}
            id="outlined-error"
            color="error"
            variant="filled"
            size="small"
            onChange={(event) => setMobileNo(event.target.value)}
              label="URL"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField style={{ backgroundColor:"white"}}
            variant="filled"
            color="error"
            size="small"
            onChange={(event) => setMobileNo(event.target.value)}
              label="Description"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField style={{ backgroundColor:"white"}}
            id="outlined-error"
            size="small"
            onChange={(event) => setMobileNo(event.target.value)}
              label="Language"
              fullWidth
            /> */}
          </Grid>
          <Grid item sx={{padding:"5%"}} xs={8}>
            <Button fullWidth variant="outlined" color="error" sx={{padding:"3%"}} component="label">
              Upload
              <input
                hidden
                error
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
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleSubmit} variant="contained" color="error" fullWidth>
              Submit
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button onClick={clearValues} variant="contained" color="error" fullWidth>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
