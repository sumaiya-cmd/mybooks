import { makeStyles } from "@mui/styles";
import { flexbox } from "@mui/system";
export const useStyles=makeStyles({

    
      box:{
        width:'100%',
        padding:"0% 2% 2% 2%",
        // paddingTop:0,
        // borderRadius:10,
        // marginTop:'0%',
        //  backgroundImage: `url('/images/Web 1920 – 1.png')`,    
        borderLeft:"2px solid #ecf0f1",
      },

      dialogContainer:{
        display:'flex',
        width:'100%',
        height:'100%',
       // backgroundImage: `url('/images/Web 1920 – 1.png')`,
        padding:'0%'
      },

      dialogBox:{
        width:'100%',
        backgroundImage: `url('/images/Web 1920 – 1.png')`,
        height:"auto",
        padding:'9% 2% 9% 2%',
        // margin:"8%",
        marginTop:"0",
        borderRadius:10,
        // background:'#fff'
      },

      headingStyle:{
        fontWidth:24,
        fontWeight:'bold',
        letterSpacing:1,
        paddingTop:5,
        paddingBottom:5    
        },
      center:{
        display:'flex',
        justifyContent:'center',
        alignItem:'center'
      }

})
