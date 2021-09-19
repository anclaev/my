const ghpages = require("gh-pages")

ghpages.publish("public", {
  branch: "prod",
  repo: "https://github.com/anclaev/my.git",
  user: "anclaev",
  email: "iahugo@yandex.ru",
  message: "Деплой проекта.",
})
