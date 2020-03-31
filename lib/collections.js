import { Mongo } from 'meteor/mongo';

export const Equipes = new Mongo.Collection('equipes');
export const Resultats = new Mongo.Collection('resultats');
export const Matchs = new Mongo.Collection('matchs');