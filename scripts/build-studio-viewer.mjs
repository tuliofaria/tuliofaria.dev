import {build} from 'esbuild'
await build({entryPoints:['lib/studio-viewer.js'],outfile:'public/estudio-3d/viewer.js',bundle:true,minify:true,format:'iife',legalComments:'inline'})
