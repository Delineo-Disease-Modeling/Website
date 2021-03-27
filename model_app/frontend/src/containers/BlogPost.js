import React, { useState, useRef } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link, useHistory } from 'react-router-dom';
import './BlogPost.css'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FacebookButton, TwitterButton, EmailButton } from "react-social";
import clsx from 'clsx';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CommentBox from "./CommentBox";


 const useStyles = makeStyles((theme) => ({
   center: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     width: "70%",
   },
   text: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center"

   },
 }));

const INITIAL_HEIGHT = 46;
const url = 'google.com';
function BlogPost (props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
    let history = useHistory();
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  }
  const onChange = (e) => {
    setCommentValue(e.target.value);
	}

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
  e.preventDefault();
  console.log('send the form data somewhere')
  }
  const classes = useStyles();
   return (

    <div className="App">
        <Toolbar></Toolbar>

      <div className="center">

        <h2 style={{ color: "black", fontWeight: 'bold', marginBottom: '-30px'}}>Machine Learning Website Development</h2>
        <h4 style={{ color: "grey", fontWeight: 'bold', marginBottom: '-2px'}}>Subtitle of Blog Post</h4>
        <div>
        <div className="relative m-r-10 w-50 h-50 b-r-full" style={{backgroundImage: 'url("https://webassets.mongodb.com/_com_assets/cms/Siya-adfnai3e2j.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />

          <small>
          <img class="photo" src="/iconPerson.png"/>Author Name &#8226; Date of Blog
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
              <IconButton aria-label="share" {...bindTrigger(popupState)}>
              <ShareIcon  style={{color: "black"}} />
              </IconButton>
              <Menu anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
              <MenuItem style={{color: "black"}} onClick={popupState.close}>
              <TwitterButton url={url}>
                <TwitterIcon fontSize="small" />
              </TwitterButton></MenuItem>
              <MenuItem style={{color: "black"}} onClick={popupState.close}> <FacebookButton url={url} appId={"appId"}>
                <FacebookIcon fontSize="small" /> </FacebookButton>
                </MenuItem>
                <MenuItem style={{color: "white"}} onClick={popupState.close}><EmailButton url={url}>
                <EmailIcon fontSize="small" />
                </EmailButton>

                </MenuItem>
              </Menu>
              </React.Fragment>)}
              </PopupState>
          </small>
          <br/>

        </div>

        <aside>
        <p class="black">
        <IconButton aria-label="ArrowBackIos" onClick={() => history.goBack()}>
            <ArrowBackIosIcon fontSize="small" /> <span style={{ fontSize: "18px"}}> Back </span>
        </IconButton>
        <br/>
          <span style={{ fontWeight: "bold"}}> Collaborators:</span> <br/> Dr. Kimia Ghobadi & more background on the author.</p>
        </aside>
        <p class="text">Our model uses the Iterative Proportional Fitting Procedure (IPFP), a classical algorithm in computer science that performs data scaling based on current datasets, to create a mobility network containing information about the number of individuals (agents) traveling from each Census Block Group (CBG) to Point of Interest (POI). A Census Block Group is the smallest geographical unit for which the Census bureau publishes sample data, and has a population of around 600 to 3000 people. We define a POI as any location that an agent can visit such as a coffee shop, school, workplace, etc.</p>
        <figure>
          <div>
            <img width="60%" height="40%" src="/blogpostPic1.png" alt=" " title="POI Visual" />
            <figcaption>Figure 1 - Caption the Figure</figcaption>
          </div>
        </figure>
        <p class="text">Data company Safegraph provides our model with accurate datasets outlining how many people from each CBG arrive at a particular POI every hour. In line with the value we place in users’ privacy, Safegraph data is completely anonymous and does not reveal any identifying information. We leverage this dataset to construct a CBG Marginal and a POI Marginal that are linked to the Visit Matrix which records the number of people travelling from a Census Block Group to a Point of Interest. Since all POI’s have varying durations of visit, we made two assumptions. One, that each visitor to a POI spends a median length of time calculated in that POI and two, that each new visitor in a POI is equally likely to arrive again any time from that time to the next hour. Extreme outliers are also truncated. The Dwell Time Correction Factor is then used to adjust the CBG and POI values, which are used in IPFP to calculate the adjusted visitor matrix that can serve as a probabilistic model for the general mobility network.</p>
        <figure>
          <div>
            <img src="/blogpostPic2.png" alt=" " title="Visit Matrix Visual" />
            <figcaption>Figure 2 - Caption the Figure</figcaption>
          </div>
        </figure>
        <p class="text">Through our past work, we modeled trajectories for individual agents. After extrapolating that data to represent 20 % of the US population,  we scaled it up by a predetermined factor in the IPFP process to accurately delineate the complete picture. Our method also tries to reduce information entropy and limits the amount of error.

Once a mobility network has been assembled using our Machine Learning model, we intend to integrate it with the main simulation. We can then assign members of our synthetic population to each ‘role’ (POI) depending on their CBG and have a simulation that accurately tracks real-world behaviour, trends, demographics and restrictions such as stay-at-home orders.

In the future, we plan to utilize and compare Safegraph data over different months (eg, in January 2020, when there were no COVID restrictions, compared to March 2020, when regional lockdowns were in place) to search for notable patterns and supply our model different training sets. We also plan to incorporate more metrics such as how many people from each POI go to another POI, which will enhance the precision of our model.
The model also needs to account for the mobility networks of populations not included in the dataset such as prisoners, homeless individuals, children under 13, or adults without cell phones.

</p>
      </div>
        <CommentBox className="center"/>
        <Toolbar></Toolbar>


    </div>


   );
}

class BackButton {
    handleClick = () => {
        this.props.goBack();
    };

    render() {
        return <Button variant="contained" color="primary" onClick={this.handleClick}>Go Back</Button>;
    }
}


export default BlogPost;
