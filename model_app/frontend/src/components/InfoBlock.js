import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from './StyledButton';
import Grid from '@material-ui/core/Grid';
import Carousel from './CarouselSection';

const useStyles = makeStyles((theme) => ({
    carousel: {
        padding: '100px',
        marginTop: '50px',
        color: 'white'
    },
    base: {
        padding: '10px 50px 10px 50px',
        backgroundColor: 'black'//'C4C4C4'
    },
    description: {
        fontSize: '20px',
        letterSpacing: '2px',
        padding: '30px 50px'
    },
    img: {
        width: '70%',
        height: '100%',
        paddingBottom: '30px',
        borderBottom: '3px solid #66FCF1'
    },

    gallery: {
        margin: '50px 0',
        padding: '100px 100px',
        backgroundColor: '#222629',
        borderRadius: '15px',
        boxShadow: '10px 5px 5px black',
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
    var buttontxt = '';
    var images = [];
    var captions = [];
    if (subject === 'visualization') {
        title = 'MAP VISUALIZATION';
        description = "The Johns Hopkins Coronavirus Resource Center (CRC) is a continuously updated source of COVID-19 data and expert guidance. We aggregate and analyze the best data available on COVID-19—including cases, as well as testing, contact tracing and vaccine efforts—to help the public, policymakers and healthcare professionals worldwide respond to the pandemic.";
        buttontxt = 'VIEW MAP';
        images[0] = "https://foxbaltimore.com/resources/media/61c51eec-222d-4918-88c3-0b23fbe9da54-large16x9_mdcases.PNG?1584798406087";
        images[1] = "https://mma.prnewswire.com/media/1154534/Perception_Health_COVID_Map_2020.jpg?p=publish&w=950";
        images[2] = "https://www.amcharts.com/wp-content/uploads/2014/02/motion-chart-shot.png";
        images[3] = "https://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/1b910723-0066-4d56-b1fc-a26b052120ea/gr1.jpg";
        captions[0] = 'County Level';
        captions[1] = 'State Level';
        captions[2] = 'Motion Chart';
        captions[3] = 'Daily Summary';
    } else if (subject === 'stimulation') {
        title = 'SIMULATION';
        description = "Viruses, such as the one that causes COVID-19, spread quickly through large cities because of a complex web of interactions between people taking place in a densely populated area. But how viruses move from person to person in smaller, rural communities is less well understood, resulting in public health and economic decisions that are made on the basis of scant information and overgeneralized modeling. The Delineo project is developing a distributed programming environment to run the model over large numbers of computers to scale up the areas that can be accurately modeled.";
        buttontxt = 'VIEW SIMULATION';
        images[0] = "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2020/03/14/Health-Environment-Science/Graphics/promo2-coronavirus-simulator-0313.jpg";
        images[1] = "https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2020/06/Covid-19-coronavirus-sneeze-simulation_Dassualt-Systemes-1.jpg";
        images[2] = "https://images.theconversation.com/files/342926/original/file-20200619-70415-35zyha.jpg?ixlib=rb-1.1.0&rect=2057%2C0%2C5656%2C2822&q=45&auto=format&w=1356&h=668&fit=crop";
        images[3] = "https://blogs.solidworks.com/solidworksblog/wp-content/uploads/sites/2/2020/04/reza_cfd_1.png";
        captions[0] = 'Simulation 1';
        captions[1] = 'Simulation 2';
        captions[2] = 'Simulation 3';
        captions[3] = 'Simulation 4';
    }
    return { title, description, buttontxt, images, captions };
}

export default function InfoBlock(props) {
    const classes = useStyles();
    const { title, description, buttontxt, images, captions } = setParams(props.subject);

    return (
        <div className={classes.base} style={{ backgroundColor: props.background }}>
            <div className={classes.gallery}>
                <Typography variant="h3" component="h2" >
                    {title}
                </Typography>
                <div className={classes.border}></div>
                <Typography variant="body1" component="h2" className={classes.description}>
                    {description}
                </Typography>

                <Button href='#top' size='large' color='inherit'>
                    {buttontxt}
                </Button>
                
                {Carousel(captions, images)}
            </div>
        </div>
    );
}