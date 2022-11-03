// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Questions } = initSchema(schema);

export {
  Questions
};