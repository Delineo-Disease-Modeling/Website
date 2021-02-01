import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getDemographics } from '../actions/demographicsActions';
import PropTypes from 'prop-types';

class Place extends Component {
    // initialization (DOM rendered)
    componentDidMount() {
        // initialize with actual data if a search was performed
        // otherwise, initialize with info from Autauga County
        if (this.props.place) {
            this.updateDemographics(this.props.place);
        }
        else {
            this.props.getDemographics('AL', 'Autauga County');
        }
    }

    // only rerender if props.place has changed (i.e. the location in the search box)
    componentDidUpdate(prevProps) {
        if (this.props.place !== prevProps.place) {
            this.updateDemographics(this.props.place);
        }
    }

    updateDemographics = (place) => {
        let state = "";
        let county = "";

        // find the state and county the searched location resides in
        // administrative_area_level_# is defined by Google Maps API
        for (let key = 0; key < place.length; key++) {
            if (place[key].types[0] === "administrative_area_level_1")
                state = place[key].short_name;
            else if (place[key].types[0] === "administrative_area_level_2")
                county = place[key].short_name;
        }

        if (!state || !county) {
            // error handling here
            console.log('Not a county');
        } else {
            // api call to our db to get demographics info
            this.props.getDemographics(state, county);
        }
    }

    render() {
        const { FIPS, Area_Name, POP_ESTIMATE_2018 } = this.props.demographics;

        return (
            <Container>
                <div style={{backgroundColor:'#1b4441ad', height:'55px', textAlign:'center', paddingTop:'13px', border:'2px solid #66FCF1', borderRadius:'40px'}}>
                    <h6 style={{ color:'white'}}>
                        The county with FIPS: {FIPS} is in {Area_Name} and 
                        has population {POP_ESTIMATE_2018}
                    </h6>
                </div>
                        
            </Container>
        );
    }
}


Place.propTypes = {
    getDemographics: PropTypes.func.isRequired,
    demographics : PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    demographics: state.demographics,
    place: state.place['address_components']
});

// first param of connect: mapStateToProp since state is immutable in Redux Architecture
// Second param of connect is actions necessary for the component
export default connect(mapStateToProps, { getDemographics })(Place);
