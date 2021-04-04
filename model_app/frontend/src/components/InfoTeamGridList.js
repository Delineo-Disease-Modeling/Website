import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';
import { any } from 'prop-types';

function InfoTeamGridList(role = 'all') {
    var InfoTeamTileData = [];
    var i = 0;
    for (i = 0; i < tileData.length; i++) {
        if (tileData[i].role == "Information Support") {
            InfoTeamTileData.push(tileData[i]);
        }
    }
    return GridList(InfoTeamTileData);
}

export default InfoTeamGridList
