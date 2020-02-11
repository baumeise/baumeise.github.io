# baumeise microsite

## Description

This is the vuepress construct for the documentation of the learning robot Amsel.

- For updating and working with the main page checkout the branch `baumeise`
- The Amsel subpage is located in the branch `amsel`

### How to commit

1. Fork the repository

```sh
# clone your project fork
git clone git@github.com:<YOUR-USERNAME>/baumeise.github.io.git

# checkout branch baumeise & install node modules
git checkout -b baumeise origin/baumeise && npm install

# checkout branch baumeise & install node modules
git checkout -b amsel origin/amsel && npm install
```

### Compiles and hot-reloads for development

```sh
npm run dev
```

Your local clone should now be available on http://localhost:8080.

For changing the website from baumeise to amsel or vice versa checkout the desired branch:

```sh
git checkout <DESIRED-BRANCH>
```

### Release changes

For releasing changes open a pull request against the branches `baumeise.github.io/baumeise` or `baumeise.github.io/amsel`.

### License

[MIT License](https://github.com/moritzgvt/amseldocs/blob/master/LICENSE) | Copyright © 2019 Moritz Gut (moritzgvt)
