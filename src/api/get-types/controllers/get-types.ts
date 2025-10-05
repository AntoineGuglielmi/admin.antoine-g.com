/**
 * get-types controller
 */

import fs from 'fs/promises'

export default {
  async getTypes(ctx) {
    try {
      const content = await fs.readFile('types/strapi-types.ts', 'utf-8')
      ctx.body = { content }
    } catch (err) {
      ctx.throw(500, `Erreur lecture fichier: ${err.message}`)
    }
  },
}
