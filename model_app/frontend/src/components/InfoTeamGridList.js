import GridList from './SectionGridList';
import tileData from '../const/teamTileData.js';

const InfoTeamGridList = (role = 'all') => {
  const InfoTeamTileData = [];
  for (let i = 0; i < tileData.length; i++) {
    if (tileData[i].role === "Information Support") {
      InfoTeamTileData.push(tileData[i]);
    }
  }
  return GridList(InfoTeamTileData);
};

export default InfoTeamGridList;
