import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from './StyledButton';
import Carousel from './CarouselSection';
import anytownScreenshot from "../images/anytownScreenshot.png";
import homepagecode from '../images/simulator_img.png'

const useStyles = makeStyles((theme) => ({
    carousel: {
        padding: '100px',
        marginTop: '50px',
        color: 'white',
    },
    base: {
        borderTop: '3px solid #66FCF1'
    },
    description: {
        fontSize: '20px',
        letterSpacing: '0.75px',
        padding: '20px 50px',
        color: 'white'
    },
    img: {
        width: '70%',
        height: '100%',
        paddingBottom: '30px',
        borderBottom: '3px solid #66FCF1'
    },

    gallery: {
        padding: '150px 50px 100px 50px',
    },

    grid: {
        marginBottom: '50px'
    },

    border: {
        width: '200px',
        margin: 'auto',
        borderTop: '3px solid #66FCF1',
        marginBottom: '10px'
    },
    paper: {
        color: 'white'
    }
}));

function setParams(subject) {
    var title = '';
    var description = '';
    var link = '';
    var buttontxt = '';
    var images = [];
    var captions = [];
    if (subject === 'simulation') {
        title = 'SIMULATION';
        description = "Viruses, such as the one that causes COVID-19, spread quickly through large cities because of a complex web of interactions between people taking place in a densely populated area. But how viruses move from person to person in smaller, rural communities is less well understood, resulting in public health and economic decisions that are made on the basis of scant information and overgeneralized modeling. The Delineo project is developing a distributed programming environment to run the model over large numbers of computers to scale up the areas that can be accurately modeled.";
        buttontxt = 'VIEW SIMULATION';
        link = '/simulator';
        images[0] = homepagecode;
        images[1] = anytownScreenshot;
        captions[0] = 'Screenshot of Unity Anytown with configurations.';
        captions[1] = 'Zoomed-in view of buildings in Unity Anytown.';
    }
    return { title, description, buttontxt, link, images, captions };
}

export default function InfoBlock(props) {
    const classes = useStyles();
    const { title, description, buttontxt, link, images, captions } = setParams(props.subject);

    return (
        <div className={classes.base} style={{ backgroundColor: props.background }}>
            <div className={classes.gallery}>
                <Typography variant="h3" component="h2" style={{ color: 'white'}}>
                    {title}
                </Typography>
                <div className={classes.border}></div>
                <Typography variant="body1" component="h2" className={classes.description}>
                    {description}
                </Typography>

                <Button href={link} size='large' color='inherit' >
                    {buttontxt}
                </Button>

                <div style={{ marginTop: '30px'}}>
                    {Carousel(captions, images)}
                </div>
            </div>
        </div>
    );
}