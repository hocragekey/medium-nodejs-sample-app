const Koa = require('koa');
const app = new Koa();
const winston = require('winston')

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
}

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

logger.log('info', 'application started on port 3000');