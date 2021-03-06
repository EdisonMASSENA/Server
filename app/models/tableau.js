module.exports = (sequelize, Sequelize) => {

  const Tableau = sequelize.define("tableau", {
    chef: {
      type: Sequelize.STRING
    },
    direction: {
      type: Sequelize.STRING
    },
    priorite: {
      type: Sequelize.STRING
    },
    projet: {
      type: Sequelize.STRING
    },
    etat: {
      type: Sequelize.STRING
    },
    tendance: {
      type: Sequelize.STRING
    },
    accompli: {
      type: Sequelize.STRING
    },
    attention: {
      type: Sequelize.STRING
    },
    enCours: {
      type: Sequelize.STRING
    },
  });

  return Tableau;
};
