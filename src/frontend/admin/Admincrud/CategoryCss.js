import { makeStyles } from "@mui/styles";
import { flexbox } from "@mui/system";
export const useStyles=makeStyles({

  mainContainer:{
    width:'100%',
    height:"100%",
    // backgroundImage: `url('/images/Web 1920 – 1.png')`,
    paddingBottom:"0%",
    // borderRadius:'10px',
    borderLeft:"2px solid #ecf0f1",
    // boxShadow: "1px 1px 4px 4px #ecf0f1",
    // background:'#fff',
    marginTop:'0%',
    // marginLeft:"15%",
  },
  box:{
  width:'65%',
  opacity:'0.8',
  height:"auto",
  // backgroundColor:"black",
  backgroundImage: `url('/images/Web 1920 – 1.png')`,
  padding:"2%",
  borderRadius:'10px',
  // border:"2px solid #ecf0f1",
  // boxShadow: "10px 10px 10px 10px  white",
  // background:'#fff',
  marginTop:'0%',
  marginLeft:"18%",
},
headingStyle:{
  fontWidth:24,
  fontWeight:'bold',
  letterSpacing:5,
  paddingTop:0,
  paddingBottom:5    
},
center:{display:'flex',
justifyContent:'left',
alignItem:'center',
flexDirection:'row',
// alignItem:"center"
},

})
