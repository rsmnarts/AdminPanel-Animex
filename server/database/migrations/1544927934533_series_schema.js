'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeriesSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.increments()
      table.string('title', 100)
      table.timestamps()
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SeriesSchema
