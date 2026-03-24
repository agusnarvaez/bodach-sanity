import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5lmhl5ew',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
  },
})
