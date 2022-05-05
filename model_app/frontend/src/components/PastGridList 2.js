import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';
import { any } from 'prop-types';

function PastGridList(role = 'all') {
    var PastTileData = [];
    var i = 0;
    for (i = 0; i < tileData.length; i++) {
        if (tileData[i].role == "Past Member") {
            PastTileData.push(tileData[i]);
        }
    }
    return GridList(PastTileData);
}

export default PastGridList
