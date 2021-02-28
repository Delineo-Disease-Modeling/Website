import GridList from './GridList';
import tileData from '../const/teamTileData.js';
import { any } from 'prop-types';

function TeamGridList(role = 'all') {
  // if (role == 'all') {
  //   console.log("Test");
  //   return GridList(tileData);
  // }
  // const requiredList = [];
  // var i;
  // for (i = 0; i < tileData.length; i++) {
  //   if (tileData[i].role == role) {
  //     requiredList.push(tileData[i]);
  //   }
  // }
  // return GridList(requiredList);
  return GridList(tileData);
}

export default TeamGridList