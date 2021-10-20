import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

const SimGridList = (role = 'all') => {
  const SimTileData = [];
  for (let i = 0; i < tileData.length; i++) {
    if (tileData[i].role === "Simulation") {
      SimTileData.push(tileData[i]);
    }
  }
  return GridList(SimTileData);
};

export default SimGridList;
