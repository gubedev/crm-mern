# CRM-MERN

Basic setup for MERN project

![screenshot](https://github.com/gubedev/crm-mern/blob/main/docs/screen-01.png)
![screenshot](https://github.com/gubedev/crm-mern/blob/main/docs/screen-02.png)

## Begin 🚀

These instructions will allow you to get a copy of the project running on your local machine for development purposes and deployment.

See **Deployment** to deploy to Heroku.


### Env Variables 📋

Configure yours values.

```
SECRET_KEY='abc123'
NODE_ENV=DEV
DEV_PORT=6053
MONGO_URI=your mongodb uri
```

### Install Dependencies (frontend & backend) 🔧

_Create backend for develpment_

```

npm install
```

_Create frontend for develpment_


```

cd frontend
npm install
```

_Run backend and frontend_

```

cd .. (to return to the root)
npm run dev
```


## Deployment 📦

First create your heroku project using heroku cli. Then use this code in the created project.

```
$ git add .
$ git commit -am "basic setup"
$ git push heroku master
```

## Authors ✒️


* **Gustavo M. Benitez** - *Coding* - [gubedev](https://github.com/gubedev)

## License 📄

This project is under the MIT license - see [LICENSE.md](LICENSE.md) for details