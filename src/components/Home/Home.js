import classes from "./Home.module.css";
import mouse_icon from "../../assets/mouse_icon.png";
function Home(){

   
    return(
        <div className={classes.home} >
            <div className={classes.overlay} ></div>
            <div className={classes.text_content}>
               <div></div>
               <div className={classes.content}>
               <h4>HI, I AM SHIVA !</h4>
                <h1>WEB DEVELOPER</h1>
                <p>We help clients express their gesture through websites</p>
               </div>
            </div>
            <div className={classes.mouse_icon}>
              <img src={mouse_icon} alt="Mouse icon"/>
            </div>
        </div>
    )
}

export default Home;