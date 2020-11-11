// Dependencies
const { Model } = require('objection');

// Post model
module.exports = class Post extends Model {
  static get tableName() {
    return 'post';
  }

  async $beforeInsert(context) {
    await super.$beforeInsert(context);

    if (this.order) {
      return;
    }

    const result = await this.constructor.query(context.transaction)
      .select('order')
      .orderBy('order', 'desc')
      .limit(1)
      .first();

    this.order = result && result.order ? result.order + 1 : 1;

    return this;
  }
};