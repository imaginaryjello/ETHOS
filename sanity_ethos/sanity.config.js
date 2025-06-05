import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {createSchema} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'sanity_ethos',

  projectId: '6dxq1mbr',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
