import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

const MLGridList = (role = 'all') => {
  const MLTileData = [];
  for (let i = 0; i < tileData.length; i++) {
    if (tileData[i].role === "ML") {
      MLTileData.push(tileData[i]);
    }
  }
  return GridList(MLTileData);
};

export default MLGridList;
