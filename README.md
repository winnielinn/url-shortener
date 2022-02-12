# **URL shortener**

Use the web app to create a shortened link making it easy to remember.

![GITHUB](https://raw.githubusercontent.com/winnielinn/url-shortener/af9f7a6eaede42c94d03172413a2ac7aaa76c15d/public/home_page.png "home_page")

By copying link or scanning QR code, enter web you input.

![GITHUB](https://raw.githubusercontent.com/winnielinn/url-shortener/af9f7a6eaede42c94d03172413a2ac7aaa76c15d/public/url_shorten.png "url_shorten")

## **Getting Start**

### **Environment Setup**

* Node.js v14.16.0

* MongoDB v4.2.18

### **Installing**

1. Check requirement for environment setup.

2. Open your terminal and use 'git clone' to copy this project to local.

```
git clone https://github.com/winnielinn/url-shortener.git
```

3. Connect MongoDB server.

```
cd ~/mongodb/bin/
```

```
./mongod --dbpath /Users/[Users'name]/mongodb-data
```

4. Change directory to the project.

```
cd url-shortener
```

5. Install all dependencies.

```
npm install
```

6. Install nodemon package.

```
npm install -g nodemon 
```

7. Run server in localhost using following npm script.

```
npm run dev
```

9. If successful, `App is running on http://localhost:3000` will show in your terminal and you could open this URL to use the web app.

## **Devtools**

* Express 4.17.2

* Express-Handlebars 6.0.2

* Bootstrap 5.1.0

* mongoose 6.2.1

* random-string 0.2.0

* valid-url 1.0.9

## **Contributor**

> [Winnie Lin](https://github.com/winnielinn)
