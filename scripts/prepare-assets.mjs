import sharp from 'sharp';
import {copyFile} from 'node:fs/promises';
const out='public/assets/';
for(const name of ['clinic','treatment','campaign'])await sharp(`materials/originals/${name}.jpg`).resize({width:720,withoutEnlargement:true}).webp({quality:84}).toFile(out+name+'.webp');
await sharp('materials/originals/clinic.jpg').extract({left:0,top:550,width:720,height:710}).webp({quality:85}).toFile(out+'clinic-detail.webp');
await sharp('materials/originals/treatment.jpg').extract({left:0,top:50,width:720,height:640}).webp({quality:85}).toFile(out+'treatment-detail.webp');
// Recorte mecânico do lettering oficial, sem redesenho. Original íntegro preservado.
await sharp('materials/originals/logo.jpeg').extract({left:300,top:650,width:600,height:170}).resize(600).png().toFile(out+'logo.png');
await sharp('materials/originals/logo.jpeg').extract({left:470,top:370,width:245,height:250}).resize(64).png().toFile(out+'logo-symbol.png');
for(const width of [600,1200])await sharp('materials/originals/summer-generated.png').resize(width,Math.round(width*4/3),{fit:'cover'}).webp({quality:85}).toFile(out+`summer-${width}.webp`);
await copyFile('node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2',out+'figtree.woff2');
