"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          title: "Foto Pertama milik UserId 1",
          caption: "Foto Pertama milik UserId 1",
          image_url: "https://FotoPertamaUserSatu",
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Kedua milik UserId 1",
          caption: "Foto Kedua milik UserId 1",
          image_url: "https://FotoKeduaUserSatu",
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Ketiga milik UserId 1",
          caption: "Foto Ketiga milik UserId 1",
          image_url: "https://FotoKetigaUserSatu",
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
