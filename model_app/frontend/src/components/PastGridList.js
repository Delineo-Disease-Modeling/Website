import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

const PastGridList = (role = 'all') => {
  const PastTileData = [];
  for (let i = 0; i < tileData.length; i++) {
    if (tileData[i].role === "Past Member") {
      PastTileData.push(tileData[i]);
    }
  }
  return GridList(PastTileData);
};

export default PastGridList;
