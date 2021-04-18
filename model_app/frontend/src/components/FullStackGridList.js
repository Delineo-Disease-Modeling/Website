import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

function FullStackGridList(role = 'all') {
    var fullStackTileData = [];
    var i = 0;
    for (i = 0; i < tileData.length; i++) {
        if (tileData[i].role === "Fullstack") {
            fullStackTileData.push(tileData[i]);
        }
    }
    return GridList(fullStackTileData);
}

export default FullStackGridList
