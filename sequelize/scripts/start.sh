#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  npm run prod
else
  # TODO: colocar execução de migrations e rotinas necessárias ao subir a aplicação neste ponto
  npx sequelize db:migrate
  npm run dev
fi