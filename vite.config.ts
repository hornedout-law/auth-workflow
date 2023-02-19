import { defineConfig } from 'vite'
import {OutputOptions, Plugin, SourceMap} from "rollup"
import {resolve} from "path" 
import {readFileSync, writeFileSync} from "fs"
import react from '@vitejs/plugin-react'
interface AssetInfo {
	fileName: string;
	name?: string;
	needsCodeReference: boolean;
	source: string | Uint8Array;
	type: 'asset';
}

interface ChunkInfo {
	code: string;
	dynamicImports: string[];
	exports: string[];
	facadeModuleId: string | null;
	fileName: string;
	implicitlyLoadedBefore: string[];
	imports: string[];
	importedBindings: { [imported: string]: string[] };
	isDynamicEntry: boolean;
	isEntry: boolean;
	isImplicitEntry: boolean;
	map: SourceMap | null;
	modules: {
		[id: string]: {
			renderedExports: string[];
			removedExports: string[];
			renderedLength: number;
			originalLength: number;
			code: string | null;
		};
	};
	moduleIds: string[];
	name: string;
	referencedFiles: string[];
	type: 'chunk';
}


let HTMLPlugin= ()=> ({
  name:"html-plugin",
  options(options){
   
  },
  generateBundle(options: OutputOptions, bundle: { [fileName: string]: AssetInfo | ChunkInfo}, isWrite: boolean){
    let outputFolder = options.dir;
    let assets = Object.keys(bundle);
    let htmlAsset = assets.filter(c=>c.match(/^.*index.html$/igy)?.length!=0)
    console.log(htmlAsset[htmlAsset.length-1])
    let codes = assets.map(c=>(bundle[c] as ChunkInfo).code)
    writeFileSync("bundle3.json", JSON.stringify(bundle[htmlAsset[htmlAsset.length-1]]))
  }
  
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ],
  build:{
    outDir: "dist",
    rollupOptions: {
      input: {"server": "./src/main-server.tsx", "client": "index.html"},
      output: {
        entryFileNames: "[name]/main.js"
      }
      
    },
    assetsDir: "client/assets",
    
  },
})
