import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

function MLGridList(role = 'all') {
    var MLTileData = [];
    var i = 0;
    for (i = 0; i < tileData.length; i++) {
        if (tileData[i].role === "ML") {
            MLTileData.push(tileData[i]);
        }
    }
    return GridList(MLTileData);
}

export default MLGridList
