import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
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
import EmailIcon from '@material-ui/icons/Email';

const url = 'google.com';
function BlogPost (props) {
   return (

    <div className="App">
        <Toolbar></Toolbar>

      <div className="center">

        <h2>Development Blog Post Title</h2>
          <h6>Subtitle of Blog Post</h6>
        <div>
        <div className="relative m-r-10 w-50 h-50 b-r-full" style={{backgroundImage: 'url("https://webassets.mongodb.com/_com_assets/cms/Siya-adfnai3e2j.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} />

          <small>
            Date of Blog &#8226; <a href="/blog/search/Siya%20Raj%20Purohit">Author Name</a>
          </small>
          <br/>
          <TwitterButton url={url}>
              <TwitterIcon fontSize="small" />
           </TwitterButton>
           <FacebookButton url={url} appId={"appId"}>
              <FacebookIcon fontSize="small" />
          </FacebookButton>
          <EmailButton url={url}>
            <EmailIcon fontSize="small" />
          </EmailButton>


        </div>

        <figure>
          <div className="fl-center">
            <img width="70%" height="40%" src="https://webassets.mongodb.com/_com_assets/cms/Screen Shot 2020-12-02 at 4.08.21 PM-xy41b57f1w.png" alt=" " title=" " />
            <figcaption>Figure 1 - Caption the Figure</figcaption>
          </div>
        </figure>
        <div className="callout">
          <h4>Context of BlogPost</h4>
            <p class="text">
              Description of Blogpost Context with any other background information needed.
            </p>
          </div>

        <h4>Blogpost Headers</h4>
        <p class="text">Information</p>



      </div>
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
