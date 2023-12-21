import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'support_requests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('email').notNullable()
      table.string('messageTitle')
      table.string('messageText')
      table.string('fileUpload')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
  //     table.timestamp('created_at', { useTz: true })
  //     table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}