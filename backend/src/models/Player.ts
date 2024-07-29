import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
  name: { type: String, required: true },
  summonerLevel: { type: Number, required: true },
  profileIconId: { type: Number, required: true }
});

const Player = model('Player', playerSchema);

export default Player;

