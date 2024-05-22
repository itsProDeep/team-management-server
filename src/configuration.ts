import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  mongoDB: {
    host: 'cluster0.fr98kbx.mongodb.net',
    username: 'pradeepkumarsingh564',
    password: '9BzAoH9Fk52ae2UI',
  },
  redis: {
    host: 'redis-19546.c277.us-east-1-3.ec2.cloud.redislabs.com',
    port: 19546,
    password: 'ngqezHjhSYkGgSjhABqxWbAK9VZCjkS4',
  },
}));
