"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          title: "Foto Jadul",
          caption: "Waktu itu saya kehujanan ya guys ya",
          image_url: "https://photojadul.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Kenangan",
          caption: "Kala itu kenangan paling indah nih coy",
          image_url: "https://photokenangan.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Holiday",
          caption: "Liburan dulu dong brooww",
          image_url: "https://photoliburan.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Foto Menakutkan",
          caption: "Suram banget nih guys",
          image_url: "https://photokenangan.com",
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
