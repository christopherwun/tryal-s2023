/*
Edit this file to edit which routers are used by the server.
In order to add a router, please 
1) Import it into the file
2) Come up with a prefix for routes which direct to the router. 
The prefix should be of the form '/api/ROUTERNAME'
3) Add an entry with the prefix and imported router to prefixToRouterMap
*/
import { Router } from 'express';
import adminRouter from './admin.route';
import authRouter from './auth.route';
import researcherRouter from './researcher.route';
import trialRouter from './trial.route';
import messageRouter from './message.route';

const prefixToRouterMap: { prefix: string; router: Router }[] = [
  {
    prefix: '/api/auth',
    router: authRouter,
  },
  {
    prefix: '/api/admin',
    router: adminRouter,
  },
  {
    prefix: '/api/researcher',
    router: researcherRouter,
  },
  {
    prefix: '/api/trial',
    router: trialRouter,
  },
  {
    prefix: '/api/messages',
    router: messageRouter,
  },
];

export default prefixToRouterMap;
