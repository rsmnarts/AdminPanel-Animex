'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimeGenreSchema extends Schema {
  up () {
    this.create('anime_genres', (table) => {
      table.increments()
      table.integer('id_anime')
      table.integer('id_genre')
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('anime_genres')
  }
}

module.exports = AnimeGenreSchema
