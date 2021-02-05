import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';


import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/SpaceXLaunch/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  server.get('/api/**', (req, res) => {
    // res.status(404).send("API calling not supported");
    const axios = require('axios');
    const API_ENDPOINT='https://api.spaceXdata.com/v3/launches?limit=100';

    axios.get(API_ENDPOINT,{
      params:req.query
    })
        .then(response => {
 
          // const {data={}, status=0}=response; //Response destructuring

           if(response.status==200)
           {
             //Successful response
                try{
                  let data:any[]=response.data;
                  let trimmedResponse=[];
                  data.forEach((launchItem) => {
                    let item={};
                    item['flight_number']=launchItem.flight_number==null?'Not Available':launchItem.flight_number;
                    item['mission_name']=launchItem.mission_name==null?'Not Available':launchItem.mission_name;
                    item['mission_id']=launchItem.mission_id==null?[]:launchItem.mission_id;
                    item['launch_year']=launchItem.launch_year==null?'Not Available':launchItem.launch_year;
                    item['launch_success']=launchItem.launch_success==null?'Not Available':launchItem.launch_success;
                    item['images']={
                     small:launchItem.links.mission_patch_small,
                     large:launchItem.links.mission_patch
                    }
                    item['land_success']=launchItem.rocket.first_stage.cores[0].land_success==null?'Not Available':launchItem.rocket.first_stage.cores[0].land_success;
                    trimmedResponse.push(item);
                  });
                 res.send(trimmedResponse);
                }
                catch(error)
                {
                  console.log(error);
                  // res.send(response.data);
                  res.status(500).send('There is an issue with Our Server');
                }
            
            }
           else
           {
             //Failure response
             res.send('There is an issue with Space X Server');
           }
            
        })
        .catch(error => {
            console.log(error);
        });
   });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
